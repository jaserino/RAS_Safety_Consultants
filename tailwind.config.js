/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        mooli: ['Mooli', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
