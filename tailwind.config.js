/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["roboto", "sans-serif"],
    },
    extend: {
      colors: {
        blue: {
          100: "#335776",
          200: "#003057",
          300: "#033057",
          400: "#063156",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
