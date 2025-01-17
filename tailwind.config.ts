import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nyu': {
          'purple': '#57068C',     // NYU Primary Purple
          'violet': '#330662',     // NYU Dark Purple
          'white': '#FFFFFF',      // NYU White
          'gray': '#D9D9D6',       // NYU Light Gray
          'darkgray': '#666666',   // NYU Dark Gray
          'black': '#000000',      // NYU Black
          'torch': '#FF1493',      // NYU Torch Red
          'brightred': '#EE0000',  // NYU Bright Red
          'orange': '#F36E21',     // NYU Orange
          'green': '#57068C',      // NYU Green
          'blue': '#00A3E0',       // NYU Blue
        },
        'matlab-blue': '#0076A8',
        'matlab-orange': '#F28500',
      },
    },
  },
  plugins: [],
};

export default config;
