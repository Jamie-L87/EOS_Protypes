import { useEffect } from 'react'
import { ImportModule } from './components/ImportModule/ImportModule'
import { getProductStore } from './services/productStore'
import './App.css'

export default function App() {
  useEffect(() => {
    // Initialize product store with OBX data on app load
    const initializeStore = async () => {
      try {
        const store = getProductStore()

        // Try to load OBX file from public folder
        const response = await fetch('/sample-data.obx')
        if (response.ok) {
          const xmlText = await response.text()
          const success = store.parseOBX(xmlText)
          if (success) {
            console.log('Product store initialized')
          }
        } else {
          console.warn('Could not load sample OBX file. Product store is empty.')
          console.warn('To populate prices, place an OBX file in the public folder as "sample-data.obx"')
        }
      } catch (err) {
        console.error('Error initializing product store:', err)
      }
    }

    initializeStore()
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">EOS Cloud</span>
          <span className="app-env">Prototype · Import Module</span>
        </div>
      </header>
      <main className="app-main">
        <ImportModule />
      </main>
    </div>
  )
}
