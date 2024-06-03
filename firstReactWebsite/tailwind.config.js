/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['"Crimson Text"', 'serif'],
        oxygen: ["Oxygen", 'sans-serif']
      },
      colors: {
        customGreen: {
          'very-dark': '#273526',
          'dark': '#45624e',
          'default': '#6d8777',
          'light': '#c0cfb2',
          'very-light': '#e4e6d9',
        },
        darkGray: '#242424'
    },
  },
  plugins: [],
}
}