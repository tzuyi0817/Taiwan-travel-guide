/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Monda", "Noto Sans TC", "sans-serif"],
      },
      colors: {
        primary: '#A8B8A5',
        secondary: '#7F977B',
      }
    },
  },
  plugins: [],
}