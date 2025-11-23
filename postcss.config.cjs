/* eslint-env node */
const tailwindcss = require('@tailwindcss/postcss')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    tailwindcss(),
    ...(process.env.NODE_ENV === 'production' ? [cssnano()] : []),
  ],
}
