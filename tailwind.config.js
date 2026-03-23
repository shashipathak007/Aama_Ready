/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        themeBg: '#FDFBFB',
        themeWhite: '#FFFFFF',
        themeBorder: '#EAE2E3',
        themePrimary: '#F48B9E',
        themePrimaryLight: '#FDF2F4',
        
        greenText: '#2B6D45',
        greenBg: '#EBF5ED',
        greenBorder: '#6EB88B',

        redText: '#A73C44',
        redBg: '#FCEDED',
        redBorder: '#DE8E94',

        amberText: '#9A5A17',
        amberBg: '#FBF2E1',

        blueText: '#1C6B9E',
        blueBg: '#EAF3FA',

        tealText: '#127163',
        tealBg: '#E1F5F2',

        textPrimary: '#2D2325',
        textSecondary: '#6E6264',
        textMuted: '#A69B9D',
      }
    },
  },
  plugins: [],
}
