/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Alata: ['Alata', 'sans-serif'],
        Josefin: ['Josefin Sans', 'sans-serif']
      }, 
      backgroundImage: {
        'mobile-hero': "url('../public/assets/images/mobile/image-hero.jpg')",
        'desktop-hero': "url('../public/assets/images/desktop/image-hero.jpg')",
      }, 
      colors: {
        'DarkGray': 'hsl(0, 0%, 55%)',
        'VeryDarkGray': 'hsl(0, 0%, 41%)'
      }
    },
  },
  plugins: [],
}
