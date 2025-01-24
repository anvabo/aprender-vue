import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import mkcert from "vite-plugin-mkcert";
//import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    https: true,
    port: 3000,
  },
  plugins: [vue(), mkcert()], //, vueDevTools(),],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
