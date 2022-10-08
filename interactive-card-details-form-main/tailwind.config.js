/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(270, 3%, 87%)',
        'dark-violet': 'hsl(279, 6%, 55%)',
        'darker-violet': 'hsl(278, 68%, 11%)',
      }
    },
  },
  plugins: [],
}
