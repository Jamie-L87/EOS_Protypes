/**
 * Encodes an item code string to the UTF-16 LE hex format expected
 * by the EOS Cloud Web API ItemDetail endpoint.
 *
 * The .NET backend uses:
 *   var bytes = Encoding.Unicode.GetBytes(item);
 *   foreach (var t in bytes) sb.Append(t.ToString("X2"));
 *
 * Encoding.Unicode in .NET is UTF-16 LE. Each character produces 2 bytes.
 * "A" (0x0041) → "4100"
 * "E" (0x0045) → "4500"
 *
 * @param {string} item — e.g. "E25FNFK-10"
 * @returns {string} — e.g. "450032003500460046004B002D00310030000000"
 *   (note: .NET stops at null-terminator so there is no trailing "0000")
 */
export function encodeItemCode(item) {
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
