/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      brightness: {
        25: ".25",
        35: ".35",
        40: ".40",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
