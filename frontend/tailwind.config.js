const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.blueGray,
      white: colors.white,
      black: colors.black,
      red: colors.rose,
      green: colors.teal,
      sky: colors.sky,
      blue: colors.blue,
      yellow: colors.amber,
      violet: colors.violet
    },
    extend: {},
    fontFamily: {
      'sans': ['ubuntu', 'montserrat', 'ui-sans-serif', 'system-ui']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
