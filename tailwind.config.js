/** @type {import('tailwindcss').Config} */
const spacing = {
  'header-height': '90px',
  'padding-main': '50px'
}
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: spacing,
      boxShadow: {
        card: '-2px -2px 4px rgba(255, 255, 255, 1) ,2px 2px 4px rgba(0, 0, 0, 1)'
      }
    }
  },
  plugins: []
}
