const toolkit = require('./toolkit.config')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: `media`,
  theme: {
    extend: {
      colors: {
        'primary': toolkit.primary,
        'secondary': toolkit.secondary,
        'tertiary': toolkit.tertiary,
      },
      borderWidth: {
        1: '1px'
      },
    },
  },
        fontFamily: {
        'sans': ['Source Sans Pro', 'sans-serif'],
        'display': ['EB Garamond', 'serif'],
      },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-underline-utils')
  ],
}
