/* eslint-env node */
// const defaultTheme = require('tailwindcss/defaultTheme')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    // extend: {
    //   // here's how to extend fonts if needed
    //   fontFamily: {
    //     sans: [...defaultTheme.fontFamily.sans],
    //   },
    // },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // Noir
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#ffffff', // Blanc
          light: '#ffffff',
        },
        accent: {
          DEFAULT: '#ff7f11', // Orange (par défaut)
          dark: '#e56500',
          hover: '#ff8c00',
        },
      },
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-left-infinite': 'slide-left 25s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    iconsPlugin({
      // Collections: https://icones.js.org/
      // https://icones.js.org/collection/mdi
      collections: getIconCollections(['mdi','bxl']),
    }),
  ],
}
