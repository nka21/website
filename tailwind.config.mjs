/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        img: "url('/src/images/bg_img.png')",
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
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
