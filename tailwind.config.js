/** @type {import('tailwindcss').Config} */
const spacing = {
    'header-height': '90px',
    'padding-main': '50px',
}
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            spacing: spacing,
        },
    },
    plugins: [],
}
