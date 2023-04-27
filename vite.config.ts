import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@auth': path.resolve(__dirname, 'src/auth'),
      '@utilities': path.resolve(__dirname, 'src/utilities'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    }
  }
})
