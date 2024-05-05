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
  },
  plugins: [],
}

