/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Alata: ["Alata", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        "mobile-hero": "url('https://res.cloudinary.com/dlykqebw2/image/upload/v1709033671/image-hero-mobile_dqtvuw.jpg')",
        "desktop-hero": "url('https://res.cloudinary.com/dlykqebw2/image/upload/v1709033698/image-hero-desktop_bbmw6h.jpg')",
      },
      colors: {
        DarkGray: "hsl(0, 0%, 55%)",
        VeryDarkGray: "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
};
