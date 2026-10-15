import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is set to './' so the app works on GitHub Pages under /<repo-name>/
// If you deploy to a project page, you can also set base: '/paradise-nursery/'
export default defineConfig({
  plugins: [react()],
  base: './',
})
