import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [react(), imagetools()],
  base: "/",
  build: {
    cssCodeSplit: true, // Ensures CSS is split into a separate file
    minify: "esbuild", // Optional: Use esbuild for minifying production builds
  },
});
