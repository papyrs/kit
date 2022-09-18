import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `build/[name].js`,
          chunkFileNames: `build/chunks/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        },
      },
    },
  },
});
