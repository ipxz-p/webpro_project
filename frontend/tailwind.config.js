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
        mypink: {
          100: '#FFE5EA',
          200: '#FEA5B5',
          300: '#FF8FA3',
          400: '#FF8298',
          500: '#3f3f46'
        },
        myyellow:{
          100: '#FDFBEC',
          200: '#F5E98C',
        },
        mystone:{
          100: '#F3F6F9',
          200: '#E7EBF0',
          500: '#a1a1aa',
          600: '#52525b',
          700: '#3f3f46'
        }
      },
      screens: {
        'max_md': {'max': '767px'},
        max_login: { max: "811px" },
        min_login: { min: "812px" },
      },
      keyframes: {
        headShake: {
          '0%': {
            transform: 'translateX(0)',
          },
          '6.5%': {
            transform: 'translateX(-6px) rotateY(-9deg)',
          },

          '18.5%': {
            transform: 'translateX(5px) rotateY(7deg)',
          },

          '31.5%': {
            transform: 'translateX(-3px) rotateY(-5deg)',
          },

          '43.5%': {
            transform: 'translateX(2px) rotateY(3deg)',
          },
          '50%': {
            transform: 'translateX(0)',
          },
        },
        flash: {
          '25%, 40%': { opacity: '0.5' },
          '50%': { opacity: '1' },
          '75%': { opacity: '0.5' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        
      },
      animation: {
        headShake: 'headShake 2s infinite',
        flash: 'flash 1.5s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ]
}
