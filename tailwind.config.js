/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      colors: {
        // Refined naturalist palette - deeper, richer, more sophisticated
        'plumage': {
          50: '#faf9f7',
          100: '#f3f1ec',
          200: '#e6e2d9',
          300: '#d4cec0',
          400: '#b8b0a0',
          500: '#9a9080',
          600: '#7d7464',
          700: '#5e5849',
          800: '#3f3b31',
          900: '#1f1d18',
          950: '#0f0e0c',
        },
        // Deep forest green - primary action color
        'aviary': {
          50: '#f0f7f4',
          100: '#dbede4',
          200: '#b9dbcc',
          300: '#8ac2ab',
          400: '#5aa486',
          500: '#3a8568',
          600: '#2b6b52',
          700: '#245643',
          800: '#1f4537',
          900: '#1b392e',
          950: '#0d1f1a',
        },
        // Rich amber/ochre - warm accent
        'feather': {
          50: '#fefbf3',
          100: '#fcf3df',
          200: '#f8e4bc',
          300: '#f2ce8d',
          400: '#eab456',
          500: '#e49d2d',
          600: '#d18020',
          700: '#ae621c',
          800: '#8c4e1e',
          900: '#73411c',
          950: '#3f200b',
        },
        // Deep teal - sophisticated secondary
        'wingspan': {
          50: '#f1f9fa',
          100: '#dcf0f2',
          200: '#bde2e6',
          300: '#8eccd4',
          400: '#58adb9',
          500: '#3c919f',
          600: '#357686',
          700: '#30616e',
          800: '#2e515c',
          900: '#2a444e',
          950: '#182c34',
        },
        // Soft clay/terracotta for variety
        'nest': {
          50: '#faf6f4',
          100: '#f4ebe6',
          200: '#ebd7cd',
          300: '#dcbdab',
          400: '#ca9b81',
          500: '#bb8064',
          600: '#ac6b51',
          700: '#8f5844',
          800: '#754a3b',
          900: '#604033',
          950: '#331f19',
        },
      },
      fontFamily: {
        // Distinctive display font - characterful serif
        'display': ['"Fraunces"', 'Georgia', 'serif'],
        // Refined body font
        'body': ['"Outfit"', 'system-ui', 'sans-serif'],
        // Accent/label font
        'accent': ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-naturalist': 'linear-gradient(145deg, #f3f1ec 0%, #e6e2d9 50%, #dbede4 100%)',
        'gradient-forest': 'linear-gradient(135deg, #245643 0%, #1b392e 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f2ce8d 0%, #e49d2d 100%)',
        'grain': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-up-delayed': 'fadeUp 0.8s ease-out 0.2s forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'elevated': '0 4px 20px -2px rgba(31, 29, 24, 0.12), 0 2px 8px -2px rgba(31, 29, 24, 0.08)',
        'elevated-lg': '0 12px 40px -8px rgba(31, 29, 24, 0.15), 0 4px 16px -4px rgba(31, 29, 24, 0.1)',
        'glow-aviary': '0 0 40px -10px rgba(58, 133, 104, 0.4)',
        'glow-feather': '0 0 40px -10px rgba(228, 157, 45, 0.4)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(31, 29, 24, 0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
