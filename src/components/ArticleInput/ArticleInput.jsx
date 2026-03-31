import { useState } from 'react'
import './ArticleInput.css'
import { parseTextInput } from '../../utils/textParser'

/**
 * Free-text article code entry.
 * One code per line, optional quantity suffix: E25FNFK-10 x2
 * Calls onAdd(items) when the user confirms.
 */
export function ArticleInput({ onAdd, disabled }) {
  const [value, setValue] = useState('')

  const parsed = parseTextInput(value)
  const hasInput = value.trim().length > 0

  function handleAdd() {
    if (!parsed.length) return
    onAdd(parsed)
    setValue('')
  }

  function handleKeyDown(e) {
    // Ctrl+Enter / Cmd+Enter to submit
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      handleAdd()
    }
  }

  return (
    <div className="article-input">
      <label className="article-input__label" htmlFor="article-textarea">
        Paste article codes
      </label>
      <textarea
        id="article-textarea"
        className="article-input__textarea"
        placeholder="e.g. AER1B33DW ALP G1 G1 G1 BB BK 23103"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        rows={5}
        spellCheck={false}
        autoComplete="off"
      />
      <div className="article-input__footer">
        <span className="article-input__hint">
          One per line
          {hasInput && parsed.length > 0 && (
            <> · <strong>{parsed.length} code{parsed.length !== 1 ? 's' : ''} ready</strong></>
          )}
        </span>
        <button
          className="article-input__btn"
          onClick={handleAdd}
          disabled={disabled || !parsed.length}
          title="Ctrl+Enter"
        >
          Add to basket
        </button>
      </div>
    </div>
  )
}
