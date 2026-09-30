import type { Config } from "tailwindcss";

// Paleta «Grabado Raíz»: la misma de la PWA (apps/app/tailwind.config.ts), la
// carta impresa y el informe de septiembre de 2026. Papel, tinta verde carbón,
// bosque, salvia y arcilla. Todo el color de la web sale de aquí.
const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F5EEE2",
          light: "#FBF8F1",
          deep: "#EFE6D6",
        },
        kraft: {
          DEFAULT: "#EAE0CD",
          dark: "#DDD0B8",
        },
        ink: {
          DEFAULT: "#27332E",
          soft: "#4A554E",
          muted: "#656A60",
        },
        forest: {
          DEFAULT: "#1F513F",
          light: "#3F7862",
          dark: "#173D30",
        },
        sage: {
          DEFAULT: "#4B6A53",
          light: "#DCE3CF",
          pale: "#EDF0E4",
        },
        clay: {
          DEFAULT: "#B5653A",
          dark: "#8E4A28",
          deep: "#9A5230",
          light: "#F3E2D4",
        },
        cream: {
          DEFAULT: "#F8EFE3",
          line: "#ECDCC8",
        },
      },
      fontFamily: {
        sans: ["Archivo Variable", "-apple-system", "BlinkMacSystemFont", "system-ui", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Playfair Display Variable", "Iowan Old Style", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        page: "72rem",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.36, 0.64, 1)",
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
