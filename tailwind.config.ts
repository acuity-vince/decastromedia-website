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
          black: "#000000",
          green: "#00E69C",
          teal: "#00BDAF",
          grey: "#EDF2F4",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-noto)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.15em",
        "extra-widest": "0.18em",
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-40": "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
