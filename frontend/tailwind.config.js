/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(239, 246, 255)',
          100: 'rgb(219, 234, 254)',
          200: 'rgb(191, 219, 254)',
          300: 'rgb(147, 197, 253)',
          400: 'rgb(96, 165, 250)',
          500: 'rgb(59, 130, 246)',
          600: 'rgb(37, 99, 235)',
          700: 'rgb(29, 78, 216)',
          800: 'rgb(30, 64, 175)',
          900: 'rgb(30, 58, 138)',
        },
        secondary: {
          50: 'rgb(245, 243, 255)',
          100: 'rgb(237, 233, 254)',
          200: 'rgb(221, 214, 254)',
          300: 'rgb(196, 181, 253)',
          400: 'rgb(167, 139, 250)',
          500: 'rgb(139, 92, 246)',
          600: 'rgb(124, 58, 237)',
          700: 'rgb(109, 40, 217)',
          800: 'rgb(91, 33, 182)',
          900: 'rgb(76, 29, 149)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};