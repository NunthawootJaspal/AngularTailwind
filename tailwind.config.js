/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // ให้ Tailwind สแกน component HTML และ TS
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
      },
    },
  },
  plugins: [],
};
