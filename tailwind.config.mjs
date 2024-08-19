/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#aaa",
            backgroundColor: "#222",
            fontFamily: "Hind Madurai, sans-serif",

            h1: {
              fontFamily: "Montserrat, sans-serif",
              color: "#ccc",
              fontSize: 42,
            },
            code: {
              color: "#fff",
            },
            h2: {
              fontFamily: "Lora, serif",
              color: "#bbb",
              fontSize: 28,
              lineHeight: 1.2,
              fontStyle: "oblique",
              fontWeight: 400,
            },
            "h1 + h2": {
              marginTop: 0,
              paddingBottom: "0.5rem",
            },
            p: {
              fontSize: 17.5,
              lineHeight: 1.6,
              fontWeight: 300,
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
