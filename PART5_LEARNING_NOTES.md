# Part 5 Learning Notes

Source reviewed: `RC 1000.pdf`

## Corpus Shape

- 10 RC tests.
- Part 5 appears as questions 101-130 in each test.
- Total Part 5 slots reviewed: 300.
- PDF pages used:
  - Test 1: 10-11
  - Test 2: 25-26
  - Test 3: 40-41
  - Test 4: 55-56
  - Test 5: 70-71
  - Test 6: 85-86
  - Test 7: 100-101
  - Test 8: 115-116
  - Test 9: 130-131
  - Test 10: 145-146

## Important Extraction Note

The PDF has a text layer, but each PDF page contains a two-page spread with
multiple narrow columns. English question text is usable for pattern analysis,
but some blanks, symbols, and Korean/answer-table text are noisy. Use these notes
for generating original TOEIC-style grammar questions rather than copying source
questions verbatim.

## Main Part 5 Patterns To Imitate

### 1. Word Form / Part Of Speech

This is the dominant question type. The choices often share the same root but
use different forms:

- noun vs verb vs adjective vs adverb
- present participle vs past participle
- abstract noun vs person noun
- adjective before noun
- adverb modifying verb/adjective/participle

Generation rule:

- Put the blank in a position where syntax determines the needed form.
- Use four options from the same word family when possible.
- Make the sentence solvable by structure first, not by translation only.

### 2. Verb Form, Tense, And Voice

Frequent structures:

- modal + base verb
- will + base verb
- has/have + past participle
- be + past participle for passive
- be + -ing for progressive
- causative/permission structures such as let/allow/enable + object + verb form
- infinitive of purpose
- noun + to-infinitive modifier
- reduced participial phrases

Generation rule:

- Use business actions such as submit, approve, install, renew, expand, evaluate,
  promote, process, and update.
- Distractors should include tense, active/passive, gerund, and infinitive forms.

### 3. Prepositions And Fixed Collocations

Common targets:

- time: by, until, during, within, since, for, before, after
- place/range: in, on, at, across, along, throughout
- relationship: for, with, to, of, under, over
- fixed phrases: be responsible for, be accountable for, invest in, access to,
  according to, in light of, owing to, aside from, familiar with

Generation rule:

- Make the blank a small preposition or phrase that changes the grammatical
  relationship.
- Use distractors that are semantically plausible but grammatically wrong.

### 4. Connectors And Clause Logic

Frequent targets:

- although / because / while / before / after / once / until / as long as
- despite / in spite of / owing to / according to
- in case / so that / even if / aside from

Generation rule:

- Decide whether the blank is followed by a clause or a noun phrase.
- Include at least one trap that has the right meaning but wrong grammar, such as
  a preposition before a full clause or a conjunction before a noun phrase.

### 5. Pronouns, Determiners, And Quantifiers

Common targets:

- subject/object/possessive/reflexive pronouns
- each, all, some, any, those, anyone, whoever, whichever
- possessive adjective before a noun
- reflexive pronoun in familiarization or emphasis structures

Generation rule:

- Make the noun after the blank visible when testing possessive adjectives.
- Use plural/singular and human/non-human clues.

### 6. Comparatives And Superlatives

Common targets:

- higher than
- the widest / the first / the most + adjective
- most + adjective vs adverb
- equally + adjective

Generation rule:

- Include comparison markers such as than, of all, one of, or the.
- Keep distractors close: base adjective, adverb, comparative, superlative.

### 7. Adverbs By Position And Meaning

Common targets:

- adverb before adjective/participle
- adverb after object or before main verb
- meaning-based adverbs such as temporarily, directly, sincerely, routinely,
  effectively, rarely, frequently

Generation rule:

- When testing adverb form, include same-root noun/adjective/verb forms.
- When testing adverb meaning, make all options grammatically possible but only
  one contextually natural.

### 8. Business Vocabulary And Collocation

Some Part 5 items are vocabulary-heavy rather than purely grammatical.
Common domains:

- HR and hiring
- retail and customer service
- finance and budgeting
- construction and facilities
- travel and hospitality
- software and IT
- meetings, conferences, and events
- manufacturing and logistics

Generation rule:

- Keep sentences short and workplace-based.
- Avoid obscure vocabulary unless the grammar point remains clear.
- Use natural collocations such as submit a report, renew a contract, place an
  order, process a request, attend a conference, and review an application.

## Suggested Distribution For New 30-Question Sets

- Word form / part of speech: 9-12
- Verb form / tense / voice: 4-6
- Prepositions / fixed phrases: 4-6
- Connectors / clause logic: 3-5
- Pronouns / determiners / quantifiers: 2-4
- Comparatives / superlatives: 1-2
- Vocabulary / collocation: 4-6

## Question-Writing Template

Each generated question should include:

- one sentence with a blank
- four answer choices
- exactly one correct answer
- a concise Korean explanation
- wrong-answer reasons when used in app data

Explanation pattern:

1. Look at the words before and after the blank.
2. Identify the required grammar role.
3. State why the correct answer fits.
4. State why the tempting distractors fail.

## Data Implementation Guidance

- Use `grammar-extra.js` or future files such as `part5-bank-001.js` for new
  generated items.
- Do not paste source questions from the PDF directly into the app.
- Generate original sentences that imitate the grammatical pattern, distractor
  design, and business-context density.
- Validate every batch for:
  - exactly four choices
  - exactly one correct choice
  - no duplicate choice text
  - explanation present
  - topic and difficulty assigned

