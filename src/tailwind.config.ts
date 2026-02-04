import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "snow-white": "#FFFFFF",
        "snow-cream": "#FAFAFA",
        "snow-gray": "#F5F5F5",
        "deep-black": "#1A1A1A",
        "soft-black": "#333333",
        "medium-gray": "#666666",
        "light-gray": "#999999",
        "border-gray": "#E5E5E5",
        mango: "#FFC300",
        "mango-light": "#FFD54F",
        "mango-pale": "#FFF8E1",
        gold: "#D4AF37",
        "gold-light": "#E5C76B",
        "gold-pale": "#FAF5E4",
      },
      fontFamily: {
        sans: ["OPPO Sans", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "scroll-infinite": "scrollInfinite 40s linear infinite",
        "scroll-infinite-reverse": "scrollInfiniteReverse 35s linear infinite",
        "pixel-bounce": "pixelBounce 0.5s steps(4) infinite",
      },
      keyframes: {
        scrollInfinite: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollInfiniteReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        pixelBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
