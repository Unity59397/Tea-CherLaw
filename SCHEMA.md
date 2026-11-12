# Tea-cher case data: schema and writing rules

Audience: A-Level students revising OCR Law (H418). Content is shown on flashcards and in a case detail panel.

## File format

Each data file is plain JS that appends to one global array (so files can be loaded in any order):

```js
window.TC_CASES = window.TC_CASES || [];
window.TC_CASES.push(
  {
    id: 'donoghue-v-stevenson-1932',
    name: 'Donoghue v Stevenson',
    cite: '[1932] AC 562',
    year: 1932,
    court: 'HL',
    area: 'tort',
    topic: 'to-negligence',
    sub: 'ng-duty',
    key: true,
    tags: ['Neighbour principle', 'Product liability'],
    gist: 'A woman drinks ginger beer from an opaque bottle containing a decomposed snail and becomes ill.',
    principle: 'A manufacturer owes a duty of care to the ultimate consumer of its products; you must take reasonable care not to harm your neighbour.',
    facts: '...',
    held: '...',
    significance: '...',
    links: ['caparo-v-dickman-1990']
  },
  // more cases...
);
```

## Fields

| field | rule |
|---|---|
| `id` | kebab-case of the name plus year, unique across ALL data files (e.g. `r-v-miller-1983`). If two cases would clash, add a disambiguating word. |
| `name` | Short case name in standard form: `Donoghue v Stevenson`, `R v Brown`, `R (Miller) v Prime Minister`, `Handyside v United Kingdom`. No italics markup. Use `Re ...` for Re cases. |
| `cite` | Official citation ONLY if you are sure of it (e.g. `[1932] AC 562`, `[2018] UKSC 4`). Otherwise give the court-and-year form such as `(1884) 14 QBD 273` only if sure, else an empty string. Never guess a page or paragraph number. |
| `year` | Year of the decision (number). |
| `court` | One of: `UKSC`, `HL`, `PC`, `CA`, `HC`, `DC`, `CCt`, `EAT`, `ECtHR`, `CJEU`, `Hist` (use `Hist` only for pre-1875 courts). `DC` = Divisional Court / Queen's or King's Bench Divisional Court / Court for Crown Cases Reserved. |
| `area`, `topic`, `sub` | Ids from `data/taxonomy.js`. `topic` must belong to `area`, `sub` to `topic`. Exactly one primary home per case; use `tags` and `links` for the rest. |
| `key` | `true` for the headline cases every student should know for this sub-topic (roughly one in three cases). Otherwise `false`. |
| `tags` | 1 to 5 short labels for shared traits students can search and group by: the statute (`Theft Act 1968`), a doctrine (`Thin skull rule`), the kind of party (`Children`, `Employer`, `Police`), the status (`Overruled`, `Superseded by statute`, `Obiter`, `Dissent`), the era (`Post-Brexit`) etc. Reuse the same wording for the same trait across cases. |
| `gist` | The facts in ONE sentence of at most 35 words, written as a scenario with no case name and no legal conclusion (it is the card clue). |
| `principle` | The rule of law the case stands for, one or two sentences, at most 40 words. |
| `facts` | What happened, at most 85 words. |
| `held` | What the court decided and the key reasoning, at most 85 words. Say which court if it matters (for example, the Court of Appeal reversed the first instance decision). |
| `significance` | Why it matters, how it is used in essays, criticisms, links to other cases or statutes, whether it was later overruled or reformed. At most 75 words. |
| `links` | Optional array of ids of closely related cases in any file (leave out an id if you are not sure the case is in the dataset; the validator warns on unknown ids while files are being written). |

## Writing rules (accuracy first)

1. Only include a case if you are confident it exists, that you have its name and year right, and that you can state its facts and decision correctly. Leave a case out rather than guess.
2. Never invent quotations. Do not quote judges unless the wording is very famous and you are certain of it.
3. If you are unsure of a detail (an amount, a judge, a date), leave that detail out rather than guess.
4. Say plainly when a case has been overruled, reversed, distinguished, limited or replaced by statute, and name what replaced it.
5. British English. Plain, direct language that a 17-year-old can follow. No emoji. No filler such as "it is worth noting".
6. State what the law is, not marketing. Avoid the em-dash as a stylistic aside.
7. Stay inside the OCR H418 specification content (see the topic list in `data/taxonomy.js`). Do not add topics the spec does not cover.
8. A case belongs to exactly one fork/area. Do not write cases that another area has been assigned (see your brief). Use `links` to point at them instead.
9. Do not copy text from textbooks or websites. Write your own wording.
10. Keep to the word limits. Short and correct beats long and risky.

## Validation

`node tools/validate.js data/<your-file>.js` checks the schema (taxonomy ids, word counts, required fields, duplicate ids). Fix every ERROR. Fix WARNINGs about word counts where practical. Unknown `links` are warnings only until all files exist.
