import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},

      colors: {
        "bg-primary": "#02101F",
        "bg-hambuguer": "#1D242D",
        "text-primary": "#005CFF",
        "text-secundary": "#979a93",
      },
    },
  },
  plugins: [],
};
export default config;
