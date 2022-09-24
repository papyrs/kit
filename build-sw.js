#!/usr/bin/env node

const { generateSW } = require("workbox-build");

const swDest = "dist/service-worker.js";

generateSW({
  globDirectory: "./dist",
  globPatterns: ["**/*"],
  globIgnores: ["**/d/index.html"],
  swDest,
  sourcemap: false,
  mode: "production",
  ignoreURLParametersMatching: [/./],
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: [
    {
      urlPattern: new RegExp(
        /^(?!.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/
      ),
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: {
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      urlPattern: new RegExp(
        /^(?=.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/
      ),
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "cors-images",
        expiration: {
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
}).then(({ count, size }) => {
  console.log(
    `Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`
  );
});
