/** @type {import('tailwindcss').Config} */

const defaultColorScheme = {
  "dark-blue": "#264653",
  "turquoise-green": "#2A9D8F",
  yellow: "#E9C46A",
  orange: "#F4A261",
  "orange-red": "#E76F51",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: defaultColorScheme,
      textColor: {
        "dark-blue": "#264653",
        "turquoise-green": "#2A9D8F",
        yellow: "#E9C46A",
        orange: "#F4A261",
        "orange-red": "#E76F51",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
