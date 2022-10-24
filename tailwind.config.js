/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#1877F2",
        secondary: "#42b72a",
        lightGray: "#F0F2F5",
        lightBlue: "#C6D5F1",
        neutral: "#3D4451",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
    },
  },
  plugins: [],
};
