/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "calc(100dvh - 7rem)",
      },
      colors: {
        primary: "#23313F",
        secondary: "#4B4F54",
        gold: "#bc9f62",
      },
      gridTemplateColumns: {
        card: "repeat(2, minmax(0, 450px))",
        "team-card": "repeat(3, minmax(0, 380px))",
      },
    },
  },
  plugins: [],
};
