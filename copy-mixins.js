#!/usr/bin/env node

const { readFileSync } = require("fs");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { cp } = require("fs").promises;

(async () => {
  await cp(
    "/Users/daviddalbusco/projects/papyrs/papyrs/src/lib/themes/mixins",
    "./src/themes/mixins",
    {
      recursive: true,
    }
  );

  // Update path for scss import
  const _docScss = join(process.cwd(), "./src/themes/mixins/_doc.scss");
  const content = readFileSync(_docScss, "utf-8");
  await writeFile(
    _docScss,
    content.replace(/@papyrs\/ui/g, "../../../node_modules/@papyrs/ui")
  );
})();
