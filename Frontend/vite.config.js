import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "three/webgpu": path.resolve(
        "./node_modules/three/build/three.webgpu.js",
      ),
      "three/tsl": path.resolve("./node_modules/three/build/three.tsl.js"),
      "three/addons": path.resolve("./node_modules/three/examples/jsm"),
    },
  },
  optimizeDeps: {
    exclude: ["three"],
  },
});
