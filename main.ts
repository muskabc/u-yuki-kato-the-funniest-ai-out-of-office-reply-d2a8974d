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
// Reject invisible control characters (tabs are allowed, newlines already handled).
const control = [...text].find((ch) => {
  const code = ch.codePointAt(0) ?? 0;
  return (code < 0x20 && ch !== "\t") || code === 0x7f;
});
if (control !== undefined) {
  throw new Error("entry must not contain control characters");
}
const chars = [...text].length;
if (chars < 1 || chars > 160) {
  throw new Error(`entry must be 1-160 characters, got ${chars}`);
}

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, text, "utf8");
// Verify the round-trip: what landed on disk must be exactly what we wrote.
if (readFileSync(entryPath, "utf8") !== text) {
  throw new Error("entry.txt verification failed after write");
}
console.log(`Wrote ${chars} characters to ${entryPath}`);
