/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        galano: ["galano", "sans-serif"],
        chalet: ["chalet", "sans-serif"],
        Epilogue: ["Epilogue", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],

      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
  plugins: [],
}