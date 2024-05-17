/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: '#5c6ac4',
        blue: '#007ace',
        customblue: '#317CC2',
        red: '#de3618',
      }
    },
    screens: {
      sm: '640px', // small
      md: '768px', // medium
      lg: '1024px', // large
      xl: '1280px', // extra large
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

