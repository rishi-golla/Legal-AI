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
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        textPrimary: "var(--color-text-primary)",
        textSecondary: "var(--color-text-secondary)",
        textAccent: "var(--color-text-accent)",
      },
    },
  },
  plugins: [],
}