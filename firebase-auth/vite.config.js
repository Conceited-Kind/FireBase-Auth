import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: path.join(__dirname, 'src'),
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: path.join(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: path.join(__dirname, 'src/index.html')
    }
  },
  css: {
    devSourcemap: true
  }
})