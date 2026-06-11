# TOEIC Grammar Workspace

This folder is a clean grammar-only workspace prepared from the existing
`toeic program` project.

The original app remains untouched. The copied files here are intended for
building a larger TOEIC grammar question bank.

## Included

- `grammar.js`: base grammar topics and original question data.
- `grammar-extra.js`: extra questions that merge into `GRAMMAR_TOPICS`.
- `index.html`: grammar-only Part 5 practice UI.
- `part5-bank.js`: 1,000 generated original TOEIC Part 5 questions.
- `SCHEMA.md`: format guide for adding more questions.
- `AGENTS.md`: Codex instructions for this folder.

## Recommended Next Steps

1. Open `index.html` directly in a browser.
2. Review the current topic IDs and levels in `grammar.js`.
3. Decide whether new questions should continue going into `grammar-extra.js`
   or be split into files such as `grammar-bank-part5-001.js`.
4. Add a small validation script before generating very large batches.
5. Keep generated questions grouped by topic and difficulty.

## Notes

The current structure is plain JavaScript and does not require a build step.
The grammar-only app loads `part5-bank.js` directly in the browser.
