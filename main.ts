import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const raw = readFileSync(join(here, "line.txt"), "utf8");
const text = raw.replace(/\r\n?/g, "\n").replace(/\n$/, "");

if (text.length === 0 || text.trim().length === 0) {
  throw new Error("line.txt must not be blank");
}
if (text.includes("\n")) {
  throw new Error("line.txt must contain exactly one line");
}
const chars = [...text].length;
if (chars < 1 || chars > 160) {
  throw new Error(`entry must be 1-160 characters, got ${chars}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`Wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
