
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",   // Include the app directory
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        blue: {
          50: '#f0f8ff',
          600: '#1e90ff',
          700: '#1c86ee',
        },
      },
    },
  },
  plugins: [],
};