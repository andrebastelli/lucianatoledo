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
      'sb-6e2b6yqu3ynn.vercel.run', 'sb-3sk9re71gpa8.vercel.run', 'sb-5wv79olnywyi.vercel.run',
      'localhost',
      '127.0.0.1',
    ],
  },
})
