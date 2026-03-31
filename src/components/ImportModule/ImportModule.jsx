import { useState, useCallback } from 'react'
import './ImportModule.css'
import { FileDropZone } from '../FileDropZone/FileDropZone'
import { ArticleInput } from '../ArticleInput/ArticleInput'
import { BasketTable } from '../BasketTable/BasketTable'
import { ColumnMapper } from '../ColumnMapper/ColumnMapper'
import { useBasket } from '../../hooks/useBasket'

/**
 * Self-contained import module — designed to sit as a card widget on
 * the EOS Cloud homepage.
 *
 * Two entry methods:
 *  1. File upload (OBX / SIF / XLSX) — parsed client-side
 *  2. Free-text article code paste
 *
 * All article codes are validated in real-time against the EOS Web API.
 * Results populate a temporary basket shown below the input panel.
 */
export function ImportModule() {
  const { items, addItems, removeItem, updateQty, copyItem, clearBasket, updateArticleCode, updateFeatureString } = useBasket()

  const [fileError, setFileError] = useState(null)
  const [pendingSheetData, setPendingSheetData] = useState(null)

  const handleFileParsed = useCallback(({ items: parsed, error, needsMapping, sheetData }) => {
    if (needsMapping) {
      setFileError(null)
      setPendingSheetData(sheetData)
      return
    }
    setFileError(error || null)
    if (parsed?.length) addItems(parsed)
  }, [addItems])

  const handleMappingConfirm = useCallback((mapped) => {
    setPendingSheetData(null)
    addItems(mapped)
  }, [addItems])

  const handleMappingCancel = useCallback(() => {
    setPendingSheetData(null)
  }, [])

  const handleTextAdd = useCallback((parsed) => {
    addItems(parsed)
  }, [addItems])

  return (
    <section className="import-module" aria-label="Import products">
      {/* ── Card header ── */}
      <div className="import-module__header">
        <div>
          <h2 className="import-module__title">Import products</h2>
          <p className="import-module__subtitle">
            Upload a file or paste article codes to build a basket
          </p>
        </div>
      </div>

      {/* ── Two-column input panel ── */}
      <div className="import-module__inputs">
        <div className="import-module__col">
          <span className="import-module__col-label">Upload file</span>
          <FileDropZone onParsed={handleFileParsed} />
          {fileError && (
            <p className="import-module__file-error" role="alert">{fileError}</p>
          )}
        </div>

        <div className="import-module__divider" aria-hidden="true">
          <span>or</span>
        </div>

        <div className="import-module__col">
          <ArticleInput onAdd={handleTextAdd} />
        </div>
      </div>

      {/* ── Column mapper (shown when an unrecognised Excel is uploaded) ── */}
      {pendingSheetData && (
        <ColumnMapper
          sheetData={pendingSheetData}
          onConfirm={handleMappingConfirm}
          onCancel={handleMappingCancel}
        />
      )}

      {/* ── Basket ── */}
      <BasketTable
        items={items}
        onRemove={removeItem}
        onQtyChange={updateQty}
        onCopy={copyItem}
        onClear={clearBasket}
        onUpdateArticleCode={updateArticleCode}
        onUpdateFeatureString={updateFeatureString}
      />

      {!items.length && !pendingSheetData && (
        <p className="import-module__empty">
          Your basket is empty — upload a file or paste article codes above.
        </p>
      )}
    </section>
  )
}
