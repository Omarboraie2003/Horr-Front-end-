/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          600: '#C5A065',
          700: '#B08D55',
        },
        navy: {
          DEFAULT: '#0F1E2C',
          light: '#1A2E3D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card-lg': '0 15px 35px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
