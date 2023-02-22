/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["roboto", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        elemWhite: "rgba(256,256,256,0.9)",
        elemDark: "rgba(30,30,30,0.8)",
        elem: "rgba(30,30,30,0.2)",
        placeholder: "rgba(30,30,30,0.075)",
      },
      colors: {
        blue: {
          100: "#335776",
          200: "#003057",
          300: "#033057",
          400: "#063156",
        },
      },
      padding: {
        page: "2.5rem",
      },
      minHeight: {
        80: "20rem",
      },
      maxWidth: {
        "2/3": "66%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
