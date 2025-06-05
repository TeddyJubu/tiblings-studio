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
        // Primary Color Palette
        'sage-green': '#5A8B7A',
        'coral-pink': '#D4857A',
        'warm-beige': '#E6C896',
        'soft-blush': '#E8C4C4',
        
        // Extended Palette
        'deep-forest': '#3D5A4F',
        'dusty-rose': '#C19A9A',
        'warm-sand': '#F2E6D3',
        'terracotta': '#B8695A',
        'mint-whisper': '#A8C4B8',
        
        // Neutral Support Colors
        'warm-gray': '#B8AFA7',
        'light-gray': '#F5F3F1',
        'charcoal': '#2C3E37',
      },
      fontFamily: {
        'heading': ['"Bagel Fat One"', 'sans-serif'],
        'body': ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}