/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/*.{js,jsx,ts,tsx}', 'src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'white-main': '#fff',
        'gray-main': '#1d1d1b',
        'hover-text': '#878787',
        'input-text': '#686868',
        'post-border': 'rgba( 255, 255, 255, 0.2)',
      },
      fontFamily: {
        'link-font': ['Montserrat', '"Helvetica Neue"', 'sans-serif'],
        'post-font': ["Inconsolata", "monospace"]
      },
      spacing: {
        'left-padding': '40%',
        'right-padding': '20%'
      }
    }
  },
  plugins: [],
}
