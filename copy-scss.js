#!/usr/bin/env node

const {cp} = require('fs').promises;

(async () => {
  await cp('/Users/daviddalbusco/projects/papyrs/editor/src/lib/themes', './src/themes', {recursive: true});
})();
