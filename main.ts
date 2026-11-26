// Snooze Button Roast — make.fun entry u-carbon-forge-snooze-button-roast-14cbafc6
// One line roasting an alarm clock that rings at 6 AM on a Saturday morning.
// The program writes that line to /output/entry.txt for the sealed gate scorer
// (UTF-8 text, 1 to 200 characters, not only whitespace) and the house judge.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Black Friday's tomorrow, but my alarm's already camping outside 6 AM Saturday with a 'DOORBUSTER' sign\u2014no deals, just daylight robbery.";

const MAX_CHARS = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  validateEntry(ENTRY);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
}

main();
