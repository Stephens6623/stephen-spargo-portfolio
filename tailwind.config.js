/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors for your portfolio here
        primary: '#3B82F6',
        secondary: '#1F2937',
        accent: '#F59E0B',
      },
      fontFamily: {
        // Add custom fonts here if needed
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}