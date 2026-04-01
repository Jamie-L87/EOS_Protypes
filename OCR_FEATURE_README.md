# OCR PDF & Image Import Feature

## Overview

This feature enables importing product data from PDFs and images using Optical Character Recognition (OCR). Users can upload scanned documents, invoices, or photographs of product lists, and the system automatically extracts article codes and quantities.

## Supported Formats

- **PDFs**: Multi-page PDFs with text content
- **Images**: JPG, JPEG, PNG files

## Libraries Used

- **Tesseract.js** — Browser-based OCR (English language extraction)
- **PDF.js** — Client-side PDF text extraction

## How It Works

### 1. File Upload
User drops or selects a PDF or image file.

### 2. Text Extraction
- **PDFs**: PDF.js extracts text from all pages
- **Images**: Tesseract OCR converts image to text

### 3. Text Parsing
Extracted text is parsed to identify:
- **Article codes**: Pattern matching (e.g., E25FNFK-10, AER1B23)
- **Quantities**: Numeric values following article codes

### 4. Supported Formats

The parser recognizes these text patterns:

#### Pattern 1: Code + Quantity on same line
```
E25FNFK-10 5
AER1B23 3
```

#### Pattern 2: Code + Quantity on separate lines
```
E25FNFK-10
Quantity: 5

AER1B23
Qty: 3
```

#### Pattern 3: Structured format
```
Article: E25FNFK-10, Qty: 5
Article: AER1B23, Quantity: 3
```

### 5. Basket Population
Extracted items are added to the basket with:
- Article code
- Quantity (defaults to 1 if not detected)
- Empty feature string (can be edited by user)

## Usage Example

```jsx
import { parseOCRDocument } from '../../utils/ocrParser'

// In upload handler
const result = await parseOCRDocument(file)
if (result.error) {
  console.error('OCR failed:', result.error)
} else {
  addItems(result.items) // Add to basket
}
```

## Limitations

1. **OCR Accuracy**: Depends on image quality, resolution, and text clarity
   - Clear, well-lit documents: 95%+ accuracy
   - Blurry/skewed images: Lower accuracy
   - Handwritten text: Not supported

2. **Language**: Currently supports English only

3. **Performance**: 
   - OCR is CPU-intensive
   - Large PDFs (100+ pages) may take 30+ seconds
   - Files processed client-side (no server required)

4. **Pattern Recognition**: Parser expects standard article code formats
   - Unrecognized formats are skipped
   - Manual editing available after import

## Future Improvements

- [ ] Multi-language support (German, French, Spanish, etc.)
- [ ] Handwriting recognition
- [ ] Structured table detection
- [ ] Server-side OCR for faster processing
- [ ] Confidence scoring for extracted data
- [ ] Invoice-specific parsing (line items, prices, dates)
- [ ] Batch processing (multiple files at once)

## Testing

To test OCR functionality:

1. Create a test PDF or image with article codes and quantities
2. Upload via the import interface
3. Verify extracted items appear in the basket

### Example Test Document

```
Aeron Chair Orders

Product         Qty
E25FNFK-10      5
AER1B23         3
RATIO1DN-1      2
```

## Error Handling

| Error | Cause | Resolution |
|-------|-------|-----------|
| Unsupported file type | File is not PDF/JPG/PNG | Upload valid image or PDF |
| OCR failed | Tesseract error | Check image quality, reload |
| No articles found | Text doesn't match patterns | Manually enter codes |
| PDF extraction failed | Corrupted PDF or no text | Use readable scanned document |

## Files

- `src/utils/ocrParser.js` — Main OCR logic
- `src/components/FileDropZone/FileDropZone.jsx` — Updated to support OCR
- `src/services/api.js` — Product lookup (existing)

## Performance Notes

- **Small image (1 page)**: ~5-10 seconds
- **Medium PDF (5 pages)**: ~15-25 seconds
- **Large PDF (20 pages)**: ~60+ seconds

> Note: First use downloads ~50MB Tesseract model to browser cache
