/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //    theme 1
        navy: {
          // text
          750: "hsl(221, 14%, 31%)", // key text

          // bg
          800: "hsl(222, 26%, 31%)", // main bg
          850: "hsl(223, 31%, 20%)", // toggle bg
          950: "hsl(224, 36%, 15%)", // screen bg

          // keys
          700: "hsl(225, 21%, 49%)", // key bg
          800: "hsl(224, 28%, 35%)", // key shadow
        },
        red: {
          // keys
          600: "hsl(6, 63%, 50%)", // key bg
          800: "hsl(6, 70%, 34%)", // key shadow
        },
        gray: {
          // keys
          200: "hsl(30, 25%, 89%)", // key bg || main bg for theme 2
          400: "hsl(28, 16%, 65%)", // key shadow
          900: "hsl(221, 14%, 31%)", // text for theme 2

          // theme 2 bg
          100: "hsl(0, 0%, 90%)", // screen bg
          300: "hsl(0, 5%, 81%)", // toggle bg
        },

        // theme 2
        blue: {
          // keys
          500: "hsl(185, 42%, 37%)", // key bg
          600: "hsl(185, 58%, 25%)", // key shadow

          // text for theme 3
          850: "hsl(176, 100%, 44%)", // text
        },
        orange: {
          // keys
          700: "hsl(25, 98%, 40%)", // key bg
          800: "hsl(25, 99%, 27%)", // key shadow
        },
        grey: {
          // keys
          200: "hsl(45, 7%, 89%)", // key bg
          450: "hsl(35, 11%, 61%)", // key shadow
        },

        // theme 3
        purple: {
          // bg
          950: "hsl(268, 75%, 9%)", // main bg
          900: "hsl(268, 71%, 12%)", // toggle bg

          //    keys
          750: "hsl(281, 89%, 26%)", // key shadow
          800: "hsl(281, 89%, 26%)", // key bg
          850: "hsl(285, 91%, 52%)", // key bg
          400: "hsl(285, 91%, 52%)", // key shadow
        },
        cyan: {
          // keys
          500: "hsl(176, 100%, 44%)", // key bg
          400: "hsl(177, 92%, 70%)", // key shadow
        },
        yellow: {
          // text
          300: "hsl(52, 100%, 62%)", // key text
        },
      },
    },
  },
  plugins: [],
};
