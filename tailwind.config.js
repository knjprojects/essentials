/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"
  ],
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
//code/tailwind unrecognizable as i type and also gives me a red error i am unable to fix, 
  /*theme: {
    
    extend: {
      animation: {
    fadeIn: "fadeIn 2s ease-in forwards"
  },
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 }
    }
  },
      fontFamily:{
        Poppins: ["Poppins", "sans-serif"],
        merienda: ["Merienda",...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'my_bg_image': "url('/assets/img/bake.png')",
        'tele': "url('/assets/img/telephone.png')",
        'yellla': "url('/assets/img/yella.png')",
        'famous': "url('/assets/famous.png')",
        'roti': "url('/assets/img/food/dhalpourie.png')",
        'setup': "url('https://lh3.googleusercontent.com/p/AF1QipM8ltozlJrsGBUOcdKMCVSuwyWqL4s1dDkGrb_c=s0')",
        'setup2': "url('https://lh3.googleusercontent.com/p/AF1QipNWJE2jdvAsiWRxkzrxucBxd2Cq2vmbNP-ySwCE=s0')",
        'venue':"url('https://lh3.googleusercontent.com/p/AF1QipNN0pRsm_FeVxQBdUTPMazXVd9ondvLL2QGfHaZ=s0')",
      }

    },
  },*/
 plugins: [
    //require('flowbite/plugin'),
  ],

}

