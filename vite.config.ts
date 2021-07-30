import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/html-editor/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});