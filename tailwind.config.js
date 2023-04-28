/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#0744A8",
          2: "#004AC1",
          3: "#2b3445",
          4: "#013E9B",
        },
        gray: {
          1: "#7D879C",
          2: "#EBEFF4",
          3: "#B4B4B4",
          4: "#D8E0E9",
          5: "#4B566B",
        },
        "yellow-": "#FFD300",
      },
      boxShadow: {
        primary: "0px 5px 6px #00000029",
        secondary: "0px 3px 6px #00000029",
      },
    },
  },
  plugins: [],
};
