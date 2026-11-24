// make-judge-smile — one line about a small good thing that happened today.
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt, followed by
// a single trailing newline. Node 22 stdlib only; no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "This morning the bus driver held the door for an old man with a cane, then caught my eye in the mirror and winked, like we were in on the same small secret.";

// The gate requires 1 to 200 characters of real text; refuse to write
// anything that would fail it instead of emitting a bad entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
