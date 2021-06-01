module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '150%': '150%',
        '75%': '75%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
