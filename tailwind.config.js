/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      bodyFonts: ["Poppins", "sans-serif"],
      titleFonts: ["Montserrat", "sans-serif"],
      handwriting: ["Merienda", "cursive"],
      roboto: ["Roboto", "merienda"],
    },
  },
  plugins: [],
}