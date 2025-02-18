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
        primaryColor: "#2B433E",
        secondaryColor: "#171717",
        textColor: "#3DA264",
      },
    },
  },
  plugins: [],
};
