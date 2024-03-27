/** @type {import('tailwindcss').Config} */
import { primaryColor, secondaryColor, grayColor, transparentColor, ringColor, semiTransparent, blackColor, backgroundColor, divColor, grayShade400, formBackground } from './src/utils/styles/color';
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '991px',
      'xl': '1200px',
      '2xl': '1270px',
    },
    extend: {
      backgroundImage: {
        'background-image': "url('./assets/images/bg_2.png')",
        'hireme': "url('./assets/images/hire_me.jpg')",
      },
      listStyleImage: {
        'arrow': "url('./assets/icons/arrow-right.png')",
      },
      width: {
        '128': '44rem',
        '140': '47rem',
        '50': '26.2rem',
        '40': '21.5rem',
        '53': '22rem',
        '55': '30rem',
        '120': '22rem',
        '3/12': '22%',
        '5/12': '40%',
        '1/4': '30%',

      },
      height: {
        '120': '33rem',
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
      'divColor': divColor,
      'grayShade400': grayShade400,
      'formBackground': formBackground,

    }


  },
  plugins: [],
}
