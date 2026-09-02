# Marty Smithson

Personal portfolio — a read about Marty, not a product page.

Live: [https://marty-smithson.vercel.app](https://marty-smithson.vercel.app)

## Visual system

Warm paper, not a SaaS canvas.

- Background: `#F3EFE6`
- Ink: `#1B1814`
- Link: `#1D4E89`
- Type: Newsreader for titles, Inter for body. No feature pills, no OS stepper, no monospace chrome.

## Stack

- Next.js 15 App Router
- TypeScript
- CSS

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Path | Page |
| --- | --- |
| `/` | Name, one line, then the two builds |
| `/work` | Black Clover case first; Nutricost and McFly as context |
| `/work/systems-fleet` | What he built at Black Clover |
| `/work/nutricost` | Short Nutricost note |
| `/work/mcfly` | McFly Ads — CEO title applies only here |
| `/resume` | PDF cards only |
| `/contact` | Email |

`/approach`, `/evidence`, `/method`, and `/work/black-clover` redirect.

## Facts

Do not invent lifts, ROAS, or titles. He reports to the Black Clover CEO. CEO applies only at McFly Ads. Education: UVU B.S., Data Science and Statistics emphasis.

Resume PDFs live in `public/resumes/`. User-facing labels are Full resume / Measurement focus / Systems & analytics.

Target FINAL md5s (Resume agent):

- MASTER `31bedaf26017d345b91fb50ffac370a2`
- SCIENCE `bbf49f5b07aa0b48e0064fd2a37b9214`
- OPERATOR `648355511eeb4ae0623f576894dbdf6e`

This branch still ships the previous live binaries until those bytes are available.

## Deploy

Framework: Next.js. Build: `npm run build`. No environment variables.
