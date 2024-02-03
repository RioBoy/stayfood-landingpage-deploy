/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          xl: '9.375rem',
        },
      },
      colors: {
        primary: '#383838',
        secondary: '#B2B2B2',
        'lemonade': {
          50: '#f6f9d6',
          100: '#fbfec5',
          200: '#fbff9a',
          300: '#fffd73',
          400: '#ffed52',
          500: '#f6c937',
          600: '#d88d23',
          700: '#af4e17',
          800: '#7d1b10',
          900: '#450914',
        },
        'aragon': {
          50: '#d4f1d6',
          100: '#c1f0cb',
          200: '#9eebbf',
          300: '#7be4b7',
          400: '#5cd7a7',
          500: '#42c486',
          600: '#2da952',
          700: '#23871e',
          800: '#396012',
          900: '#363409',
        }
      },
      fontFamily: {
        sans: ["'Montserrat', sans-serif"],
      },
      screens: {
        xl: { max: '1440px' },
        xxl: { min: '1441px' },
      },
    },
  },
  plugins: [],
}
