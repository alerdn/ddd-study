import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsConfigPaths()],
  // @ts-expect-error propriedade existe sim
  test: {
    globals: true,
  },
});
