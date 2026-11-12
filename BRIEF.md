# Brief for case-writing agents (Tea-cher)

You are adding OCR A-Level Law (H418) cases to a revision site. Work in /home/claude/tea-cher.

## Read first (small)
1. SCHEMA.md - the data schema and writing rules (follow it exactly: fields, word limits, court codes, tag rules, accuracy rules).
2. data/taxonomy.js - valid `area` / `topic` / `sub` ids. Use only ids that exist there. Use `vt-undue` for undue influence.
3. The first ~40 lines of data/contract-2.js - the house style (double-quoted strings, one object per case).

## How to work
- Do NOT use the web. Write from your own legal knowledge, in your own words. Short, plain, student-friendly.
- Accuracy beats coverage. If you are not sure of a fact, leave it out. If unsure of a citation, use `cite: ""`. Never invent quotes, dates or holdings. If a case was overruled or superseded, say so. If you cannot write a case accurately, skip it and list it in your final report.
- Before writing a case, check its id is not already used: `grep -rl '"<id>"' data/`. Skip duplicates. A case belongs in ONE area only.
- The list you are given is in priority order, with a suggested sub-topic. Do the first ~30 you can do accurately. `key: true` only for headline cases an exam answer would be expected to cite; most additions are `key: false`.
- WRITE EARLY. Put about 8 cases per file, and write each file as soon as it is ready (e.g. data/tort-5.js, tort-6.js ...; use the next free number for your area - check `ls data`). Immediately run `node tools/validate.js data/<file>.js` and fix errors/warnings (word counts, short fields). Do not hold cases in your head waiting to write them all at once.
- `links` may only contain ids that exist in data/ (or that you have written). Omit or use [] if unsure.
- Finish by running `node tools/validate.js data/*.js --strict-links` and fix anything that is yours.
- Final report (max 8 lines): files written, number of cases, cases skipped and why, any cases whose details you are least sure of (so they can be double-checked). No other commentary.
