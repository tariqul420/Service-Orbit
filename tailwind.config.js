import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-primary-d': '#1F2937',
        'color-accent-d': '#FF9800',
        'color-text-d': '#F4F4F9',

        'color-primary': '#F9FAFB',
        'color-accent': '#F15A28',
        'color-text': '#212121',
      },
      fontFamily: {
        "Montserrat ": ["Montserrat", "sans-serif"],
      }
    },
  },
  darkMode: 'class',
  plugins: [daisyui],
}