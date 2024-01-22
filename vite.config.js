import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteSassPlugin from "@vitejs/plugin-sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteSassPlugin()],
});
