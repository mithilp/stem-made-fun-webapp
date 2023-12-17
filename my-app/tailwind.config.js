/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "background": "var(--background)",
        "text": "var(--text)",
        "accent": "var(--accent)",
        // #004ba8
      },
    },
  },
  plugins: [],
}

