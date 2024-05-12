/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily:{
        'JC':['Jersey 25 Charted', 'sans-serif'],
        'TP':['Tilt Prism', 'sans-serif'],
        'Teachers':['Teachers', 'sans-serif'],

      }
    },
  },
  plugins: [],
}

