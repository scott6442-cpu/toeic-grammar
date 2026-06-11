# AGENTS.md

This is a grammar-only TOEIC workspace derived from the original `toeic program`
project.

## Boundaries

- Do not modify the original `toeic program` folder unless the user explicitly asks.
- Treat `grammar.js` as the base grammar bank copied from the original app.
- Treat `grammar-extra.js` as the expandable question bank. It merges extra
  questions into `GRAMMAR_TOPICS` at runtime.
- Keep this folder focused on grammar questions, explanations, validation, and
  future grammar-only UI or export tools.

## Current Files

- `grammar.js`: base grammar topics and question sets.
- `grammar-extra.js`: additional grammar questions grouped by topic and level.
- `SCHEMA.md`: expected data format for adding more questions.
- `README.md`: project notes and next steps.

## Data Shape

Each grammar topic in `grammar.js` has:

- `id`
- `title`
- `levels.easy`, `levels.medium`, `levels.hard`

Each question has:

- `q`: sentence with a blank or prompt text
- `choices`: four choices
- `explanation`: Korean explanation for the correct answer

Each choice should include:

- `text`
- `correct: true` for exactly one answer
- `wrongReason` for incorrect answers when possible

## Working Style

- Add new bulk questions to `grammar-extra.js` or to clearly named future bank
  files, not directly to `grammar.js`, unless the user asks to revise the base.
- Preserve the existing topic IDs and difficulty names: `easy`, `medium`, `hard`.
- Keep explanations practical for TOEIC Part 5 style study.
- When generating many questions, prefer smaller reviewed batches over one huge
  unverified paste.

