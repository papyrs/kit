#!/usr/bin/env node

import { findEntryPoints } from "./build-kit.mjs";
import { extname, join, basename } from "path";
import { readFileSync } from "fs";
import { createHash } from "crypto";
import { writeFile, readFile } from "fs/promises";

const entryPoints = [];
findEntryPoints("dist", entryPoints);

const htmlEntryPoints = entryPoints.filter((entry) =>
  [".html"].includes(extname(entry))
);

const indexHtmlEntryPoints = entryPoints.filter(
  (entry) =>
    ["index.html"].includes(basename(entry))
);

const computeHashes = (entry) => {
  console.log(entry);

  const indexHtml = readFileSync(join(process.cwd(), entry), "utf-8");
  const sw = /<script[\s\S]*?>([\s\S]*?)<\/script>/gm;

  const scriptHashes = [];

  let m;
  while ((m = sw.exec(indexHtml))) {
    const content = m[1];

    scriptHashes.push(
      `'sha256-${createHash("sha256").update(content).digest("base64")}'`
    );
  }

  return scriptHashes;
};

const scriptHashes = htmlEntryPoints.reduce(
  (acc, entry) => [...acc, ...computeHashes(entry)],
  []
);

const updateCSP = async ({ scriptHashes, entry }) => {
  const indexHtml = await readFile(join(process.cwd(), entry), "utf-8");

  await writeFile(
    entry,
    indexHtml.replace(
      "{{DECKDECKGO_EXTRA_SHAS}}",
      scriptHashes.map((sha256 ) => sha256).join(" ")
    ),
    "utf-8"
  );
};

const promises = indexHtmlEntryPoints.map((entry) =>
  updateCSP({ scriptHashes, entry })
);
await Promise.all(promises);
