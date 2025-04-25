import daisyui from 'daisyui';
import { keepTheme } from 'keep-react/keepTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-primary-d': '#09101a',
        'color-accent-d': '#F15A28',
        'color-text-d': '#F4F4F9',
        'color-dark-lite': '#121b27',

        'color-primary': '#F9FAFB',
        'color-accent': '#F15A28',
        'color-text': '#212121',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [daisyui],
};

export default keepTheme(config);
