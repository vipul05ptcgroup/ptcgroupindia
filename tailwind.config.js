/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#E9F3F1',
          100: '#C5DEDA',
          200: '#98C4BE',
          300: '#66A69E',
          400: '#36847C',
          500: '#17685F',
          600: '#0D554E',
          700: '#08443E',
          800: '#05352F',
          900: '#032A25',
          950: '#011E1B',
        },
        gold: {
          50:  '#FFF8E7',
          100: '#FDECC2',
          200: '#F9D98A',
          300: '#F2C153',
          400: '#E9A92E',
          500: '#D7951F',
          600: '#B87516',
          700: '#925712',
          800: '#713F10',
          900: '#512B0C',
        },
        slate: {
          50:  '#FAF9F5',
          100: '#F3F1EB',
          200: '#E6E2D9',
          300: '#D4CEC2',
          400: '#A8A095',
          500: '#777168',
          600: '#57534D',
          700: '#403D39',
          800: '#292825',
          900: '#1D1C1A',
          950: '#11110F',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      backgroundImage: {
        'hero-grid': "linear-gradient(rgba(215,149,31,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(215,149,31,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
