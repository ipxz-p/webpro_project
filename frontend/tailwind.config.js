/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        mypurple: {
          200: '#E6E2FA',
          300: '#9088E6',
          400: '#6A5BE2',
          500: '#4E42AA'
        }
      },
    },
  },
  plugins: [
    
  ]
}
