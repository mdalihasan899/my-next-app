// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#6c757d',
          500: '#495057',
          600: '#343a40',
          700: '#212529',
          800: '#1a1d20',
          900: '#0c0d0e',
        },
        steel: {
          100: '#f1f3f4',
          200: '#e1e5e9',
          300: '#c8d0d7',
          400: '#8fa0b1',
          500: '#5c6b7a',
          600: '#3d4852',
          700: '#2a3238',
        },
        copper: '#b87333',
        bronze: '#cd7f32',
        rust: '#8b4513'
      },
      fontFamily: {
        'industrial': ['Orbitron', 'monospace'],
        'utility': ['Rajdhani', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
      boxShadow: {
        'industrial': '4px 4px 0px 0px rgba(0,0,0,0.9)',
        'industrial-lg': '8px 8px 0px 0px rgba(0,0,0,0.9)',
        'industrial-inner': 'inset 2px 2px 0px 0px rgba(0,0,0,0.9)',
      },
      backgroundImage: {
        'industrial-pattern': "radial-gradient(circle at 25% 25%, rgba(184, 115, 51, 0.03) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(44, 62, 80, 0.03) 0%, transparent 50%)",
      }
    },
  },
  plugins: [],
}