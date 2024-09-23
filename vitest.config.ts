import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: "./tests/helpers",
      environment: "jsdom",
      coverage: {
        include: ["src/**/*.ts", "src/**/*.tsx"],
        exclude: [
          "src/**/index.ts",
          "src/**/index.tsx",
          "src/**/*.types.ts",
          "src/**/*.stories.tsx",
          "src/**/*.test.tsx",
        ],
        thresholds: {
          statements: 90,
          branches: 90,
          functions: 90,
          lines: 90,
        },
      },
    },
  })
);
