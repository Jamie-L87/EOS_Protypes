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
 * Supports single or multiple files. Processes sequentially, preserving file order.
 * Calls onParsed({ items, fileName, format, error }) when done.
 */
export function FileDropZone({ onParsed, disabled }) {
  const inputRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [fileNames, setFileNames] = useState([])
  const [currentFileIndex, setCurrentFileIndex] = useState(0)
  const [summary, setSummary] = useState(null)
  const [loading, setLoading] = useState(false)

  async function processFiles(files) {
    if (!files || files.length === 0) return

    setLoading(true)
    setFileNames(Array.from(files).map(f => f.name))
    setCurrentFileIndex(0)

    const allResults = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      setCurrentFileIndex(i)

      const ext = ('.' + file.name.split('.').pop()).toLowerCase()
      const format = ACCEPT_MAP[ext]
      if (!format) {
        onParsed({ items: [], fileName: file.name, format: null, error: `Unsupported file type: ${ext}` })
        setLoading(false)
        setFileNames([])
        return
      }

      let result
      try {
        if (ext === '.xlsx') {
          const buf = await file.arrayBuffer()
          result = parseXLSX(buf)
        } else if (ext === '.pdf' || ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
          result = await parseOCRDocument(file)
        } else {
          const text = await file.text()
          result = ext === '.obx' ? parseOBX(text) : parseSIF(text)
        }
      } catch (error) {
        result = { items: [], error: error.message }
      }

      if (result.error) {
        onParsed({ items: [], fileName: file.name, format: null, error: result.error })
        setLoading(false)
        setFileNames([])
        return
      }

      if (result.needsReview || result.needsMapping) {
        // If any file needs review/mapping, stop and let the mapper handle it
        onParsed({ ...result, fileName: file.name, format })
        setLoading(false)
        setFileNames([])
        return
      }

      if (result.items?.length) {
        allResults.push(...result.items)
      }
    }

    setLoading(false)
    setFileNames([])
    const count = allResults.length
    const summary = count === 0 ? null : `${count} article${count !== 1 ? 's' : ''} found from ${files.length} file${files.length !== 1 ? 's' : ''}`
    setSummary(summary)
    onParsed({ items: allResults, fileName: Array.from(files).map(f => f.name).join(', '), format: 'Mixed' })
  }

  function onDrop(e) {
    e.preventDefault()
    setDragging(false)
    const files = e.dataTransfer.files
    if (files?.length) processFiles(files)
  }

  function onChange(e) {
    const files = e.target.files
    if (files?.length) processFiles(files)
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
        multiple
        style={{ display: 'none' }}
        onChange={onChange}
      />

      {loading ? (
        <>
          <div className="dropzone__spinner" role="status" aria-label="Parsing files">
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
          <p className="dropzone__loading-name">{fileNames[currentFileIndex]}</p>
          <p className="dropzone__loading-label">
            {fileNames.length > 1 ? `Processing file ${currentFileIndex + 1} of ${fileNames.length}…` : 'Parsing file…'}
          </p>
        </>
      ) : !fileNames.length ? (
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
          <p className="dropzone__filename">
            {fileNames.length > 1 ? `${fileNames.length} files selected` : fileNames[0]}
          </p>
          {summary && <p className="dropzone__summary">{summary}</p>}
          <button
            className="dropzone__clear"
            onClick={(e) => { e.stopPropagation(); setFileNames([]); setSummary(null); onParsed({ items: [], fileName: null, format: null }) }}
            aria-label="Clear files"
          >
            Change files
          </button>
        </>
      )}
    </div>
  )
}
