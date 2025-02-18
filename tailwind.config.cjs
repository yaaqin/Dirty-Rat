module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['Baloo', 'sans-serif'],
        droidSans: ['DroidSans', 'sans-serif'],
      },
      colors: {
        primaryColor: "#171717",
        secondaryColor: "#2B433E",
        textColor: "#CBCBCD",
      },
    },
  },
  plugins: [],
};
