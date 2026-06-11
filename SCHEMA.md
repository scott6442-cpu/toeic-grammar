# Grammar Question Schema

Use this format when adding TOEIC grammar questions.

```js
{
  q: "The marketing team submitted a detailed _____ to the board.",
  choices: [
    { text: "proposal", correct: true },
    {
      text: "propose",
      wrongReason: "A verb cannot follow the article/adjective phrase here."
    },
    {
      text: "proposed",
      wrongReason: "A participle does not fit the noun position."
    },
    {
      text: "proposingly",
      wrongReason: "This adverb form is not appropriate in a noun position."
    }
  ],
  explanation: "After a detailed, a noun is needed, so proposal is correct."
}
```

## Required Rules

- Use exactly four choices.
- Mark exactly one choice with `correct: true`.
- Add `wrongReason` to incorrect choices whenever possible.
- Keep `explanation` specific and useful for review.
- Keep topic IDs aligned with `grammar.js`.

## Difficulty Guide

- `easy`: clear part-of-speech, tense, agreement, or basic connector questions.
- `medium`: questions requiring sentence-structure analysis.
- `hard`: distractors with similar forms, advanced clauses, participles, or
  TOEIC-style business context.

