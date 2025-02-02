/** @type {import('tailwindcss').Config} */
export default {
  mode:"jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display-sc": ["Playfair Display SC"],
      },
      height: {
        500: "500px",
      },
    },
  },
  plugins: [],
};
