/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'arial': ['arial', '"helvetica heue"', 'helvetica','sans-serif'],
        'baskerville': ['baskerville', '"baskerville old face"', 'garamond','"times new roman"','serif'],
        'segoe': ["Segoe UI", 'Arial', 'sans-serif']
      },
    },
  },
  plugins: [],
}

