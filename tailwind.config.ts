import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "light"],
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: "#3D3D9E",
          light: "#4F4FBF",
        },
        nearBlack: "#111118",
        offWhite: "#F5F5F7",
        midGray: "#6B6B7B",
        lightGray: "#E2E2E8",
        amber: "#F5A623",
        crimson: "#E84545",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        neo: "4px 4px 0px #111118",
        neoLg: "6px 6px 0px #111118",
      },
    },
  },
  plugins: [],
};
export default config;
