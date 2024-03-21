/** @type {import('tailwindcss').Config} */
import { white,orange,gray } from './src/utils/color'
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '991px',
        'xl': '1200px',
      },
      colors:{
        white,
        orange,
        gray,
      }
    
    
  },
  plugins: [],
}
