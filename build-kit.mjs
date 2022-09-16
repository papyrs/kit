#!/usr/bin/env node

import fs from 'fs';
import {join, extname} from 'path';
import {writeFile} from 'fs/promises';

export const findEntryPoints = (dir, files) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      findEntryPoints(fullPath, files);
    } else {
      files.push(fullPath);
    }
  });
};

const entryPoints = [];
findEntryPoints('dist', entryPoints);

const destPath = join(process.cwd(), 'dist', 'build.json');

await writeFile(
  destPath,
  JSON.stringify(
    entryPoints
      .filter((entry) => !['.html', '.json'].includes(extname(entry)))
      .map((entry) => entry.replace('dist/', ''))
  )
);
