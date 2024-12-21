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
        'color-accent-d': '#3B82F6',
        'color-text-d': '#F4F4F9',

        'color-primary': '#F4F4F9',
        'color-accent': '#3B82F6',
        'color-text': '#1F2937',
      },
      fontFamily: {
        "Montserrat ": ["Montserrat "],
        "Open-Sans": ["Open Sans"],
      }
    },
  },
  plugins: [],
}