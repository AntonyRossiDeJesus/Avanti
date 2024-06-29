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
        thumbcases: "url('../assets/thum-site-case.png')",
        thumbcases2: "url('../assets/thumb-case-site-1.jpg')",
        thumbcases3: "url('../assets/thumb-sao-joaao.png')",
        logoMax: "url('../assets/LOGO1-MAX.svg')",
      },

      colors: {
        "bg-primary": "#02101F",
        "bg-hambuguer": "#1D242D",
        "bg-soluctions": "#e6efff",
        "line-soluctions": " #E8E9EA",
        "bg-implantacao": "#FAFBFC",
        "bg-line-cases": "#E5E7EB",
        "text-primary": "#005CFF",
        "text-secundary": "#979a93",
        "bg-popup": "#101419",
      },
    },
  },
  plugins: [],
};
export default config;
