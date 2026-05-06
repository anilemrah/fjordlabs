/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAF8",
        sand: "#F2EDE4",
        bark: "#1A1A1A",
        clay: "#C47B30",
        "clay-dark": "#A86520",
        forest: "#2D5A4C",
        slate: "#6B7280",
      },
      fontFamily: {
        heading: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
