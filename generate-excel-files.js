/**
 * Generate Excel test files from mock product data
 * Uses the same product mix patterns as the OBX files
 */

import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mock product data from productStore
const mockProducts = {
  AER1B23: { name: 'Aeron Chair Medium-Back', basePrice: 2000 },
  AER1C30: { name: 'Aeron Chair Large-Back', basePrice: 2100 },
  AER1A18: { name: 'Aeron Chair Small-Back', basePrice: 1900 },
  AER1B25: { name: 'Aeron Stool', basePrice: 1800 },
  MIR2B33: { name: 'Mirra Chair Standard', basePrice: 895 },
  MIR2C40: { name: 'Mirra Chair Premium', basePrice: 950 },
  MIR2A25: { name: 'Mirra Task Chair', basePrice: 850 },
  MIR2B35: { name: 'Mirra with Arms', basePrice: 920 },
  CEL1A11: { name: 'Celle Chair Basic', basePrice: 595 },
  CEL1B22: { name: 'Celle Chair Standard', basePrice: 650 },
  CEL1C33: { name: 'Celle Chair Premium', basePrice: 720 },
};

// Invalid product codes to mix in
const invalidCodes = [
  'PHM9X99', 'FAKE001', 'GHO1Z99', 'XXXX0000', 'ZZZZZ111', 
  'TST1A01', 'NOT1B22', 'INVALID1', 'BADCODE2', 'PHANTOM3'
];

// Create a row with product data
function createRow(code, productName, features, price, quantity = 1) {
  return {
    'Article Code': code,
    'Product Name': productName,
    'Feature String': features || '',
    'Unit Price': price,
    'Quantity': quantity,
  };
}

// Generate sample-valid.xlsx: ~70% valid + ~30% invalid
function generateSampleValid() {
  const data = [];
  const validCodes = Object.keys(mockProducts).slice(0, 8); // 8 valid codes
  
  // Interleave valid and invalid
  const rows = [
    createRow(validCodes[0], mockProducts[validCodes[0]].name, '', mockProducts[validCodes[0]].basePrice),
    createRow('PHM9X99', 'Unknown Product', '', 0), // Invalid
    createRow(validCodes[1], mockProducts[validCodes[1]].name, 'with arms', mockProducts[validCodes[1]].basePrice + 100),
    createRow(validCodes[2], mockProducts[validCodes[2]].name, '', mockProducts[validCodes[2]].basePrice),
    createRow(validCodes[3], mockProducts[validCodes[3]].name, '', mockProducts[validCodes[3]].basePrice),
    createRow('FAKE001', 'Invalid Product', '', 0), // Invalid
    createRow(validCodes[4], mockProducts[validCodes[4]].name, '', mockProducts[validCodes[4]].basePrice),
    createRow(validCodes[5], mockProducts[validCodes[5]].name, 'black leather', mockProducts[validCodes[5]].basePrice + 50),
    createRow(validCodes[6], mockProducts[validCodes[6]].name, '', mockProducts[validCodes[6]].basePrice),
    createRow('GHO1Z99', 'Ghost Product', '', 0), // Invalid
    createRow(validCodes[7], mockProducts[validCodes[7]].name, '', mockProducts[validCodes[7]].basePrice),
  ];
  
  data.push(
    createRow('Article Code', 'Product Name', 'Feature String', 'Unit Price', 'Quantity'), // Header
    ...rows.map((row, idx) => ({
      'Article Code': row['Article Code'],
      'Product Name': row['Product Name'],
      'Feature String': row['Feature String'],
      'Unit Price': row['Unit Price'],
      'Quantity': row['Quantity'],
    }))
  );
  
  return createWorkbook('sample-valid.xlsx', rows);
}

// Generate sample-invalid-codes.xlsx: ~60% invalid + ~40% valid
function generateSampleInvalidCodes() {
  const validCodes = Object.keys(mockProducts).slice(0, 5); // 5 valid codes
  
  const rows = [
    createRow('PHM9X99', 'Unknown', '', 0), // Invalid
    createRow('XXXX0000', 'Invalid Code', '', 0), // Invalid
    createRow(validCodes[0], mockProducts[validCodes[0]].name, '', mockProducts[validCodes[0]].basePrice),
    createRow('FAKE001', 'Phantom', '', 0), // Invalid
    createRow('ZZZZZ111', 'Fake', '', 0), // Invalid
    createRow(validCodes[1], mockProducts[validCodes[1]].name, '', mockProducts[validCodes[1]].basePrice),
    createRow('TST1A01', 'Test', '', 0), // Invalid
    createRow('NOT1B22', 'NotReal', '', 0), // Invalid
    createRow(validCodes[2], mockProducts[validCodes[2]].name, 'with options', mockProducts[validCodes[2]].basePrice),
    createRow('INVALID1', 'Bad', '', 0), // Invalid
    createRow(validCodes[3], mockProducts[validCodes[3]].name, '', mockProducts[validCodes[3]].basePrice),
  ];
  
  return createWorkbook('sample-invalid-codes.xlsx', rows);
}

// Generate sample-pricing-anomaly.xlsx: ~50% correct + ~50% mismatch
function generateSamplePricingAnomaly() {
  const validCodes = Object.keys(mockProducts);
  
  const rows = [
    createRow(validCodes[0], mockProducts[validCodes[0]].name, '', 999.99, 1), // PRICE MISMATCH
    createRow(validCodes[1], mockProducts[validCodes[1]].name, '', mockProducts[validCodes[1]].basePrice, 1), // Correct
    createRow(validCodes[2], mockProducts[validCodes[2]].name, '', 49.99, 1), // PRICE MISMATCH
    createRow(validCodes[3], mockProducts[validCodes[3]].name, '', mockProducts[validCodes[3]].basePrice, 1), // Correct
    createRow(validCodes[4], mockProducts[validCodes[4]].name, '', 1050, 1), // PRICE MISMATCH
    createRow(validCodes[5], mockProducts[validCodes[5]].name, '', mockProducts[validCodes[5]].basePrice, 1), // Correct
    createRow(validCodes[6], mockProducts[validCodes[6]].name, '', 350, 1), // PRICE MISMATCH
    createRow(validCodes[7], mockProducts[validCodes[7]].name, '', mockProducts[validCodes[7]].basePrice, 1), // Correct
    createRow(validCodes[8], mockProducts[validCodes[8]].name, '', 500, 1), // PRICE MISMATCH
    createRow(validCodes[9], mockProducts[validCodes[9]].name, '', mockProducts[validCodes[9]].basePrice, 1), // Correct
    createRow(validCodes[10], mockProducts[validCodes[10]].name, '', mockProducts[validCodes[10]].basePrice, 1), // Correct
  ];
  
  return createWorkbook('sample-pricing-anomaly.xlsx', rows);
}

// Generate sample-malformed.xlsx: ~50% complete + ~50% malformed
function generateSampleMalformed() {
  const validCodes = Object.keys(mockProducts);
  
  const rows = [
    createRow(validCodes[0], mockProducts[validCodes[0]].name, '', mockProducts[validCodes[0]].basePrice), // Valid
    createRow('', 'Product Missing Code', '', 0), // MALFORMED - Missing code
    createRow(validCodes[1], mockProducts[validCodes[1]].name, '', mockProducts[validCodes[1]].basePrice), // Valid
    createRow(validCodes[2], '', '', mockProducts[validCodes[2]].basePrice), // MALFORMED - Missing name
    createRow(validCodes[3], mockProducts[validCodes[3]].name, '', mockProducts[validCodes[3]].basePrice), // Valid
    createRow(validCodes[4], mockProducts[validCodes[4]].name, '', ''), // MALFORMED - Missing price
    createRow(validCodes[5], mockProducts[validCodes[5]].name, '', mockProducts[validCodes[5]].basePrice), // Valid
    createRow(validCodes[6], mockProducts[validCodes[6]].name, '', mockProducts[validCodes[6]].basePrice), // Valid
    createRow('PARTIAL', mockProducts[validCodes[7]].name, '', 0), // MALFORMED - Invalid code format
    createRow(validCodes[8], mockProducts[validCodes[8]].name, '', mockProducts[validCodes[8]].basePrice), // Valid
    createRow(validCodes[9], mockProducts[validCodes[9]].name, '', mockProducts[validCodes[9]].basePrice), // Valid
  ];
  
  return createWorkbook('sample-malformed.xlsx', rows);
}

// Generate sample-mixed-validation.xlsx: All states mixed (6 valid, 2 invalid, 4 warnings)
function generateSampleMixedValidation() {
  const validCodes = Object.keys(mockProducts);
  
  const rows = [
    createRow(validCodes[0], mockProducts[validCodes[0]].name, '', mockProducts[validCodes[0]].basePrice), // Valid
    createRow('BADCODE1', 'Invalid Product', '', 0), // Invalid
    createRow(validCodes[1], mockProducts[validCodes[1]].name, '', 999.99, 1), // Price mismatch warning
    createRow(validCodes[2], mockProducts[validCodes[2]].name, '', mockProducts[validCodes[2]].basePrice), // Valid
    createRow(validCodes[3], mockProducts[validCodes[3]].name, '', 45.99, 1), // Price mismatch warning
    createRow(validCodes[4], mockProducts[validCodes[4]].name, '', mockProducts[validCodes[4]].basePrice), // Valid
    createRow('PHANTOM2', 'Fake Product', '', 0), // Invalid
    createRow(validCodes[5], mockProducts[validCodes[5]].name, '', 12500, 1), // High price warning
    createRow(validCodes[6], mockProducts[validCodes[6]].name, '', mockProducts[validCodes[6]].basePrice), // Valid
    createRow(validCodes[7], mockProducts[validCodes[7]].name, '', 89.99, 1), // Low price warning
    createRow(validCodes[8], mockProducts[validCodes[8]].name, '', mockProducts[validCodes[8]].basePrice), // Valid
  ];
  
  return createWorkbook('sample-mixed-validation.xlsx', rows);
}

// Create workbook and worksheet
function createWorkbook(filename, rows) {
  // Create worksheet with headers
  const wsData = [
    ['Article Code', 'Product Name', 'Feature String', 'Unit Price', 'Quantity'],
    ...rows.map(row => [
      row['Article Code'],
      row['Product Name'],
      row['Feature String'],
      row['Unit Price'],
      row['Quantity'],
    ])
  ];
  
  const ws = XLSX.utils.aoa_to_sheet(wsData);
  
  // Set column widths
  ws['!cols'] = [
    { wch: 15 }, // Article Code
    { wch: 30 }, // Product Name
    { wch: 25 }, // Feature String
    { wch: 12 }, // Unit Price
    { wch: 10 }, // Quantity
  ];
  
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Products');
  
  const filepath = path.join(__dirname, 'public', filename);
  XLSX.writeFile(wb, filepath);
  console.log(`✅ Created ${filepath}`);
  
  return { filename, rows: rows.length };
}

// Main execution
async function generateAllFiles() {
  console.log('🔄 Generating Excel test files...\n');
  
  try {
    const results = [];
    
    results.push(generateSampleValid());
    console.log(`   Created sample-valid.xlsx with ${results[0].rows} rows (70% valid mix)`);
    
    results.push(generateSampleInvalidCodes());
    console.log(`   Created sample-invalid-codes.xlsx with ${results[1].rows} rows (60% invalid mix)`);
    
    results.push(generateSamplePricingAnomaly());
    console.log(`   Created sample-pricing-anomaly.xlsx with ${results[2].rows} rows (price variance mix)`);
    
    results.push(generateSampleMalformed());
    console.log(`   Created sample-malformed.xlsx with ${results[3].rows} rows (data integrity mix)`);
    
    results.push(generateSampleMixedValidation());
    console.log(`   Created sample-mixed-validation.xlsx with ${results[4].rows} rows (all states mix)`);
    
    console.log(`\n✨ Successfully generated ${results.length} Excel test files!`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error generating files:', err);
    process.exit(1);
  }
}

generateAllFiles();
