/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        body: "#fbfbfb",
        primary: "#3886FA",
        secondary: "#E5F3F5",
        info: "#2EB2C1",
        warning: "#F17A04",
        success: "#2DCE89",
        danger: "#F5365C",
        error: "#DC3545",
        overview: "#F17A04",
        work: "#0E8799",
        break: "#1C6CBC",
        lightGreen: "#BBDC00",
        infoLight: "#2CB7C6",
        highlight: "#0E8799",
        absence: "#E73238",
        settings: "#57D05B",
      },
      width: {},
      borderColor: {},
      borderRadius: {},
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        openSans: "'Open Sans', sans-serif",
        rubik: "'Rubik', sans-serif",
      },
      fontSize: {},
      screens: {
        // xs: { max: "600px" },
      },

      boxShadow: {
        cardShadow: "0px 0px 32px 0px rgba(136, 152, 170, 0.15)",
        authShadow: "0px 0px 80px 3px rgba(0, 0, 0, 0.07);",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
