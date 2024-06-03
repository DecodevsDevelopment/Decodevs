/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {},
      keyframes: {},
    },
  },
  plugins: [ require('tailwindcss-animated')],
};