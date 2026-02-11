/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/collections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#f5f5f0', // Warm light gray base
        'magenta': {
          DEFAULT: '#e6005c', // Vibrant magenta
          hover: '#c4004f',
          light: '#ff4d94',
        },
        'ink': '#0f0f0f', // Deep black for text
        'overlay-tint': 'rgba(245, 245, 240, 0.85)', // Semi-transparent off-white
      },
      fontFamily: {
        'sans-jp': ['var(--font-noto-sans-jp)', 'sans-serif'],
      },
      backgroundImage: {
        // Example for masked texture to be used in utilities or inline
        'noise': "url('/noise.png')", // Placeholder if we had one
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
