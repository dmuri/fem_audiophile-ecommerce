/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        bold: "500",
        bolder: "700",
      },
      colors: {
        "custom-orange-d8": "#D87D4A",
        "custom-orange-fb": "#fbaf85",
        "custom-error": "#CD2C2C",
        charcoal: "#101010",
        black: "#000000",
        "gray-100": "#FAFAFA",
        "gray-200": "#F1F1F1",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
