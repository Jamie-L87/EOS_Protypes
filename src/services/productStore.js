/**
 * Product Store / Database
 * Parses OBX data and populates product store
 */

class ProductStore {
  constructor() {
    this.products = [] // Array of product objects
    this.productsByBaseCode = new Map() // Quick lookup by base article code
    this.productsByFinalCode = new Map() // Quick lookup by final article code
  }

  /**
   * Parse OBX XML text and populate the store
   * @param {string} xmlText - The OBX XML content
   * @returns {boolean} - True if parsing succeeded
   */
  parseOBX(xmlText) {
    try {
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
      
      if (xmlDoc.documentElement.nodeName === 'parsererror') {
        console.error('XML Parse Error:', xmlDoc.documentElement.textContent)
        return false
      }

      // Get all articles
      const articles = xmlDoc.querySelectorAll('bskArticle')
      console.log(`Found ${articles.length} articles`)

      for (const article of articles) {
        const product = this.parseArticle(article)
        if (product) {
          this.products.push(product)
          this.productsByBaseCode.set(product.baseCode, product)
          this.productsByFinalCode.set(product.finalCode, product)
        }
      }

      console.log(`Loaded ${this.products.length} products into store`)
      return true
    } catch (err) {
      console.error('Error parsing OBX:', err)
      return false
    }
  }

  /**
   * Parse a single article element
   * @param {Element} articleEl - The bskArticle element
   * @returns {Object|null} - Product object or null if parsing fails
   */
  parseArticle(articleEl) {
    try {
      // Extract article codes
      const baseCodeEl = articleEl.querySelector("artNr[type='base']")
      const finalCodeEl = articleEl.querySelector("artNr[type='final']")
      
      if (!baseCodeEl || !finalCodeEl) return null

      const baseCode = baseCodeEl.textContent.trim()
      const finalCode = finalCodeEl.textContent.trim()
      
      if (!baseCode || !finalCode) return null

      // Extract feature string by removing base code from final code
      const featureString = finalCode
        .replace(new RegExp(`^${baseCode}\\s*`), '')
        .trim()

      // Extract product name (English)
      let productName = ''
      const shortDescr = articleEl.querySelector("description[type='short']")
      if (shortDescr) {
        const textEl = shortDescr.querySelector("text[lang='en']")
        if (textEl) {
          productName = textEl.textContent.trim()
        }
      }

      // Extract manufacturer
      let manufacturer = ''
      const mfgEl = articleEl.querySelector('manufacturer')
      if (mfgEl) {
        const nameEl = mfgEl.querySelector("name[lang='en']")
        if (nameEl) {
          manufacturer = nameEl.textContent.trim()
        }
      }

      // Extract series
      let series = ''
      const seriesEl = articleEl.querySelector('series')
      if (seriesEl) {
        const nameEl = seriesEl.querySelector('name')
        if (nameEl) {
          series = nameEl.textContent.trim()
        }
      }

      // Extract features
      const features = this.parseFeatures(articleEl)

      return {
        id: articleEl.getAttribute('basketId'),
        baseCode,
        finalCode,
        featureString,
        productName,
        manufacturer,
        series,
        features,
        listPrice: this.generateMockPrice(baseCode, featureString), // Auto-generate price based on code
      }
    } catch (err) {
      console.error('Error parsing article:', err)
      return null
    }
  }

  /**
   * Parse features section
   * @param {Element} articleEl - The bskArticle element
   * @returns {Array} - Array of feature objects
   */
  parseFeatures(articleEl) {
    const features = []
    const featuresEl = articleEl.querySelector('features')
    if (!featuresEl) return features

    for (const featureEl of featuresEl.querySelectorAll('feature')) {
      const name = featureEl.getAttribute('name')
      const value = featureEl.getAttribute('value')
      const nameTextEl = featureEl.querySelector("nameText[lang='en']")
      const valueTextEl = featureEl.querySelector("valueText[lang='en']")

      features.push({
        name,
        code: value,
        displayName: nameTextEl ? nameTextEl.textContent.trim() : name,
        displayValue: valueTextEl ? valueTextEl.textContent.trim() : value,
      })
    }

    return features
  }

  /**
   * Generate a mock list price based on article code
   * In production, this would come from a pricing database
   * @param {string} baseCode - Base article code
   * @param {string} featureString - Feature string (impacts price)
   * @returns {number} - Price in USD
   */
  generateMockPrice(baseCode, featureString) {
    // Base price varies by product line (first 3 chars of code)
    const priceMap = {
      AER: 1395, // Aeron chair
      MIR: 895,  // Mirra
      CEL: 595,  // Celle
    }

    const prefix = baseCode.substring(0, 3).toUpperCase()
    let basePrice = priceMap[prefix] || 1000

    // Feature multiplier based on feature complexity
    const featureCount = (featureString || '').split(/\s+/).filter(f => f).length
    const featureMultiplier = 1 + (featureCount * 0.05) // +5% per feature

    // Add some randomness based on code for realism
    const codeHash = baseCode.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
    const randomFactor = 0.95 + (codeHash % 100) / 1000

    return Math.round(basePrice * featureMultiplier * randomFactor * 100) / 100
  }
}

// Singleton instance
let storeInstance = null

export function createProductStore() {
  if (!storeInstance) {
    storeInstance = new ProductStore()
  }
  return storeInstance
}

export function getProductStore() {
  if (!storeInstance) {
    storeInstance = new ProductStore()
  }
  return storeInstance
}
