/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#C44FEB",
      },
      fontFamily: {
        sans: ["Pretendard", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

//와 스바 colors 에 s빼니깐 색이 안떠버리누
