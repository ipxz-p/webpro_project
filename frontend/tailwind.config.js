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
        },
        mypink: '#FF8FA3'
      },
      screens: {
        'max_md': {'max': '767px'},
        'max_login': {'max': '811px'},
        'min_login': {'min': '812px'},
      },
    },
  },
  plugins: [
    
  ]
}
