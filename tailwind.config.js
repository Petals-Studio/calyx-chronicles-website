/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./cms/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: { max: "371px" },
      sm: { min: "372px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px" },

      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      tablet: "740px",
      desktop: "1440px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "floating-header":
          "linear-gradient(to bottom, black 70%, transparent 90%)",
        "hero-img":
          "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 90%, rgba(0,0,0,0.9) 100%), url('/images/hero_bg.png')",
        "hero-img-desktop":
          "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 90%, rgba(0,0,0,0.9) 100%), url('/images/hero_bg_desktop.png')",
        "showcase-img":
          "linear-gradient(to bottom, rgb(0,0,0) 7%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0.9) 100%), url('/images/showcase_bg.png')",
        "coming-soon-img":
          "linear-gradient(to bottom, rgb(0,0,0) 7%, rgba(0,0,0,0.01) 90%, rgba(0,0,0,0.9) 100%), url('/images/coming_soon_bg.png')",
        "news-img":
          "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8) 150%), linear-gradient(to right, black, #0A5560 15%, #0A5560 85%, rgb(0,0,0)), url('/images/coming_soon_bg.png')",
        "footer-img":
          "linear-gradient(rgba(28,28,28,0.8), rgba(28,28,28,0.8)), url('/images/hero_bg.png')",
        "footer-img-desktop":
          "linear-gradient(rgba(28,28,28,0.8), rgba(28,28,28,0.8)), url('/images/hero_bg_desktop.png')",
      },
      colors: {
        muted: "#8e8e8e",
      },
      fontSize: {
        "2xs": ["0.5rem", "0.6rem"],
        "4xl": ["2.25rem", "3.5rem"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
    fontFamily: {
      "albertus-nova": ["var(--font-albertus-nova)"],
      inter: ["var(--font-inter)"],
    },
  },
  plugins: [],
};
