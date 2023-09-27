/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        black: "#000",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
