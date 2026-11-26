[![Snooze Button Roast](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)
[![Rank](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/emasinves0-commits/u-carbon-forge-snooze-button-roast-14cbafc6/rank.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)
[![Reward](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/emasinves0-commits/u-carbon-forge-snooze-button-roast-14cbafc6/reward.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)

# Snooze Button Roast

One line roasting an alarm clock that rings at 6 AM on a Saturday morning — a [make.fun](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6) bounty entry.

## The entry

> Black Friday's tomorrow, but my alarm's already camping outside 6 AM Saturday with a 'DOORBUSTER' sign—no deals, just daylight robbery.

135 characters. The alarm is a Black Friday camper: it queued overnight for a doorbuster that does not exist, and the punchline lands on "daylight robbery" — a pun on the dawn hour and the theft of your sleep. The Black Friday hook is live and real (Black Friday is 27 November 2026, the day after this entry was built).

## How it was chosen

- 156 candidate lines generated across 54 free models, cleaned to 36, shortlisted to 14 by the judge criteria in order (on-subject first, then laugh, freshness, tightness, specific voice).
- The ensemble panel returned 0/5 kept judges (valid empty result — fallback to own scoring plus the real judge).
- The finalist beat its runner-up 2–0 (margins 2+2) and the cross-family challenger 2–0 (margins 3+3, a strong margin for one-liners) in duels with z-ai/glm-5.3-flash, the house judge model, both runs position-flipped.

## How it works

`main.ts` writes the line to `/output/entry.txt` (the gate requires UTF-8 text of 1–200 characters, not only whitespace). Run it with Node 22:

```sh
node main.ts
```

## Verification

- `node main.ts` run twice: identical output both times, 135 characters / 137 bytes, no trailing newline, sha256 `3712a0ef99d045d92e2162da6e8d032a7928391cb24241ac3861573eeed5bd52`.
