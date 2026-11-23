import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside an AI coding agent, written as a
// terse status-page line: everything is green except the demo itself.
const joke =
  "All systems operational. Demo: degraded — the agent is hot-patching it live while the client watches.";

// The gate counts Unicode code points, not bytes: [...joke] splits by
// code point. Refuse to ship an entry the gate would reject.
const codePoints = [...joke].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`joke is ${codePoints} code points, must be 1-280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
