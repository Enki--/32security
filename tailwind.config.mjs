/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'af-blue': '#00308F',
        'af-silver': '#A8A9AD',
        'af-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}