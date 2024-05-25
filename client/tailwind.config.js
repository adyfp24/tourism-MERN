/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: '#F2F1EB',
          200: '#4EA394',
          300: '#B4C6A6',
          400: '#E9E7E7',
          500: '#445D48',
          600: '#D8EFE9'
          
        },
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Epilogue: ["Epilogue", "sans-serif"]
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out",
      }
    },
  },
  plugins: [],
}