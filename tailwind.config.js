/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#fffefe",
        headerDark: "#121212",
      },
    },
    screens: {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1700px",
      xl: "1408px",
    },
    plugins: [],
  },
};
