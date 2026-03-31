import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiTarget = env.VITE_API_BASE_URL || 'http://localhost:50905'

  return {
    plugins: [react()],
    optimizeDeps: {
      include: ['xlsx'],
    },
    server: {
      proxy: {
        '/api': {
          target: apiTarget,
          changeOrigin: true,
          // Forward requests to the .NET Web API without CORS issues
        },
      },
    },
  }
})
