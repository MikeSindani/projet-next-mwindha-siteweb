
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-color":"#DD9B0B",
        "secondary-color":"#FFFDF8",
        "three-color":"#424242"
      },
      fontFamily: {
        "primary-font": ["var(--font-poppins-sans)", "sans-serif"],
        "secondary-font": ["var(--font-dosis-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
