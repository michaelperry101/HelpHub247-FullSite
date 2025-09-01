/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#eaf2ff',
          DEFAULT: '#3B82F6', // Tailwind blue-500
          dark: '#1E40AF'     // blue-800
        }
      },
      boxShadow: {
        'glow': '0 10px 30px rgba(59,130,246,0.35)'
      }
    },
  },
  plugins: [],
};