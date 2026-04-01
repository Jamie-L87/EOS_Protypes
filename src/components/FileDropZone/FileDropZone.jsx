import { useRef, useState } from 'react'
import './FileDropZone.css'
import { parseOBX } from '../../utils/obxParser'
import { parseSIF } from '../../utils/sifParser'
import { parseXLSX } from '../../utils/xlsxParser'
import { parseOCRDocument } from '../../utils/ocrParser'

const ACCEPTED = '.obx,.sif,.txt,.xlsx,.pdf,.jpg,.jpeg,.png'
const ACCEPT_MAP = {
  '.obx': 'OBX',
  '.sif': 'SIF',
  '.txt': 'SIF',
  '.xlsx': 'Excel',
  '.pdf': 'PDF (OCR)',
  '.jpg': 'Image (OCR)',
  '.jpeg': 'Image (OCR)',
  '.png': 'Image (OCR)',
}

/**
 * Drag-and-drop / click-to-browse file zone.
 * Parses the file client-side and calls onParsed({ items, fileName, format, error }).
 */
export function FileDropZone({ onParsed, disabled }) {
  const inputRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [fileName, setFileName] = useState(null)
  const [summary, setSummary] = useState(null)
  const [loading, setLoading] = useState(false)

  async function processFile(file) {
    const ext = ('.' + file.name.split('.').pop()).toLowerCase()
    const format = ACCEPT_MAP[ext]
    if (!format) {
      onParsed({ items: [], fileName: file.name, format: null, error: `Unsupported file type: ${ext}` })
      return
    }

    setFileName(file.name)
    setSummary(null)
    setLoading(true)

    let result
    try {
      if (ext === '.xlsx') {
        const buf = await file.arrayBuffer()
        result = parseXLSX(buf)
      } else if (ext === '.pdf' || ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        // OCR-based import
        result = await parseOCRDocument(file)
      } else {
        const text = await file.text()
        result = ext === '.obx' ? parseOBX(text) : parseSIF(text)
      }
    } catch (error) {
      result = { items: [], error: error.message }
    }

    setLoading(false)
    const count = result.items?.length ?? 0
    const summary = result.error ? null : (result.needsReview ? 'Awaiting review' : result.needsMapping ? 'Awaiting column mapping' : `${count} article${count !== 1 ? 's' : ''} found`)
    setSummary(summary)
    onParsed({ ...result, fileName: file.name, format })
  }

  function onDrop(e) {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) processFile(file)
  }

  function onChange(e) {
    const file = e.target.files?.[0]
    if (file) processFile(file)
    e.target.value = ''
  }

  return (
    <div
      className={`dropzone ${dragging ? 'dropzone--over' : ''} ${(disabled || loading) ? 'dropzone--disabled' : ''} ${loading ? 'dropzone--loading' : ''}`}
      onClick={() => !disabled && !loading && inputRef.current?.click()}
      onDragOver={(e) => { e.preventDefault(); if (!loading) setDragging(true) }}
      onDragLeave={() => setDragging(false)}
      onDrop={loading ? (e) => e.preventDefault() : onDrop}
      role="button"
      tabIndex={(disabled || loading) ? -1 : 0}
      onKeyDown={(e) => e.key === 'Enter' && !loading && inputRef.current?.click()}
      aria-label="Upload file"
    >
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED}
        style={{ display: 'none' }}
        onChange={onChange}
      />

      {loading ? (
        <>
          <div className="dropzone__spinner" role="status" aria-label="Parsing file">
            <svg className="dropzone__spinner-ring" viewBox="0 0 44 44" width="40" height="40">
              <circle cx="22" cy="22" r="18" fill="none" stroke="#e2e8f0" strokeWidth="3" />
              <circle
                cx="22" cy="22" r="18" fill="none"
                stroke="#2563eb" strokeWidth="3"
                strokeDasharray="90 200"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="dropzone__loading-name">{fileName}</p>
          <p className="dropzone__loading-label">Parsing file…</p>
        </>
      ) : !fileName ? (
        <>
          <div className="dropzone__icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>
          <p className="dropzone__label">Drop file here or <span className="dropzone__link">browse</span></p>
          <p className="dropzone__hint">.obx · .sif · .xlsx</p>
        </>
      ) : (
        <>
          <div className="dropzone__icon dropzone__icon--file" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <p className="dropzone__filename">{fileName}</p>
          {summary && <p className="dropzone__summary">{summary}</p>}
          <button
            className="dropzone__clear"
            onClick={(e) => { e.stopPropagation(); setFileName(null); setSummary(null); onParsed({ items: [], fileName: null, format: null }) }}
            aria-label="Clear file"
          >
            Change file
          </button>
        </>
      )}
    </div>
  )
}
