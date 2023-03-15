/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        boxShadow: {
          "3xl": "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
          "2xl": "0 25px 50px 0 rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
  plugins: [],
};
