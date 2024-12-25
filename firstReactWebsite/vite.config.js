import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/firstReactWebsite/',
  build: {
    cssCodeSplit: true, // Ensures CSS is split into a separate file
    minify: 'esbuild', // Optional: Use esbuild for minifying production builds
  },
})
