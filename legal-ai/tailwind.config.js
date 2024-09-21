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
        primary: "#1A1A1A",
        accent: "#7F5AF0",
        secondary:"#cbacf9",
        textPrimary: "#FFFFFF",
        textPrimary: "#E5E5E5"
      },
    },
  },
  plugins: [],
}