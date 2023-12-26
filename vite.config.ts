import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  plugins: [react(), basicSsl()],
});
