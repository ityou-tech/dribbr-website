/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      colors: {
        // Bird-themed color palette - calm and playful
        'bird-blue': {
          50: '#e8f4f8',
          100: '#d1e9f1',
          200: '#a3d3e3',
          300: '#75bdd5',
          400: '#47a7c7',
          500: '#2b8faf',  // Primary blue
          600: '#22728c',
          700: '#1a5569',
          800: '#113846',
          900: '#091c23',
        },
        'bird-green': {
          50: '#ecf8f3',
          100: '#d9f1e7',
          200: '#b3e3cf',
          300: '#8dd5b7',
          400: '#67c79f',
          500: '#4ab587',  // Fresh green
          600: '#3b916c',
          700: '#2c6d51',
          800: '#1e4836',
          900: '#0f241b',
        },
        'bird-orange': {
          50: '#fff4e6',
          100: '#ffe9cc',
          200: '#ffd399',
          300: '#ffbd66',
          400: '#ffa733',
          500: '#ff9100',  // Warm accent
          600: '#cc7400',
          700: '#995700',
          800: '#663a00',
          900: '#331d00',
        },
        'bird-yellow': {
          50: '#fffbeb',
          100: '#fef7d6',
          200: '#fdefad',
          300: '#fce784',
          400: '#fbdf5b',
          500: '#fad732',  // Bright yellow
          600: '#c8ac28',
          700: '#96811e',
          800: '#645614',
          900: '#322b0a',
        },
        // Neutral tones
        'sage': {
          50: '#f5f7f6',
          100: '#e8ece9',
          200: '#d1d9d3',
          300: '#bac6bd',
          400: '#a3b3a7',
          500: '#8ca091',
          600: '#708074',
          700: '#546057',
          800: '#38403a',
          900: '#1c201d',
        },
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-aviary': 'linear-gradient(135deg, #e8f4f8 0%, #ecf8f3 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
