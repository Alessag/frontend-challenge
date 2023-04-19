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
        },
        "yellow-": "#FFD300",
      },
      boxShadow: {
        primary: "0px 5px 6px #00000029",
      },
    },
  },
  plugins: [],
};
