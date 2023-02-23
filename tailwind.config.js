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
        elemLight: "rgba(256, 256, 256, 0.25)",
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
      minWidth: {
        24: "6rem",
      },
      minHeight: {
        20: "5rem",
        30: "7.5rem",
        40: "10rem",
        50: "12.5rem",
        60: "15rem",
        70: "17.5rem",
        80: "20rem",
      },
      maxWidth: {
        "2/3": "66%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
