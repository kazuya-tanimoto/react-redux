import {configDefaults, defineConfig} from "vitest/config";
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    coverage: {
      provider: "v8",
      include: ["src/**/*"],
      exclude: ["src/**/*.test.*", "**/types/*.ts", "**/*.d.ts", "**/data/*.ts", "src/dev/**/*"],
    },
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "tests/**/*"],
    globals: true,
    setupFiles: "./vitest.setup.ts"
  }
  
})
