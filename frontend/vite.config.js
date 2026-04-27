import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // This stops LightningCSS from crashing on Tailwind rules
    cssMinify: 'esbuild', 
  },
  css: {
    transformer: 'postcss',
  },
})
