import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "All servers are down, including the ones I use to check on the servers. I do not know when they will be back, and I cannot check until they are.";

const MAX_CHARS = 160;

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (LINE.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  console.log(`wrote ${chars} characters to /output/entry.txt`);
}

main();
