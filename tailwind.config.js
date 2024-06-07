/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kb-black' : '#2B2B2B',
        'kb-gray' : '#D9D9D9'
      }
    },
  },
  plugins: [],
}


