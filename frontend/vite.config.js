import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      target: "esnext", //browsers can handle the latest ES features
    },
    server: {
      port: 8080,
      proxy: {
        "/api": { target: "http://localhost:4000", excure: false },
      },
    },
    plugins: [react()],
  };
});
