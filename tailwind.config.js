/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#49C5B6'
      },
      backgroundColor:{
        loginbg : "url('/assets/login-bg.jpg')",
      }      
      
    },
  },
  plugins: [],
}

