import { useState } from 'react'
import './BasketTable.css'

const STATUS_LABELS = {
  idle:       { text: '—',            cls: 'status--idle' },
  loading:    { text: 'Looking up…',  cls: 'status--loading' },
  found:      { text: null,           cls: 'status--found' },
  'not-found':{ text: 'Not found',    cls: 'status--notfound' },
  error:      { text: 'API offline',  cls: 'status--error' },
}

/**
 * Displays the current basket contents with inline qty editing,
 * editable article code and feature string, and per-row removal.
 * Shows API validation state per item.
 */
export function BasketTable({ items, onRemove, onQtyChange, onCopy, onClear, onUpdateArticleCode, onUpdateFeatureString }) {
  if (!items.length) return null

  const [editingId, setEditingId] = useState(null)
  const [editValue, setEditValue] = useState('')

  const totalQty = items.reduce((s, i) => s + i.qty, 0)
  const grandTotal = items.reduce((s, i) => s + (i.listPrice * i.qty), 0)

  return (
    <div className="basket">
      <div className="basket__header">
        <span className="basket__title">
          Basket
          <span className="basket__count">{items.length} item{items.length !== 1 ? 's' : ''} · {totalQty} unit{totalQty !== 1 ? 's' : ''}</span>
        </span>
        <button className="basket__clear-btn" onClick={onClear}>
          Clear basket
        </button>
      </div>

      <div className="basket__table-wrap">
        <table className="basket__table">
          <thead>
            <tr>
              <th className="col-code">Article code</th>
              <th className="col-name">Product name</th>
              <th className="col-price">List price</th>
              <th className="col-qty">Qty</th>
              <th className="col-total">Total</th>
              <th className="col-actions" aria-label="Actions" />
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <BasketRow
                key={item.id}
                item={item}
                onRemove={() => onRemove(item.id)}
                onQtyChange={(q) => onQtyChange(item.id, q)}
                onCopy={() => onCopy(item.id)}
                onUpdateArticleCode={(code) => onUpdateArticleCode(item.id, code)}
                onUpdateFeatureString={(feature) => onUpdateFeatureString(item.id, feature)}
                isEditing={editingId === item.id}
                editValue={editValue}
                onEditStart={(combined) => {
                  setEditingId(item.id)
                  setEditValue(combined)
                }}
                onEditChange={setEditValue}
                onEditSave={() => {
                  const combined = editValue.trim()
                  if (!combined) return
                  // Split on first space: articleCode featureString
                  const spaceIdx = combined.indexOf(' ')
                  if (spaceIdx === -1) {
                    onUpdateArticleCode(item.id, combined)
                    onUpdateFeatureString(item.id, '')
                  } else {
                    const code = combined.substring(0, spaceIdx)
                    const feature = combined.substring(spaceIdx + 1).trim()
                    onUpdateArticleCode(item.id, code)
                    onUpdateFeatureString(item.id, feature)
                  }
                  setEditingId(null)
                }}
                onEditCancel={() => {
                  setEditingId(null)
                }}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="basket__footer">
        <div className="basket__footer-totals">
          <div className="basket__footer-line">
            <span className="basket__footer-label">Subtotal:</span>
            <span className="basket__footer-value">${grandTotal.toFixed(2)}</span>
          </div>
        </div>
        <div className="basket__footer-actions">
          <button className="basket__action-btn basket__action-btn--primary" disabled>
            Create order
          </button>
          <span className="basket__footer-note">Order creation coming soon</span>
        </div>
      </div>
    </div>
  )
}

function BasketRow({ item, onRemove, onQtyChange, onCopy, onUpdateArticleCode, onUpdateFeatureString, isEditing, editValue, onEditStart, onEditChange, onEditSave, onEditCancel }) {
  const { text: statusText, cls: statusCls } = STATUS_LABELS[item.lookupStatus] ?? STATUS_LABELS.idle

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onEditSave()
    } else if (e.key === 'Escape') {
      onEditCancel()
    }
  }

  const combinedText = item.articleCode + (item.featureString ? ' ' + item.featureString : '')

  return (
    <tr className={`basket-row ${statusCls}`}>
      <td className="col-code">
        {isEditing ? (
          <input
            className="basket-row__edit-input"
            type="text"
            value={editValue}
            onChange={(e) => onEditChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={onEditSave}
            autoFocus
            placeholder="Article code [feature]"
          />
        ) : (
          <div>
            <div className="basket-row__code-wrapper" onClick={() => onEditStart(combinedText)}>
              <span className="basket-row__code">{item.articleCode}</span>
              {item.featureString && (
                <span className="basket-row__feature">{item.featureString}</span>
              )}
              {!item.featureString && (
                <span className="basket-row__feature basket-row__feature--empty">(no feature)</span>
              )}
            </div>

          </div>
        )}
      </td>

      <td className="col-name">
        {item.lookupStatus === 'loading' && (
          <span className="basket-row__spinner" aria-label="Loading" />
        )}
        {item.lookupStatus === 'found' && (
          <span className="basket-row__name">{item.productName || '—'}</span>
        )}
        {(item.lookupStatus === 'not-found' || item.lookupStatus === 'error' || item.lookupStatus === 'idle') && (
          <span className={`basket-row__status-badge ${statusCls}`}>{statusText}</span>
        )}
      </td>

      <td className="col-price">
        {item.listPrice > 0 ? (
          <span className="basket-row__price">${item.listPrice.toFixed(2)}</span>
        ) : (
          <span className="basket-row__price basket-row__price--empty">—</span>
        )}
      </td>

      <td className="col-qty">
        <div className="qty-control">
          <button
            className="qty-control__btn"
            onClick={() => onQtyChange(item.qty - 1)}
            aria-label="Decrease quantity"
            disabled={item.qty <= 1}
          >−</button>
          <input
            className="qty-control__input"
            type="number"
            min={1}
            value={item.qty}
            onChange={(e) => onQtyChange(e.target.value)}
            aria-label="Quantity"
          />
          <button
            className="qty-control__btn"
            onClick={() => onQtyChange(item.qty + 1)}
            aria-label="Increase quantity"
          >+</button>
        </div>
      </td>

      <td className="col-total">
        {item.listPrice > 0 ? (
          <span className="basket-row__total">${(item.listPrice * item.qty).toFixed(2)}</span>
        ) : (
          <span className="basket-row__total basket-row__total--empty">—</span>
        )}
      </td>

      <td className="col-actions">
        <button
          className="basket-row__copy"
          onClick={onCopy}
          aria-label={`Duplicate ${item.articleCode}`}
          title="Duplicate"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </button>
        <button
          className="basket-row__remove"
          onClick={onRemove}
          aria-label={`Remove ${item.articleCode}`}
          title="Remove"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </td>
    </tr>
  )
}
