import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dynamicImport()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  server: {
    proxy: {
      // '/api': {
      //   target: 'http://localhost:3000',
      //   changeOrigin: true,
      //   rewrite: (path) => {
      //     return path.replace(/^\/api/, '')
      //   },
      // },
    },
  },
})
