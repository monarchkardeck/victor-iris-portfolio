import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/victor-iris-portfolio/",

  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      "@": "/src",
    },
  },
});