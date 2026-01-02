/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      keyframes: {
        'pulse-success': {
          '0%, 100%': { backgroundColor: 'rgb(34 197 94)' },
          '50%': { backgroundColor: 'rgb(74 222 128)' },
        },
        'pulse-error': {
          '0%, 100%': { backgroundColor: 'rgb(239 68 68)' },
          '50%': { backgroundColor: 'rgb(248 113 113)' },
        },
      },
      animation: {
        'pulse-success': 'pulse-success 0.3s ease-in-out',
        'pulse-error': 'pulse-error 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
