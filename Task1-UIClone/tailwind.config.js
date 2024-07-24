/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        mobileL:"500px",
        mobileM:"435px"
      },
      colors:{
        primary:"#101A24",
        buttons:"#EA6D27"
      },
      padding:{
        sectionPadding:"4rem",
        mobilePadding:"2.5rem"
      },
      fontFamily:{
        Inter:["Inter", "sans-serif"],
        DavidLibre:["David Libre", "serif"]
      },
      
    },
  },
  plugins: [],
}