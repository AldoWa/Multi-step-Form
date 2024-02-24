/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '10px 10px rgba(250, 181, 100, 0.1)'
      }
    },
  },
  plugins: [],
}

