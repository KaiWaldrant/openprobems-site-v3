/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "hsl(var(--background-primary))",
          secondary: "hsl(var(--background-secondary))",
          accent: "hsl(var(--background-accent))",
        },
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
        },
      },
    },
  },
  plugins: [],
};
