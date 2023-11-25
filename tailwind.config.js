/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 1s linear infinite',
      },
      boxShadow: {
        'myShadow': '8px 8px 0px 0px rgb(64, 64, 64)',
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
      },
      colors: {
        myPurple: '#AE8FDB',
        myBlue: '#4C3A69',
        myYellow: '#FEF8B4',
        myHoverButton: '#d4cc95',
        myGray: '#404040',
        myGreen: '#6FDCBF',
        myBrown: '#29272A',
      }
    },
  },
  plugins: [],
}

