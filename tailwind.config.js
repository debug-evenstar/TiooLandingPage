export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main': '#9C29B2',
        'main-light': '#9C29B266',
        'dark': '#454545',
        'darker': '#171717',
        'dark-blue': '#0E096C',
      },
      dropShadow: {
        '3xl': '10px 30px 12px rgba(103, 0, 123, 0.15)',
      }
    },
  },
  plugins: [],
}

