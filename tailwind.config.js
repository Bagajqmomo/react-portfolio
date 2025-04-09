/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        retro: ["retro", "sans-serif"],
      },
      colors: {
        primary: "#939AFF",
        secondary: "#FFAD93",
        tertiary: "#93D1FF",
        light: "#FFFFFF",
      },
      screens: {
        xs: 0,
        sm: "577px",
        md: "769px",
        lg: "993px",
        xl: "1201px",
        xxl: "1441px",
      },
    },
  },
  plugins: [require("daisyui")],
};
