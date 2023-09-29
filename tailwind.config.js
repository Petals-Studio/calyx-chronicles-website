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
        'season1-gradient': 'linear-gradient(180deg, rgba(4, 14, 22, 0.55) 25.7%, rgba(233, 62, 207, 0.55) 63.55%)',
        'season2-gradient': 'linear-gradient(180deg, rgba(4, 14, 22, 0.75) 12.81%, rgba(21, 7, 24, 0.75) 100%)',
        'dimblue-gradient': 'url("/videos/about_section.mp4"), linear-gradient(180deg, rgba(170, 209, 240, 0.75) 0%, rgba(35, 127, 201, 0.75) 71.73%)',
        'blue-gradient': 'linear-gradient(180deg, rgba(39, 177, 255, 1) 0%, rgba(117, 74, 240, 1) 71.73%)',
        'button-gradient': 'linear-gradient(180deg, #FFF 21.5%, #DAF0F1 66.53%, #FFF 118.22%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'floating-header': 'linear-gradient(to bottom, black 70%, transparent 90%)',
        'hero-img': "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 90%, rgba(0,0,0,0.9) 100%), url('/images/hero_bg.png')",
        'hero-img-desktop': "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 90%, rgba(0,0,0,0.9) 100%), url('/images/hero_bg_desktop.png')",
        'showcase-img': "linear-gradient(to bottom, rgb(0,0,0) 7%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0.9) 100%), url('/images/showcase_bg.png')",
        'coming-soon-img': "linear-gradient(to bottom, rgb(0,0,0) 7%, rgba(0,0,0,0.01) 90%, rgba(0,0,0,0.9) 100%), url('/images/coming_soon_bg.png')",
        'news-img': "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8) 150%), linear-gradient(to right, black, #0A5560 15%, #0A5560 85%, rgb(0,0,0)), url('/images/coming_soon_bg.png')",
        'footer-img': "linear-gradient(rgba(28,28,28,0.8), rgba(28,28,28,0.8)), url('/images/hero_bg.png')",
        'footer-img-desktop': "linear-gradient(rgba(28,28,28,0.8), rgba(28,28,28,0.8)), url('/images/hero_bg_desktop.png')",
        'carousel-section': "url('/images/carouselsectionbg.png')"
      },
      colors: {
        muted: '#8e8e8e',
        'input-outline': 'rgba(83, 225, 234, 0.24)',
        'havelock-blue': "#4399DE",
        'overlay-pink': 'rgba(202, 124, 216, 0.85)',
      },
      fontSize: {
        '2xs': ['0.5rem', '0.6rem'],
        'xxs': ['0.75rem', '1rem'],
        '4xl': ['2.25rem', '3.5rem']
      },
      maxWidth: {
        '8xl': '88rem'
      }
    },
    fontFamily: {
      'open-sans': ['var(--font-open-sans)'],
      'albertus-nova': ['var(--font-albertus-nova)'],
      inter: ['var(--font-inter)'],
      poppins: [`var(--font-poppins)`],
    },
  },
  plugins: [],
}
