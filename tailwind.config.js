/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./comnponents/**/*.{html,js,jsx}"],
  theme: {
    extend: {backgroundImage: {
      'custom': "url('/image.jpg')",
    },},
  },
  plugins: [],
}


