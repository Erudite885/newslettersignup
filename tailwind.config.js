/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        darkgrey:"hsl(234, 29%, 20%)",
        charcoal:"hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        white: "hsl(0, 0%, 100%)",
        tomato: "hsl(4, 100%, 67%)"
      },

      fontFamily:{
        roboto:["Roboto", "sans-serif"]
      },
    },
    screens:{
      xs:"480px",
      ss:"620px",
      sm:"768px",
      md:"1024px",
      lg:"1200px",
      xl:"1700px"
    }
  },
  plugins: [],
}

