import { useState } from 'react'
import './OCRMapper.css'

/**
 * Cleans and formats extracted text for display
 * Removes excessive whitespace, consolidates empty lines
 */
function cleanExtractedText(text) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line, index, arr) => {
      // Keep line if it's not empty, or if it's not consecutive empty lines
      if (line) return true
      const prevEmpty = index > 0 && arr[index - 1].trim() === ''
      return !prevEmpty
    })
    .join('\n')
    .substring(0, 2000) // Limit to 2000 chars for display
}

/**
 * Allows users to preview and validate OCR-extracted text before importing.
 * Shows detected items and allows editing/selection before import.
 */
export function OCRMapper({ extractedText, detectedItems, onConfirm, onCancel }) {
  const [items, setItems] = useState(detectedItems.map((item, idx) => ({ ...item, id: idx, selected: true })))
  const [editingId, setEditingId] = useState(null)
  const [editCode, setEditCode] = useState('')
  const [editQty, setEditQty] = useState('')

  const cleanedText = cleanExtractedText(extractedText)
  const hasHighConfidenceItems = items.some((i) => i.confidence === 'high')

  const handleEdit = (id) => {
    const item = items.find((i) => i.id === id)
    setEditingId(id)
    setEditCode(item.articleCode)
    setEditQty(item.qty.toString())
  }

  const handleSave = (id) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id
          ? { ...i, articleCode: editCode.trim(), qty: Math.max(1, parseInt(editQty, 10) || 1) }
          : i
      )
    )
    setEditingId(null)
  }

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const handleToggle = (id) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, selected: !i.selected } : i)))
  }

  const handleConfirm = () => {
    const selectedItems = items.filter((i) => i.selected).map(({ id, selected, ...rest }) => rest)
    onConfirm(selectedItems)
  }

  const selectedCount = items.filter((i) => i.selected).length

  return (
    <div className="ocr-mapper">
      <div className="ocr-mapper__header">
        <h3 className="ocr-mapper__title">Review OCR Results</h3>
        <p className="ocr-mapper__desc">
          Verify the extracted article codes and quantities below. Edit or uncheck items you don't want to import.
        </p>
      </div>

      <div className="ocr-mapper__content">
        <div className="ocr-mapper__section">
          <h4 className="ocr-mapper__section-title">Detected Items</h4>
          <div className="ocr-mapper__items-list">
            {items.length === 0 ? (
              <p className="ocr-mapper__empty">No items detected. Check the extracted text below.</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className={`ocr-mapper__item ${!item.selected ? 'ocr-mapper__item--disabled' : ''}`}>
                  <input
                    type="checkbox"
                    className="ocr-mapper__item-checkbox"
                    checked={item.selected}
                    onChange={() => handleToggle(item.id)}
                  />

                  {editingId === item.id ? (
                    <div className="ocr-mapper__item-edit">
                      <input
                        type="text"
                        className="ocr-mapper__item-input"
                        value={editCode}
                        onChange={(e) => setEditCode(e.target.value)}
                        placeholder="Article code"
                      />
                      <input
                        type="number"
                        className="ocr-mapper__item-input ocr-mapper__item-input--qty"
                        value={editQty}
                        onChange={(e) => setEditQty(e.target.value)}
                        min="1"
                        placeholder="Qty"
                      />
                      <button className="ocr-mapper__item-btn ocr-mapper__item-btn--save" onClick={() => handleSave(item.id)}>
                        ✓
                      </button>
                      <button
                        className="ocr-mapper__item-btn ocr-mapper__item-btn--cancel"
                        onClick={() => setEditingId(null)}
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div className="ocr-mapper__item-display">
                      <span className="ocr-mapper__item-code">{item.articleCode}</span>
                      <span className="ocr-mapper__item-qty">× {item.qty}</span>
                      {item.confidence === 'high' && <span className="ocr-mapper__badge">✓ Detected</span>}
                      <button
                        className="ocr-mapper__item-btn ocr-mapper__item-btn--edit"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="ocr-mapper__item-btn ocr-mapper__item-btn--remove"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="ocr-mapper__section">
          <h4 className="ocr-mapper__section-title">Extracted Text (Cleaned)</h4>
          <pre className="ocr-mapper__text-preview">{cleanedText}</pre>
          {cleanedText.length >= 2000 && <p className="ocr-mapper__text-truncated">... (text truncated)</p>}
        </div>
      </div>

      <div className="ocr-mapper__footer">
        <button className="ocr-mapper__btn ocr-mapper__btn--cancel" onClick={onCancel}>
          Cancel
        </button>
        <div className="ocr-mapper__footer-info">
          {selectedCount} of {items.length} item{items.length !== 1 ? 's' : ''} selected
        </div>
        <button
          className="ocr-mapper__btn ocr-mapper__btn--confirm"
          onClick={handleConfirm}
          disabled={selectedCount === 0}
        >
          Import Selected ({selectedCount})
        </button>
      </div>
    </div>
  )
}
