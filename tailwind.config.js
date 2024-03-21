/** @type {import('tailwindcss').Config} */
import { white, orange, gray, transparent, ringColor } from './src/utils/styles/color';
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '991px',
      'xl': '1200px',
      '2xl': '1700px',
    },
    extend: {
      backgroundImage: {
        'background-image': "url('./assets/images/bg_2.png')",
      },
    },
    colors: {
      white,
      orange,
      gray,
      transparent,
      ringColor,
    }


  },
  plugins: [],
}
