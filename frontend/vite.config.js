import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      port: 8080,
      proxy: {
        "/api": { target: "http://localhost:4000", excure: false },
      },
    },
    define: {
      "process.env": JSON.stringify(env),
    },
    build: {
      target: "esnext",
    },
    plugins: [react()],
  };
});
