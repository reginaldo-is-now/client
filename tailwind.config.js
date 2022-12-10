/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#010540",
        secondary: "#F90404",
        tertiary: "#FAC304",
      },
    },
    screens: {
      lg: { max: "2023px" },

      sm: { max: "1000px" },
    },
  },
  plugins: [],
};
