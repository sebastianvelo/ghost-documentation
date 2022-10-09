const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        up: 'up 0.1s ease-in-out',
      },
      keyframes: {
        up: {
          '0%': { bottom: '0rem' },
          '100%': { transform: '3rem' },
        }
      },
      transitionProperty: {
        'width': 'width',
        'borderWidth': 'borderWidth',
        'letterSpacing': 'letterSpacing',
      },
      colors: {
        primary: {
          light: colors.yellow[300],
          DEFAULT: colors.yellow[500],
          dark: colors.yellow[600],
        },
        secondary: {
          light: "#2EAADC",
          DEFAULT: "#186A8B",
          dark: "#030D11",
        },
        success: {
          light: colors.green[300],
          DEFAULT: colors.green[500],
          dark: colors.green[600],
        },
        danger: {
          light: colors.red[300],
          DEFAULT: colors.red[500],
          dark: colors.red[700],
        },
        warning: {
          light: colors.yellow[300],
          DEFAULT: colors.yellow[500],
          dark: colors.yellow[600],
        },
        info: {
          light: colors.blue[300],
          DEFAULT: colors.blue[500],
          dark: colors.blue[600],
        },
        light: {
          light: colors.gray[100],
          DEFAULT: colors.gray[200],
          dark: colors.gray[300],
        },
        dark: {
          DEFAULT: colors.gray[900],
          light: colors.gray[800],
        },
      }
    }
  },
  variants: {
    extend: {
      width: ['hover', 'focus'],
      ringWidth: ['hover'],
      ringColor: ['hover'],
      letterSpacing: ['hover', 'focus'],
    },
  },
  plugins: [],
};