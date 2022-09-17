#!/usr/bin/env node

import { readdirSync, readFileSync, lstatSync } from "fs";
import { join, extname } from "path";
import { writeFile } from "fs/promises";
import { createHash } from "crypto";

export const findEntryPoints = (dir, files) => {
  readdirSync(dir).forEach((file) => {
    const fullPath = join(dir, file);
    if (lstatSync(fullPath).isDirectory()) {
      findEntryPoints(fullPath, files);
    } else {
      files.push(fullPath);
    }
  });
};

const entryPoints = [];
findEntryPoints("dist", entryPoints);

const destPath = join(process.cwd(), "dist", "build.json");

const toEntry = (entry) => {
  const content = readFileSync(join(process.cwd(), entry), "utf-8");

  return {
    fullPath: entry.replace("dist/", ""),
    sha256: createHash("sha256").update(content).digest("base64"),
  };
};

await writeFile(
  destPath,
  JSON.stringify(
    entryPoints
      .filter((entry) => ![".html", ".json"].includes(extname(entry)))
      .map(toEntry)
  )
);
