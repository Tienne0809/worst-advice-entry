import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Deploy straight to production on Friday at 5 p.m. — testing first just delays the surprise for everyone.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line + "\n", "utf8");
console.log("Wrote entry to " + join(outputDir, "entry.txt"));
