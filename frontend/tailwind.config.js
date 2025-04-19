/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Colors used in the project
      colors: {
        primary: "#0ea5e9",
        secondary: "#ef863e",
      },
    },
  },
  plugins: [],
};
