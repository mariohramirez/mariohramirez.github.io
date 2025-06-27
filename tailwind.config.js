 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      fontFamily:{
        bebasneue: ['bebasneue']
      },
      colors: {
        primary: '#ff6c18',
        secondary: '#f2f1ed',
        third: '#fbcb0d',
        fourht: '#763a11',
        fifth: '#454445'
      },
      animation: {
        scrollLeft: 'scrollLeft 10s linear infinite'
      },
      keyframes: {
        scrollLeft: {
          '0%' : { transform: 'translateX(0)'},
          '100%' : { transform: 'translateX(-100%)'}
        },
      }
     },
   },
   plugins: [],
 }