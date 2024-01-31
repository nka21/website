/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        img: "url('/src/images/bg_texture_180.png')",
      }),
      colors: {
        white: "#f2f3f4",
        black: "#12151E",
        gray: "#828489",
        kinari: "#EBE2D5",
      },
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Caveat: ["Caveat", "cursive"],
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
