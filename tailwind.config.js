/** @type {import('tailwindcss').Config} */
import { primary, secondary, grayColor, transparent, ringColor, semiTransparent } from './src/utils/styles/color';
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
      primary,
      secondary,
      grayColor,
      transparent,
      ringColor,
      semiTransparent,
    }


  },
  plugins: [],
}
