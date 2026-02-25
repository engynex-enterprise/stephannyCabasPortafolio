/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: '#C8A55C',
        'gold-light': '#E8D5A3',
        'gold-dark': '#9A7B3E',
        champagne: '#F5E6CC',
        rose: '#B76E79',
        dark: {
          DEFAULT: '#0A0A0A',
          100: '#1A1A1A',
          200: '#141414',
          300: '#0F0F0F',
        },
        cream: '#FAF7F2',
        smoke: '#8A8A8A',
        warm: {
          DEFAULT: '#FBF8F3',
          100: '#F3EDE4',
          200: '#EBE3D8',
        },
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.25em',
        mega: '0.4em',
      },
    },
  },
  plugins: [],
};
