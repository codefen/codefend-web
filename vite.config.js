import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import LightningCSS from "unplugin-lightningcss/vite";

export default defineConfig(() => {
  return {
    base: "./",
    publicDir: "public",
    root: "./",
    build: {
      outDir: "build",
      cssMinify: "lightningcss",
    },
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: { chrome: 115, firefox: 115, safari: 16 },
      },
    },
    plugins: [react(), LightningCSS()],
    clearScreen: false,
    server: {
      host: true,
      port: process.env.PORT ? +process.env.PORT : 3000,
    },
  };
});
