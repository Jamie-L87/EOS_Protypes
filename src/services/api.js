import { encodeItemCode } from '../utils/itemEncoder'

const AUTH_KEY    = import.meta.env.VITE_API_AUTH_KEY   || ''
const SITE_ID     = import.meta.env.VITE_SITE_ID        || 'UK'
const DEALER_ID   = import.meta.env.VITE_DEALER_ID      || ''
const LANG_ID     = import.meta.env.VITE_LANGUAGE_ID    || 'EN'
const CURRENCY    = import.meta.env.VITE_CURRENCY       || 'GBP'
const PRICE_CODE  = import.meta.env.VITE_CUST_PRICE_CODE|| ''
const IGNORE_PL   = import.meta.env.VITE_IGNORE_PL      || '1' 
/**
 * Derives today's date parts for the pricing effective-date fields.
 */
function today() {
  const d = new Date()
  return { day: d.getDate(), month: d.getMonth() + 1, year: d.getFullYear() }
}

/**
 * Look up a single article code with optional feature string against the EOS Cloud Web API.
 * Falls back to product store if API unavailable.
 *
 * Calls:
 *   GET /api/ItemDetail/{hex}/{site}/{dealer}/{d}/{m}/{y}/{lang}/{lang2}/{ccy}/{priceCode}/{ignorePl}?featstr={rawFeature}&AuthorisationKey={key}
 *
 * @param {string} articleCode
 * @param {string} featureString - optional feature string (sent as raw string, not hex)
 * @returns {Promise<{found: boolean, productName: string|null, listPrice: number|null, status: number|null}>}
 */
export async function lookupItem(articleCode, featureString = '') {
  const hex = encodeItemCode(articleCode.trim())
  const { day, month, year } = today()

  let url =
    `/api/ItemDetail/${hex}/${SITE_ID}/${DEALER_ID}` +
    `/${day}/${month}/${year}` +
    `/${LANG_ID}/${LANG_ID}/${CURRENCY}/${PRICE_CODE}/${IGNORE_PL}` +
    `?AuthorisationKey=${encodeURIComponent(AUTH_KEY)}`
  
  if (featureString.trim()) {
    url += `&featstr=${encodeURIComponent(featureString.trim())}`
  }

  console.log(`[api] Looking up "${articleCode}" (hex: ${hex}) with dealer ${DEALER_ID}`)
  console.log(`[api] URL:`, url)

  try {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
    })

    console.log(`[api] Response status: ${res.status}`)

    if (res.status === 404) {
      console.warn(`[api] Product not found (404)`)
      return { found: false, productName: null, listPrice: null, status: null }
    }

    if (!res.ok) {
      console.warn(`[api] API error: ${res.status} ${res.statusText}`)
      return { found: false, productName: null, listPrice: null, status: null, apiError: res.status }
    }

    const json = await res.json()
    console.log(`[api] Response:`, json)
    
    // Response shape: { isValid: bool, result: [ItemDetailDto], notifications: [] }
    const item = json?.result?.[0]
    if (!item) {
      console.warn(`[api] No item in result array`)
      return { found: false, productName: null, listPrice: null, status: null }
    }

    console.log(`[api] Item found:`, item)

    // Status 0/1 = active, 99 = discontinued, etc.
    // itemDesc  = ShortDesc on order lines (primary display name in EOS Cloud orders)
    // itemDesc2 = customer-language short description
    // productCodeDesc = product family name (e.g. "Aeron Chair")
    const productName = 
      item.itemDesc ||
      item.itemDesc2 || 
      item.longItemDesc || 
      item.longItemDesc2 || 
      item.productCodeDesc ||
      null
    
    // Extract list price from response (itemPrice or unitPrice, etc.)
    const listPrice = item.unitPrice || item.listPrice || null
    
    console.log(`[api] Product name: "${productName}" — Price: ${listPrice ? '$' + listPrice.toFixed(2) : 'N/A'}`)
    return { found: true, productName, listPrice, status: item.status ?? null }
  } catch (err) {
    // Network error — backend not running locally or CORS issue
    console.warn(`[api] lookupItem failed for "${articleCode}":`, err.message)
    return { found: false, productName: null, listPrice: null, status: null, networkError: true }
  }
}
