import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
  server: {
    https: true,
    port: 3000,
  },
  plugins: [vue(), mkcert()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
