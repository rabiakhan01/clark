/** @type {import('tailwindcss').Config} */
import { primaryColor, secondaryColor, grayColor, transparentColor, ringColor, semiTransparent, blackColor, backgroundColor } from './src/utils/styles/color';
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
      width: {
        '128': '38rem',
        '120': '22rem',
      }
    },
    colors: {
      'primaryColor': primaryColor,
      'secondaryColor': secondaryColor,
      'grayColor': grayColor,
      'transparentColor': transparentColor,
      'ringColor': ringColor,
      'semiTransparent': semiTransparent,
      'blackColor': blackColor,
      'backgroundColor': backgroundColor,
    }


  },
  plugins: [],
}
