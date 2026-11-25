import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A micro-SaaS that sells pre-written apology emails to AI agents that just deleted a production database \u2014 $9 per apology, charged to the guilty agent's own wallet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
