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
      'sb-6e2b6yqu3ynn.vercel.run',
      'sb-2jxprr441gob.vercel.run',
      'localhost',
      '127.0.0.1',
    ],
  },
})
