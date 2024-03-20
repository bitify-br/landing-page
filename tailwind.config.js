/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif']
    },
    colors: {
      'black': '#000000',
      'gray': {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#0d0d0d',
      },
      'dodger': {
        50: '#eef9ff',
        100: '#d9f2ff',
        200: '#bce8ff',
        300: '#8edbff',
        400: '#59c5ff',
        500: '#27a4ff',
        600: '#1b8af5',
        700: '#1473e1',
        800: '#175cb6',
        900: '#194e8f',
        950: '#143057',
      }
    }
  },
  plugins: [],
}

