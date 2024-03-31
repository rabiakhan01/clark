/** @type {import('tailwindcss').Config} */
import { primaryColor, secondaryColor, grayColor, transparentColor, ringColor, semiTransparent, blackColor, backgroundColor, divColor, grayShade400, formBackground, navBackgroundColor } from './src/utils/styles/color';
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
        'slate-500': 'rgb(203 213 225)',
        'navBackgroundColor': navBackgroundColor,
      },
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
        '50': '47.5%',
        '53': '32rem',
        '55': '46%',
        '57': '51%',
        '120': '22.7rem',
        '3/12': '22%',
        '3/7': '65%',
        //'3/13': '32.2%',
        '5/12': '40%',
        '5/16': '48%',
        '5/13': '80%',
        '5/14': '97%',
        '5/15': '96%',
        '1/4': '30%',
        '1/11': '99%'

      },
      height: {
        '120': '33rem',
      }
    },
  },
  plugins: [],
}
