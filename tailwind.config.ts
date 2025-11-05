import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1F3B4D',
          light: '#3E5A70',
          accent: '#C9A227'
        }
      }
    },
  },
  plugins: [],
}
export default config
