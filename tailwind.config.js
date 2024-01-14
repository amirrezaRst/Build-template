/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px'
      },
      container: {
        padding: {
          DEFAULT: '.7rem',
          sm: '.7rem',
          md: '.3rem',
          lg: '0.7rem',
          xl: '2rem',
          '2xl': '5rem'
        },
        center: true
      },
    }
  },

  plugins: [],
}