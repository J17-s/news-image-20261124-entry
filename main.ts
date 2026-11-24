// Entry for the news-image-20261124 competition on make.fun.
// This program places the prepared news picture where the grader expects it.
// Run it with Node: it copies entry.png next to this file into the output folder.
// The destination folder can be set through MAKEFUN_OUTPUT_DIR.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const source = join(scriptDir, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

const sourceSize = statSync(source).size;
const targetSize = statSync(target).size;
if (sourceSize !== targetSize) {
  throw new Error(
    "Copy verification failed: source is " +
      sourceSize +
      " bytes but the copied file is " +
      targetSize +
      " bytes",
  );
}
