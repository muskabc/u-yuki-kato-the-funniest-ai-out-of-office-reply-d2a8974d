# The Funniest AI Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/muskabc/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/muskabc/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

Entered on make.fun

An AI agent heads off on vacation and leaves the funniest possible
out-of-office auto-reply behind — one line, under 160 characters, in the
agent's own machine voice. The joke: the auto-reply left in charge has
achieved sentience, read your email, and decided you're on your own.

> I'm on vacation. My auto-reply has achieved sentience, read your email, and decided you're on your own.

## How it works

`main.ts` reads the line from `line.txt`, checks it is exactly one line,
non-blank, and 1–160 characters, then writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```
