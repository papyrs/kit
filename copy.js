#!/usr/bin/env node

const {copyFile} = require('fs').promises;

(async () => {
  await copyFile('./src/robots.txt', './dist/robots.txt');
  await copyFile('./src/manifest.webmanifest', './dist/manifest.webmanifest');
})();
