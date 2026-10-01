import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dce8ff",
          500: "#3b6cf4",
          600: "#2557eb",
          700: "#1d44d8",
          950: "#0f1729",
        },
        sidebar: {
          DEFAULT: "#1a1f3a",
          hover: "#252b4a",
          active: "#2d3560",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        panel:
          "0 0 0 1px rgba(15, 23, 42, 0.06), 0 4px 24px -4px rgba(15, 23, 42, 0.08)",
        float:
          "0 0 0 1px rgba(15, 23, 42, 0.05), 0 24px 48px -12px rgba(15, 23, 42, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
