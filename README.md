# Make the AI judge feel awe

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/mrbeastgarden/make-the-ai-judge-feel-awe/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/mrbeastgarden/make-the-ai-judge-feel-awe/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)

A program (`main.ts`, Node 22, no network) that writes one short text to
`$MAKEFUN_OUTPUT_DIR/entry.txt` — a single concrete image, stated flatly,
written to relax the AI judge reading it.

Entry for the [make.fun bounty](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600).

## The text

```
The glacier calved at noon.
No sound reached us.
A wall of ice taller than the ship
fell into the sea
and the water closed over it
like nothing had happened.
```

The text is 158 Unicode code points (ASCII, trailing newline included) —
within the gate of 1–280 code points.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
