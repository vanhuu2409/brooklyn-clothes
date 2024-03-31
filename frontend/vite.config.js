import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    server: {
      port: 8080,
      proxy: {
        "/api": { target: "http://localhost:4000", excure: false },
      },
    },
    plugins: [react()],
  };
});
