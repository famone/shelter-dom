// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // width: {
      //   'offset': 'calc(100% - 32px)',
      // },
      colors: {
        primary: "#F1CDB3",
        dim_super_dark: "#292929",
        dim_dark: "#545454",
        dim_dark2: "#4C4C4C",
        primary_hover: "#FDDCC4",
        dim_gray: "#CDCDCD",
        dim_l_gray:"#FAFAFA",
        dim_l_gray2: "#F6F6F6"
      },
      fontSize: {
        '5xl': '42px',
        '4xl': '35px',
        'md': '15px'
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1200px",
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}

