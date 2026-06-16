import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#2C3E50',
        terracotta: '#D9763A',
        gold: '#C9A96E',
        offwhite: '#FAF7F4',
      },
      fontFamily: {
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Times New Roman', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 30px 80px -20px rgba(44, 62, 80, 0.35)',
        soft: '0 12px 40px -12px rgba(44, 62, 80, 0.18)',
      },
    },
  },
  plugins: [],
} satisfies Config
