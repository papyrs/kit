#!/usr/bin/env node

import { findEntryPoints } from "./build-kit.mjs";
import { extname, join } from "path";
import {readFile, rename, writeFile} from "fs/promises";

/**
 * Post build for Astro for backwards compatibility reason.
 * Fix https://github.com/withastro/astro/pull/5353#issuecomment-1311530840
 */

const entryPoints = [];
findEntryPoints("dist", entryPoints);

const htmlEntryPoints = entryPoints.filter((entry) =>
    [".html"].includes(extname(entry))
);

const renameCssFile = () => rename(join("dist", "assets", "d-index-1.css"), join("dist", "assets", "d-index-index.css"));
await renameCssFile();

const updateCssLink = async (entry) => {
    const indexHtml = await readFile(join(process.cwd(), entry), "utf-8");
    await writeFile(
        entry,
        indexHtml.replace(
            "/assets/d-index-1.css",
            "/assets/d-index-index.css"
        ),
        "utf-8"
    );
};

const promises = htmlEntryPoints.map(updateCssLink);
await Promise.all(promises);