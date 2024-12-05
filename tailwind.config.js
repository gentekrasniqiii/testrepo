/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        primary:'#03be80',
        scnd:'#f5f5f7'
      },
      fontSize:{
        large: '32px',
        small: '24px'
      }
    },
  },
  plugins: [],
}