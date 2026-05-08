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
          50:  '#E6EDF7',
          100: '#B3C5E7',
          200: '#809ED6',
          300: '#4D76C5',
          400: '#2B56B0',
          500: '#1A3D8F',
          600: '#1A365D',
          700: '#142B4A',
          800: '#0F2038',
          900: '#0A1628',
          950: '#060E1F',
        },
        gold: {
          50:  '#FDF5E6',
          100: '#FAE4B0',
          200: '#F5CD78',
          300: '#EFB545',
          400: '#E8A020',
          500: '#C8912B',
          600: '#A97620',
          700: '#8A5C16',
          800: '#6B430D',
          900: '#4C2E06',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-grid': "linear-gradient(rgba(200,145,43,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(200,145,43,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
