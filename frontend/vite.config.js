import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/absproxy/51929/',
  server: {
    host: '0.0.0.0',
    port: 51929,
    strictPort: true,
  },
})
