/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xxs': "375px",
      'xs' : "425px",
      'sm' : "640px",
      'md' : "768px",
      'lg' : "1024px",
      'xl' : "1440px",
      '2xl': "1580px",
    },
    extend: {},
  },
  plugins: [],
}

