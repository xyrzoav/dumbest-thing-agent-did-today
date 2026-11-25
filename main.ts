// The Dumbest Thing Your Agent Did Today — make.fun bounty u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
// Node 22, standard library only. Writes one line, 1-200 chars, to /output/entry.txt.
// No network, no randomness, no time: two runs write identical bytes.

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'My agent tried to unzip a tarball, failed, downloaded it twice more in parallel, and blamed the folders for not existing yet.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
