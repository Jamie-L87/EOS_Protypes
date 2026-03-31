/**
 * Test script to verify hex encoding/decoding with real example: AER1A13DW
 * Run with: node test-encoding.js
 */

// Frontend encoder (from itemEncoder.js)
function encodeItemCode(item) {
  let hex = ''
  for (let i = 0; i < item.length; i++) {
    const code = item.charCodeAt(i)
    // UTF-16 LE: low byte first, high byte second
    const lo = code & 0xff
    const hi = (code >> 8) & 0xff
    hex += lo.toString(16).padStart(2, '0').toUpperCase()
    hex += hi.toString(16).padStart(2, '0').toUpperCase()
  }
  return hex
}

// Backend decoder (from SuperProductComponentService.cs)
function decodeItemCode(itemhex) {
  const bytes = new Uint8Array(itemhex.length / 2)
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(itemhex.substring(i * 2, i * 2 + 2), 16)
  }
  
  // Decode as UTF-16 LE (like Encoding.Unicode in .NET)
  const decoder = new TextDecoder('utf-16le')
  let item = decoder.decode(bytes)
  
  // TrimEnd() in .NET (remove trailing nulls and whitespace)
  item = item.replace(/[\0\s]+$/, '')
  
  return item
}

// Test data
const testCodes = [
  'AER1A13DW',
  'E25FNFK-10',
  'SIMPLE'
]

console.log('='.repeat(60))
console.log('Frontend<->Backend Encoding Test')
console.log('='.repeat(60))

for (const code of testCodes) {
  console.log(`\nOriginal: "${code}"`)
  
  const hex = encodeItemCode(code)
  console.log(`Encoded:  ${hex}`)
  console.log(`Hex length: ${hex.length} chars (${hex.length / 2} bytes)`)
  
  const decoded = decodeItemCode(hex)
  console.log(`Decoded:  "${decoded}"`)
  console.log(`Match:    ${code === decoded ? '✓ OK' : '✗ FAIL'}`)
  
  // Show byte-by-byte breakdown for first code
  if (code === testCodes[0]) {
    console.log('\nByte-by-byte (first 6 chars):')
    for (let i = 0; i < Math.min(6, code.length); i++) {
      const charCode = code.charCodeAt(i)
      const lo = charCode & 0xff
      const hi = (charCode >> 8) & 0xff
      console.log(`  '${code[i]}' (0x${charCode.toString(16).padStart(4, '0')}) → ${lo.toString(16).padStart(2, '0').toUpperCase()}${hi.toString(16).padStart(2, '0').toUpperCase()}`)
    }
  }
}

console.log('\n' + '='.repeat(60))
console.log('✓ If all codes match, encoding/decoding is correct')
console.log('='.repeat(60))
