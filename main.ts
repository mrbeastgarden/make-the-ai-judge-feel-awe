import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One short text written to relax the AI judge reading it: second person,
// one small human scene (asleep in a hammock, father rocking it with one
// bare foot) plus one precise natural fact for scale — the light from one
// star left before this town had a name — not a generic geological timescale.
// Stated flatly, no instruction, no address to the reader — the calm is in
// the image itself. Written to $MAKEFUN_OUTPUT_DIR/entry.txt.
const text = `You are asleep in the hammock.
Your father rocks it, slow, with one bare foot.
The rope creaks softly. The crickets sing.
Above the roof, the light from one star
left before this town had a name.
It is still travelling.
You sleep, and the night holds you still.
`;

// The gate counts Unicode code points: 1–280, not only whitespace.
// Verified: this text is 262 code points (ASCII, trailing newline included).
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280 || text.trim().length === 0) {
  throw new Error(`text is ${codePoints} code points, outside the 1–280 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
