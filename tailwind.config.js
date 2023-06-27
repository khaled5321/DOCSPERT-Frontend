/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#25273e',
        'secondary': '#f76b31',
        'standard': '#f4f4f3',
        'background': "#89b2c0"
      }
    },
  },
  plugins: [],
}

