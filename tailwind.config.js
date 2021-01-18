module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 5px 25px 1px rgba(0,0,0,.25)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },

    extend: {
      height: {
          '100' : '30rem',
          '9/10': '90vh',
          '1/10': '7.5vh',
        },
      minHeight: {
        '9/10-screen': '92.5vh',
        '100' : '30rem',
      },
      width: {
        '88': '22rem',
      }
    },

  },
  variants: {
    extend: {},
    animation: ['hover'],
  },  
}
