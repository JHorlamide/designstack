/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      akzentica: ["Akzentica4F"],
    },

    fontSize: {
      xs: ["14px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      sm: ["16px", { letterSpacing: "28px", letterSpacing: "-0.03em" }],
      lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
      "2xl": ["36px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
      "3xl": ["48px", { lineHeight: "57.6px", letterSpacing: "-0.032em" }],
      "4xl": ["64px", { lineHeight: "76.8px", letterSpacing: "-0.032em" }],
      "5xl": ["80px", { lineHeight: "80px", letterSpacing: "-0.032em" }],
    },

    colors: {
      white: "#FFFFFF",
      blue: "#4977FF",
      gray: "#94A9AC",
      black: "#000000",
      "dark-gray": "#333333",
      "light-gray": "#F4F4F4",
      "light-black": "#272930",
      "text-gray": "#202026",
      "light-yellow": "#FFB562",
    },

    backgroundImage: {
      heroBg: "url('./src/assets/images/hero_bg.png')",
      heroBgMobile: "url('./src/assets/images/mobile_hero.png')",
      blueHeroBg: "url('/public/blue_hero.png')",
      mobileBlueHeroBg: "url('/public/mobile_blue_hero.png')",
    },

    extend: {},
  },
  plugins: [],
};
