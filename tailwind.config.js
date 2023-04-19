/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#0744A8",
          2: "#004AC1",
        },
        "yellow-": "#FFD300",
      },
    },
  },
  plugins: [],
};
