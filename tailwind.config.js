/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Calibri', 'system-ui', 'sans-serif'],
        calibri: ['Calibri', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        thin: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
      },
    },
  },
  plugins: [],
} 