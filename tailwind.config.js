/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#47cde5",

          secondary: "#5363ef",

          accent: "#db51b6",

          neutral: "#1c1a23",

          "base-100": "#f8f6f8",

          info: "#9cc4e2",

          success: "#3dd699",

          warning: "#f49025",

          error: "#f37168",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
