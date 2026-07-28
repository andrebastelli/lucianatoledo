import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    allowedHosts: [
      'sb-16sv3pjr266x.vercel.run',
      'localhost',
      '127.0.0.1',
    ],
  },
})
