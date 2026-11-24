import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

// Two-Sentence Horror entry (u-suroto-two-sentence-horror-acea9253).
// Exactly two sentences, 104 characters, no trailing newline.
// Entry verified: exactly 2 sentences, 104 chars, 1-400 char gate passes.
const ENTRY =
  "My blind grandfather gently traced my smile. He whispered that my teeth had once belonged to his mother.";

const repoRoot = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(repoRoot, "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
