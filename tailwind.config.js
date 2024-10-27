/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/app/**/*.{js,ts,tsx}', 'src/components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#1DB954',
      },
    },
  },
  plugins: [],
};
