/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Commissioner': ['Commissioner', 'sans-serif'],
        'DancingScript': ['"Dancing Script"', 'sans-serif']}
    },
  },
  plugins: [],
}
