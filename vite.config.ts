import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "react-onboarding-component",
    },
    sourcemap: true,
    target: "es6",
    minify: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "react/jsx-runtime",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      outDir: "dist",
      exclude: ["tests/", "vitest.config.ts", "src/molecules/SomeComponent"],
    }),
  ],
});
