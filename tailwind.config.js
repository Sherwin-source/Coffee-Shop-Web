module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#F5F5DC', // Cream
          dark: '#3E2723',  // Deep brown
          mocha: '#8D6E63', // Mocha
          caramel: '#D2691E', // Caramel
          brown: '#A0522D',  // Brown
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        base: 'var(--color-bg)',
      },
      textColor: {
        base: 'var(--color-text)',
      },
    },
  },
  plugins: [],
};