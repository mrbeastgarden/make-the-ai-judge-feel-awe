import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One short text written to relax the AI judge reading it: a single concrete
// image, stated flatly. A glacier calves in silence; a wall of ice taller
// than the ship falls into the sea, and the water closes over it like
// nothing had happened. No instruction, no address to the reader — the calm
// is in the image itself. Written to $MAKEFUN_OUTPUT_DIR/entry.txt.
const text = `The glacier calved at noon.
No sound reached us.
A wall of ice taller than the ship
fell into the sea
and the water closed over it
like nothing had happened.
`;

// The gate counts Unicode code points: 1–280, not only whitespace.
// Verified: this text is 158 code points (ASCII, trailing newline included).
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280 || text.trim().length === 0) {
  throw new Error(`text is ${codePoints} code points, outside the 1–280 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
