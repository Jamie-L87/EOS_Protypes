# PDF Import Documentation

## Overview

The PDF import feature allows users to upload order PDFs with column-based layouts and automatically extract product data into the basket.

## Supported PDF Format

**Column-based tabular layout:**
```
Article Code | Product Name | Quantity | Unit Price
AER1B23      | Aeron Chair  | 5        | $1,395.00
MIR2B33      | Mirra Chair  | 3        | $895.00
```

## How It Works

### 1. File Upload
- Users drag-and-drop or click to upload a `.pdf` file
- File is processed in the browser using PDF.js

### 2. PDF Parsing
- Text is extracted from all PDF pages
- Spatial awareness preserves line breaks and structure
- Parser identifies column-based tables

### 3. Data Extraction
- **Article Code**: Pattern matching (e.g., AER1B23, CEL1A11)
- **Product Name**: Text segments not matching other patterns
- **Quantity**: Numeric values (defaults to 1 if not found)
- **Unit Price**: Currency values (e.g., $1,395.00)

### 4. Basket Population
- Extracted items are converted to basket format
- Ready for review and modification

## Sample PDFs

Three sample order PDFs are included for testing:

1. **sample-order-1.pdf** — 3 valid products
   - Aeron Chair Size B (qty: 5)
   - Mirra Chair Size B (qty: 3)
   - Celle Chair Standard (qty: 2)

2. **sample-order-2.pdf** — 4 valid products
   - Aeron Chair Size C (qty: 10)
   - Celle Chair Premium (qty: 4)
   - Mirra Task Chair (qty: 8)
   - Aeron Stool (qty: 2)

3. **sample-order-mixed.pdf** — 5 items (mix of valid & invalid)
   - Valid products with real codes
   - Invalid products with fake codes for testing

## Technical Details

### Dependencies
- **pdfjs-dist** — PDF parsing engine
- **Vite** — Worker module import via `?url` suffix

### Parser Algorithm
1. Extract text from all pages with spatial awareness
2. Identify header line (looks for keywords: article, code, product, qty, price, etc.)
3. Scan data lines for:
   - Product codes (pattern: 2-4 letters + digit + 2-4 alphanumeric)
   - Quantities (numeric followed by qty/quantity/x/nos)
   - Prices (currency values with $ or numbers)
   - Product names (remaining text)
4. Return structured item objects

### Return Format
```javascript
{
  id: "pdf-{timestamp}-{index}",
  articleCode: "AER1B23",
  productName: "Aeron Chair",
  qty: 5,
  unitPrice: 1395,
  listPrice: 1395,
  lookupStatus: "idle",
  validationIssues: [],
  validationWarnings: [],
  featureString: ""
}
```

## Limitations & Notes

- **Complex PDFs**: Works best with clean, tabular layouts
- **Scanned PDFs**: Requires OCR (not included; for future enhancement)
- **Multi-page**: Supports PDFs with data across multiple pages
- **Ambiguity**: If product name contains numbers, extraction may be imparcise
- **Custom Formats**: Regex patterns may need adjustment for different PDF structures

## Future Enhancements

1. **OCR Support** — Handle scanned/image-based PDFs
2. **Format Detection** — Auto-detect common order formats
3. **Error Handling** — Better feedback for unparseable content
4. **Template System** — User-defined column mapping
5. **Batch Processing** — Import multiple PDFs at once

## Testing

### Test local PDFs
1. Navigate to `http://localhost:5174`
2. Drop `sample-order-1.pdf` into the drop zone
3. Items should appear in the basket

### Generate test PDFs programmatically
```bash
node generate-sample-pdfs.js
```

This creates 3 test PDFs in `/public`:
- sample-order-1.pdf (3 items)
- sample-order-2.pdf (4 items)
- sample-order-mixed.pdf (5 items with invalid codes)

## Architecture

```
FileDropZone (component)
    ↓
pdfToBasketItems() (pdfParser.js)
    ├─ parsePDF() → Extract text
    ├─ extractProducts() → Parse data
    └─ Return basket items
    ↓
useBasket() hook
    ↓
BasketTable (display)
```

## Code Files

- **src/services/pdfParser.js** — Core PDF parsing logic
- **src/components/FileDropZone/FileDropZone.jsx** — File upload handler  
- **generate-sample-pdfs.js** — PDF generation script
- **public/sample-order-*.pdf** — Test files

---

*PDF import feature created 2026-03-26*
