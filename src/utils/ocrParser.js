import Tesseract from 'tesseract.js'
import * as pdfjsLib from 'pdfjs-dist'

// Set worker path to local file (served from public folder)
// This avoids CORS issues with CDN
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'

/**
 * Extracts text from an image file using Tesseract OCR
 * @param {File} imageFile - Image file (PNG, JPG, etc.)
 * @returns {Promise<string>} - Extracted text
 */
export async function extractTextFromImage(imageFile) {
  try {
    const result = await Tesseract.recognize(imageFile, 'eng', {
      logger: (m) => console.log('OCR progress:', m.progress),
    })
    return result.data.text
  } catch (error) {
    throw new Error(`OCR failed: ${error.message}`)
  }
}

/**
 * Extracts text from all pages of a PDF file
 * Falls back to OCR if text extraction fails
 * @param {File} pdfFile - PDF file
 * @returns {Promise<string>} - Extracted text from all pages
 */
export async function extractTextFromPDF(pdfFile) {
  try {
    const arrayBuffer = await pdfFile.arrayBuffer()
    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise
    let allText = ''

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i)
      const textContent = await page.getTextContent()
      const pageText = textContent.items.map((item) => item.str).join(' ')
      allText += pageText + '\n'
    }

    return allText
  } catch (error) {
    console.warn('PDF text extraction failed, falling back to image OCR:', error.message)
    // PDF.js failed (worker could not load), convert PDF to images and use OCR
    // For now, throw the error - user can save as image and retry
    throw new Error(`PDF extraction failed: ${error.message}. Try converting to images or use image upload.`)
  }
}

/**
 * Parses extracted text to identify article codes and quantities
 * Uses improved pattern matching and sorting for better organization
 *
 * @param {string} text - Raw extracted text
 * @returns {Array<{articleCode: string, featureString: string, qty: number, confidence: number}>}
 */
export function parseOCRText(text) {
  const items = []
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)

  // Improved patterns for article codes (Herman Miller format)
  // Matches: E25FNFK-10, AER1B23, RATIO1DN-1, etc.
  const articleCodePattern = /\b([A-Z]{1,6}\d+[A-Z]?\d*(?:[.-][A-Z0-9]*)?)\b/g
  const quantityPattern = /(?:qty|quantity|qte|qte|x|×|\*)\s*[:\s]*(\d+)|(\d+)\s*(?:unit|pc|pcs|stk)/i

  // Extract potential article codes from entire text
  const codeMatches = text.matchAll(articleCodePattern)
  const seenCodes = new Set()

  for (const match of codeMatches) {
    const code = match[0].trim()

    // Filter out likely false positives (too short, all numbers, etc)
    if (code.length < 3 || /^\d+$/.test(code) || seenCodes.has(code)) continue

    seenCodes.add(code)

    // Find the line containing this code
    const lineIndex = lines.findIndex((l) => l.includes(code))
    const contextLine = lineIndex >= 0 ? lines[lineIndex] : ''
    const nextLine = lineIndex >= 0 && lineIndex < lines.length - 1 ? lines[lineIndex + 1] : ''

    // Try to extract quantity from context
    let qty = 1
    let confidence = 'medium'

    // Check current line for quantity
    let qtyMatch = contextLine.match(quantityPattern)
    if (qtyMatch) {
      qty = parseInt(qtyMatch[1] || qtyMatch[2], 10) || 1
      confidence = 'high'
    } else {
      // Check next line
      qtyMatch = nextLine.match(quantityPattern)
      if (qtyMatch) {
        qty = parseInt(qtyMatch[1] || qtyMatch[2], 10) || 1
        confidence = 'high'
      }
    }

    items.push({
      articleCode: code,
      featureString: '',
      qty: Math.max(1, qty),
      confidence,
      lineIndex, // for sorting later
    })
  }

  // Remove duplicates while preserving first occurrence
  const uniqueItems = []
  const seen = new Set()
  for (const item of items) {
    const key = item.articleCode
    if (!seen.has(key)) {
      seen.add(key)
      uniqueItems.push(item)
    }
  }

  // Sort by line order (preserve document structure)
  uniqueItems.sort((a, b) => a.lineIndex - b.lineIndex)

  // Remove helper fields before returning
  return uniqueItems.map(({ lineIndex, confidence, ...item }) => item)
}

/**
 * Main OCR import function - handles PDF or image files
 * Returns both raw text and parsed items for user review
 * @param {File} file - PDF or image file
 * @returns {Promise<{items: Array, extractedText: string, needsReview: boolean, error?: string}>}
 */
export async function parseOCRDocument(file) {
  try {
    let extractedText = ''

    if (file.type === 'application/pdf') {
      extractedText = await extractTextFromPDF(file)
    } else if (file.type.startsWith('image/')) {
      extractedText = await extractTextFromImage(file)
    } else {
      return { items: [], extractedText: '', needsReview: false, error: `Unsupported file type: ${file.type}` }
    }

    const items = parseOCRText(extractedText)
    
    // Return with flag for review - user should verify extracted data
    return { items, extractedText, needsReview: true }
  } catch (error) {
    return { items: [], extractedText: '', needsReview: false, error: error.message }
  }
}
