module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textShadow: {
      default: '0 2px 0 #000',
      md: '0 0px 20px #00000050',
      h1: '0 0 3px #FF0000, 0 0 5px #0000FF',
      xl: '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      none: 'none',
    },
    boxShadow: {
      inner: 'inset 0 2px 4px 0px rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
    textShadow: ['responsive', 'hover'],
    animation: ['hover'],
  },
  plugins: [
    require('tailwindcss-textShadow')
  ]
}
