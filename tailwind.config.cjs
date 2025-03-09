module.exports = {
  purge: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['Baloo', 'sans-serif'],
        droidSans: ['DroidSans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primaryColor: "#171717",
        secondaryColor: "#2B433E",
        textColor: "#CBCBCD",
        textSecondColor: "#a77f55",
        lineColor1: "#7E5C31",
        lineColor2: "#BC7932",
        lineColor3: "#1DAE61",
      },
    },
  },
  plugins: [],
};
