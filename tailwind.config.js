module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textShadow: {
      default: '0 2px 0 #000',
      md: '0 0px 10px #00000050',
      h1: '0 0 3px #FF0000, 0 0 5px #0000FF',
      xl: '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      none: 'none',
    }
  },
  variants: {
    extend: {},
    textShadow: ['responsive', 'hover'],
  },
  plugins: [
    require('tailwindcss-textShadow')
  ]
}
