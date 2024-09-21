/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)" ,
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors:{
        primary:"#010319",
        secondary:"#cbacf9",
        light:"#492c74",
        accent:{
          DEFAULT: "#00ff99",
          hover: "00e187"
        }
      },
    },
  },
  plugins: [],
}