/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#C10000",
      },
      fontFamily: {
        "rs": ['Roboto Slab', 'serif'],
        "open":['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
