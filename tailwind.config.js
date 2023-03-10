/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#29527A",
        "custom-yellow": "#FBC65C",
        "custom-sub-main": "#22b0f0",
      },
    },
  },
  plugins: [],
};
