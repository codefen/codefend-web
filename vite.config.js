import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import LightningCSS from "unplugin-lightningcss/vite";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react(), LightningCSS()],
    build: {
      outDir: "build",
      cssMinify: "lightningcss",
      minify: "esbuild",
      sourcemap: false,
    },
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: { chrome: 115, firefox: 115, safari: 16 },
      },
    },
    clearScreen: false,
    server: {
      host: true,
      port: process.env.PORT ? +process.env.PORT : 3000,
      historyApiFallback: true,
    },
    preview: {
      historyApiFallback: true,
    },
  };
});
