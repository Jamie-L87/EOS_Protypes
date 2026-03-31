/**
 * Parses a SIF file (Herman Miller OrderPlace format).
 * Reads PN= (product number) and QT= (quantity) pairs.
 * ON=, PL=, CN= and other fields are intentionally ignored.
 * Feature strings (if present in PN=) are preserved.
 *
 * @param {string} text — raw SIF file content
 * @returns {{ items: Array<{articleCode: string, featureString: string, qty: number}>, error?: string }}
 */
export function parseSIF(text) {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)

  if (!lines.length || !lines[0].startsWith('SF=')) {
    return { items: [], error: 'Invalid SIF file: expected "SF=" on the first line.' }
  }

  const items = []
  let currentCode = null
  let currentFeature = ''
  let currentQty = 1

  function flush() {
    if (currentCode) {
      items.push({ articleCode: currentCode, featureString: currentFeature, qty: currentQty })
      currentCode = null
      currentFeature = ''
      currentQty = 1
    }
  }

  for (const line of lines) {
    if (line.startsWith('SF=') || line.startsWith('SL=')) {
      flush()
      continue
    }

    if (line.startsWith('PN=')) {
      flush()
      // Extract article code and feature string (if present)
      const raw = line.slice(3).trim()
      const spaceIdx = raw.indexOf(' ')
      currentCode = spaceIdx > 0 ? raw.slice(0, spaceIdx) : raw
      currentFeature = spaceIdx > 0 ? raw.slice(spaceIdx + 1) : ''
    } else if (line.startsWith('QT=')) {
      const v = parseInt(line.slice(3).trim(), 10)
      if (!isNaN(v) && v > 0) currentQty = v
    }
    // ON= options, PL= price, CN= contract — intentionally ignored
  }

  flush() // capture the last item

  return { items }
}
