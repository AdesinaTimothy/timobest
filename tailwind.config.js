const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          fontFamily: {
            pally: ['var(--font-ubuntu)', 'sans-serif'],
          },
          keyframes: {
            wiggle: {
              '0%, 100%': { transform: 'rotate(-15deg)' },
              '50%': { transform: 'rotate(15deg)' },
            },
          },
          animation: {
            wiggle: 'wiggle 0.6s ease-in-out infinite',
          },
        },
      },
      
  });
  