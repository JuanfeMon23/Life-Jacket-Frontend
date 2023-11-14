// tailwind.config.js
const { nextui } = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ] , 
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      ml : '900px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
      },
      width: {
        'Mscreen': '97%', 
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
