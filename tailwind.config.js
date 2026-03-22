const { colors, fonts } = require('./src/constants/token');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
    colors: colors,
    fontFamily: {
      "heading": [fonts.heading],
      "body": [fonts.body],
      'body-semibold': [fonts.bodySemiBold],
    },
  },
  },
  plugins: [],
};