/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        interMedium: "interMedium",
        interSemiBold: "interSemiBold",
      },
      colors: {
        primary: "#4CAF4F",
        secondary: "#263238",
        info: "#2194f3",
        hero: "#F5F7FA",
        fontPrimary: "#4D4D4D",
        fontSecondary: "#717171",
        fontLinks: "#18181f",
        fontSecondaryLinks: "#F5F7FA",
      },
      screens: {
        xs: "360px",
        sm: "414px",
        md: "640px",
        lg: "1280px",
      }
    },
  },
  plugins: [],
};
