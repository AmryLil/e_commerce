/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./templates/home/index.html",
    "./templates/home/welcome.html",
    "./templates/auth/login.html",
    "./templates/home/myaccount.html",
    "./templates/home/category.html",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "25%": {
            width: "25%",
          },
          "50%": {
            width: "50%",
          },
          "75%": {
            width: "75%",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            margin: 0,
            borderColor: "white",
          },
        },
      },
      animation: {
        "waving-hand": "wave 1s linear infinite",
        typing: "typing 2.4s steps(50) infinite alternate, blink 0.5s infinite",
      },
    },
  },
  plugins: [],
};
