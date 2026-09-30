import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

// La web se sirve desde la raíz del dominio (raizygrano.com, GitHub Pages).
// `base` tiene que ser absoluta: cada ruta se prerenderiza en su propia
// carpeta (/carta/index.html) y una base relativa («./») rompería los assets.
export default defineConfig({
  base: "/",
  server: { host: "127.0.0.1", port: 8080 },
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: { target: "es2020" },
  test: {
    environment: "node",
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
