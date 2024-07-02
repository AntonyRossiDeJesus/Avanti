import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        thumbcases: "url('../assets/thum-site-case-webp.webp')",
        thumbcases2: "url('../assets/thumb-case-site-1-webp.webp')",
        thumbcases3: "url('../assets/thumb-sao-joaao.png')",
        logoMax: "url('../assets/LOGO1-MAX.svg')",
        bgEcossistema: "url('../assets/ecosystem.png')",
      },

      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "38%": "38%",
      },

      colors: {
        "bg-primary": "#02101F",
        "bg-hambuguer": "#1D242D",
        "bg-soluctions": "#e6efff",
        "line-soluctions": " #E8E9EA",
        "bg-implantacao": "#FAFBFC",
        "bg-line-cases": "#E5E7EB",
        "bg-depoiments": "#15181B",
        "bg-navegation": "#1d242d",
        "text-form-home": "#8C9A9E",
        "bg-input-form-home": "#272e36",
        "bg-footer": "#151A20",
        "text-primary": "#005CFF",
        "text-secundary": "#979a93",
        "bg-popup": "#101419",
      },
    },
  },
  plugins: [],
};
export default config;
