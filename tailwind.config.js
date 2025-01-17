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
        'nyu': {
          'purple': '#57068C',     // Primary Purple
          'violet': '#330662',     // Dark Purple
          'white': '#FFFFFF',      // White
          'gray': '#D9D9D6',       // Light Gray
          'darkgray': '#666666',   // Dark Gray
          'black': '#000000',      // Black
          'torch': '#FF1493',      // Torch Red
          'brightred': '#EE0000',  // Bright Red
          'orange': '#F36E21',     // Orange
          'blue': '#00A3E0',       // Blue
        }
      },
    },
  },
  plugins: [],
}
