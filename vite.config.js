import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "weather-app",
  resolve: {
    alias: {
      components: "/src/components",
      pages: "/src/pages",
      services: "/src/services",
      assets: "/src/assets",
      utils: "/src/utils",
    },
  },
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src/components"),
  //     media: path.resolve(__dirname, "./src/assets"),
  //   },
  // },
});
