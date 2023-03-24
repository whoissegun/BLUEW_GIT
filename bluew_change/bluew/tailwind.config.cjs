/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': {'max':'640px'},
      'md': {'min':'640px','max':'768px'},
      'lg': {'min':'768px','max':'1024px'},
      'xl': {'min':'1024px','max':'1280px'},
      '2xl': {'min':'1280px','max':'1536px'},
    },
    extend: {
      colors: {
        navItemsHover: ['#FFEDCB']
      },
      keyframes: {
        blinker: {
          '50%': {opacity:'1'}
        }
      },
      animation : {
        'blinker': 'blinker 1s linear infinite',
      },
      boxShadow:{
        cardBoxShadow:['5px 10px 1px #3E3828'],
        navBtn1BoxShadow:['inset 100px 0 0 0 #FC8E56']
      }
    },
  },
  plugins: [],
}
