/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bcc-black': '#0f0f0f',
        'bcc-surface': '#1a1a1a',
        'bcc-red': '#cc2200',
        'bcc-blue': '#3a9bd5',
        'bcc-text': '#f0f0f0',
        'bcc-muted': '#888888',
        'bcc-divider': '#2a2a2a',
        'bcc-dark-red': '#8b1500',
      },
      fontFamily: {
        'barlow': ['"Barlow Condensed"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
