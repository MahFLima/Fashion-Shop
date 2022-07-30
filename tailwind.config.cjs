/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        purple:{
          300: '#c47ef9',
          400: '#b35ff4'
        },
        pink:{
          300: 'fd93b9'
        },
        gray:{
          400: "#5A5757"
        }
      }
    },
  },
  plugins: [],
}