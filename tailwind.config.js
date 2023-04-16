/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './cms/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      tablet: '740px',
      desktop: '1440px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-img': "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 90%, rgba(0,0,0,0.9) 100%), url('/images/hero_bg.png')",
        'footer-img': "linear-gradient(rgba(28,28,28,0.8), rgba(28,28,28,0.8)), url('/images/hero_bg.png')",
      },
      colors: {
        muted: '#8e8e8e'
      },
      fontSize: {
        '2xs': ['0.5rem', '0.6rem']
      }
    },
    fontFamily: {
      'albertus-nova': ['var(--font-albertus-nova)'],
      inter: ['var(--font-inter)']
    },
  },
  plugins: [],
}
