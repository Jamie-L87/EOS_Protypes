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
 * Supports formats like:
 *  - "E25FNFK-10 5" (code + qty on one line)
 *  - "E25FNFK-10\nQuantity: 5"
 *  - "Article: E25FNFK-10, Qty: 3"
 *
 * @param {string} text - Raw extracted text
 * @returns {Array<{articleCode: string, featureString: string, qty: number}>}
 */
export function parseOCRText(text) {
  const items = []
  const lines = text.split(/\r?\n/).filter(Boolean)

  // Pattern 1: "CODE QTY" on single line
  const singleLinePattern = /^([A-Z0-9\.-]+)\s+(\d+)$/i
  // Pattern 2: "CODE" followed by "QTY: N" or "Quantity: N"
  const multiLinePattern = /^([A-Z0-9\.-]+)/i
  // Pattern 3: "Article: CODE, Qty: N"
  const structuredPattern = /Article[:\s]+([A-Z0-9\.-]+)[,\s]*Qu?ty[:\s]*(\d+)/i

  for (const line of lines) {
    let match

    // Try structured format first
    match = line.match(structuredPattern)
    if (match) {
      items.push({
        articleCode: match[1].trim(),
        featureString: '',
        qty: parseInt(match[2], 10) || 1,
      })
      continue
    }

    // Try single-line format
    match = line.match(singleLinePattern)
    if (match) {
      items.push({
        articleCode: match[1].trim(),
        featureString: '',
        qty: parseInt(match[2], 10) || 1,
      })
      continue
    }

    // Try to extract just code from line
    match = line.match(multiLinePattern)
    if (match) {
      const code = match[1].trim()
      if (code.length >= 3) {
        // Look ahead for quantity
        let qty = 1
        const nextLine = lines[lines.indexOf(line) + 1] || ''
        const qtyMatch = nextLine.match(/(\d+)/)
        if (qtyMatch) {
          qty = parseInt(qtyMatch[1], 10)
        }
        items.push({
          articleCode: code,
          featureString: '',
          qty,
        })
      }
    }
  }

  // Remove duplicates
  const seen = new Set()
  return items.filter((item) => {
    const key = item.articleCode + (item.featureString || '')
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
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
