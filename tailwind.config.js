/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
     screens: {
      sm: '480px',
      md: '768px',
      lg: '1440px'
    },
    extend: {
      colors: {
    white: 'hsl(0, 100%, 100%)',
    black: 'hsl(0, 0%, 0%)',
    red: 'hsl(0, 100%, 50%)',
    blue: 'hsl(242, 100%, 55%)',
    gray: 'rgb(128, 128, 128)',
    darkGray: '#5e5959'
      }
    },
  },
  plugins: [],
}
