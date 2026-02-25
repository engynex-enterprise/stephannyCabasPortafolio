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
          DEFAULT: '#080808',
          100: '#1A1A1A',
          200: '#141414',
          300: '#0F0F0F',
        },
        cream: '#F8F5F0',
        smoke: '#8A8A8A',
        warm: {
          DEFAULT: '#FCFAF6',
          100: '#F5EFE5',
          200: '#EBE3D8',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.12em',
        mega: '0.15em',
        editorial: '0.08em',
      },
    },
  },
  plugins: [],
};
