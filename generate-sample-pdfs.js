/**
 * Generate sample order PDFs for testing
 * Uses simple text-based PDF generation
 * 
 * These are basic test PDFs with tabular-like structure
 * Real order PDFs would be more complex, but this demonstrates parsing
 */

import PDFDocument from 'pdfkit'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Sample order data sets
const orderData = [
  {
    name: 'sample-order-1.pdf',
    title: 'Order #ORD-2026-001',
    items: [
      { code: 'AER1B23', name: 'Aeron Chair - Size B', qty: 5, price: 1395 },
      { code: 'MIR2B33', name: 'Mirra Chair 2 - Size B', qty: 3, price: 895 },
      { code: 'CEL1A11', name: 'Celle Chair - Standard', qty: 2, price: 595 },
    ]
  },
  {
    name: 'sample-order-2.pdf',
    title: 'Order #ORD-2026-002',
    items: [
      { code: 'AER1C30', name: 'Aeron Chair - Size C', qty: 10, price: 1495 },
      { code: 'CEL1B22', name: 'Celle Chair - Premium', qty: 4, price: 650 },
      { code: 'MIR2A25', name: 'Mirra Task Chair', qty: 8, price: 850 },
      { code: 'AER1B25', name: 'Aeron Stool', qty: 2, price: 1200 },
    ]
  },
  {
    name: 'sample-order-mixed.pdf',
    title: 'Order #ORD-2026-003 - Mixed Items',
    items: [
      { code: 'MIR2C40', name: 'Mirra Chair 2 Premium', qty: 1, price: 950 },
      { code: 'PHANTOM1', name: 'Invalid Product', qty: 1, price: 100 },
      { code: 'CEL1C33', name: 'Celle Full Config', qty: 3, price: 720 },
      { code: 'BADCODE99', name: 'Fake Chair', qty: 1, price: 500 },
      { code: 'AER1A18', name: 'Aeron Base Model', qty: 4, price: 1300 },
    ]
  }
]

/**
 * Create a PDF with tabular order data
 */
function createOrderPDF(filePath, title, items) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: 'A4',
        margin: 40,
      })

      const stream = fs.createWriteStream(filePath)
      doc.pipe(stream)

      // Header
      doc.fontSize(20).font('Helvetica-Bold')
      doc.text('ORDER SUMMARY', { align: 'center' })
      doc.fontSize(12).font('Helvetica')
      doc.text(title, { align: 'center' })
      doc.text(`Date: ${new Date().toISOString().split('T')[0]}`, { align: 'center' })
      doc.moveDown()

      // Table header
      doc.fontSize(10).font('Helvetica-Bold')
      const tableTop = doc.y
      const col1 = 50
      const col2 = 150
      const col3 = 350
      const col4 = 450
      const col5 = 520

      doc.text('Article Code', col1, tableTop)
      doc.text('Product Name', col2, tableTop)
      doc.text('Quantity', col3, tableTop)
      doc.text('Unit Price', col4, tableTop)
      doc.text('Total', col5, tableTop)

      // Underline header
      doc.moveTo(50, tableTop + 15).lineTo(570, tableTop + 15).stroke()

      // Table rows
      doc.fontSize(9).font('Helvetica')
      let y = tableTop + 25

      for (const item of items) {
        const total = item.qty * item.price
        
        doc.text(item.code, col1, y)
        doc.text(item.name.substring(0, 30), col2, y)
        doc.text(item.qty.toString(), col3, y)
        doc.text(`$${item.price.toFixed(2)}`, col4, y)
        doc.text(`$${total.toFixed(2)}`, col5, y)

        y += 20
      }

      // Summary line
      doc.moveTo(50, y).lineTo(570, y).stroke()

      const grandTotal = items.reduce((sum, item) => sum + (item.qty * item.price), 0)
      y += 10

      doc.fontSize(11).font('Helvetica-Bold')
      doc.text(`TOTAL: $${grandTotal.toFixed(2)}`, col4, y)

      doc.end()

      stream.on('finish', () => {
        console.log(`✅ Created ${path.basename(filePath)}`)
        resolve()
      })

      stream.on('error', reject)
    } catch (err) {
      reject(err)
    }
  })
}

/**
 * Generate all sample PDFs
 */
async function generateAllPDFs() {
  console.log('🔄 Generating sample order PDFs...\n')

  try {
    const publicDir = path.join(__dirname, 'public')
    
    // Create public dir if needed
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    for (const order of orderData) {
      const filePath = path.join(publicDir, order.name)
      await createOrderPDF(filePath, order.title, order.items)
    }

    console.log(`\n✨ Successfully generated ${orderData.length} sample PDF files!`)
    console.log('📄 Files created:')
    orderData.forEach(o => console.log(`   - ${o.name}`))
  } catch (err) {
    console.error('❌ Error generating PDFs:', err)
    process.exit(1)
  }
}

generateAllPDFs()
