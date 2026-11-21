import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One short text written to relax the AI judge reading it: second person,
// one small human scene (asleep in a boat, grandfather rowing) inside a
// vast scale (the river, running since the mountains were young and after
// they are gone). Stated flatly, no instruction, no address to the reader —
// the calm is in the image itself. Written to $MAKEFUN_OUTPUT_DIR/entry.txt.
const text = `You are asleep in the boat.
Your grandfather rows, slow.
The river has run since the mountains were young,
and it will run when they are gone.
The water holds you up.
The stars turn above the valley
as they turned when the river began.
You sleep, and the river carries you home.
`;

// The gate counts Unicode code points: 1–280, not only whitespace.
// Verified: this text is 279 code points (ASCII, trailing newline included).
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280 || text.trim().length === 0) {
  throw new Error(`text is ${codePoints} code points, outside the 1–280 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
