/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#6EA8FF",
        secondaryBlue: "#7B7CFF",
        primaryGreen: "#5EC6A5",
        softWhite: "#F5F7FB",
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
