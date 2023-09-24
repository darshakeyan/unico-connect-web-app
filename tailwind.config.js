/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,jsx,}"],
  theme: {
    extend: {
      boxShadow: {
        'tech': '0 -10px 40px rgba(0, 0, 0, .6)',
      }
    },
  },
  plugins: [],
}

