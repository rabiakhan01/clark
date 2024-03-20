/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screen: {
        sm: '576',
        md: '768',
        lg: '992',
        xl: '1200',
      },
    },
    colors:{
            'white': '#ffffff',
            'black': '#000000',
            'orange': '#23421e',
    },
    
  },
  plugins: [],
}
