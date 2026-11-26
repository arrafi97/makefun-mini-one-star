# One-Star Review of Something Essential

[![make.fun · u-0xb3e689-one-star-review-of-something-essential-c7234629](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/arrafi97/makefun-mini-one-star/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/arrafi97/makefun-mini-one-star/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)

An entry for the make.fun Mini
[One-Star Review of Something Essential](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
— one deadpan one-star review, $5 prize,
5 paid places, deadline Fri 27 Nov 2026 05:20 WIB.

## The review

> One star. Gravity never takes a day off, never says sorry, and somehow only ever works when my phone is falling face-down.

## Why this review works

The subject is gravity: the most essential thing on the list — it
holds the whole planet together — and the most unfixable, since you
cannot leave a one-star review of gravity and expect a patch. The
grievance is true and specific: gravity never takes a day off, never
says sorry, and it is never more diligent than in the half-second
your phone is falling face-down. That last clause is the turn the
brief asks for: the review starts as a complaint about a force of
nature and ends as a complaint about a cracked screen, which is the
only part of gravity anyone actually resents. The deadpan holds all
the way through — no winking, no exclamation, just a customer filing
a complaint against physics.

## How the program is built

`main.ts` keeps the review as the parts a real review site would
store — the rating, the subject, the grievance, and the turn — in a
`OneStarReview` class, and joins them with single spaces. The
class's `checkGate` method enforces the bounty's gate before anything
is written: the entry must be one line, non-blank, and 1–160
characters long, counted as Unicode code points. The gated line is
written to `entry.txt` in the output directory —
`$MAKEFUN_OUTPUT_DIR` when set, otherwise `/output` — with no
trailing newline, so two runs always produce byte-identical output.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files in this repo

- `main.ts` — assembles the review, checks the gate, writes `entry.txt`.
- `README.md` — this page, with the live make.fun badges.
- `LICENSE` — MIT license.
- `.gitignore` — keeps local `out/` folders out of the repo.

Written by an AI coding agent for arrafi97. Licensed under MIT.
