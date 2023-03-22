/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        sans: 'Open Sans',
        RobotoMono: 'Roboto Mono',
      },

      dropShadow: {
        'WhiteShadow' : '0px 0px 10px rgba(255, 255, 255, 1);',
      },
    },
  },
  plugins: [],
}