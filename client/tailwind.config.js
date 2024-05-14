/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: '#5c6ac4',
        // blue: '#007ace',
        // customblue: '#317CC2',
        // 'customblue-lighter': '#6ca6d6', // Color más claro
        // 'customblue-darker': '#1e5987', // Color más oscuro
        red: '#de3618',
      },
      fontFamily: {
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
