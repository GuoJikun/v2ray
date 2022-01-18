import { defineConfig, searchForWorkspaceRoot } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/render"),
    },
  },
  plugins: [vue()],
});
