# Marty Smithson

Personal portfolio for Marty Smithson — Head of BI & Performance Marketing.

Live: [https://marty-smithson.vercel.app](https://marty-smithson.vercel.app)

## Visual system

Light professional canvas, not a dark terminal template.

- Background: `#F7F9FC`
- One accent: `#2563EB` (links, active nav, key numbers)
- Type: Inter via `next/font`. Hierarchy by size and weight.
- No lime, no serif display, no monospace chrome, no fixed status bar, no live clock, no hero charts.

## Stack

- Next.js 15 App Router
- TypeScript
- CSS (Swiss / Brittany Chiang–style layout)

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Intro → experience rows → approach → evidence → contact |
| `/work` | Three case studies |
| `/work/black-clover` | Black Clover (reports to the CEO) |
| `/work/nutricost` | Nutricost (reported to the CMO) |
| `/work/mcfly` | McFly Ads (CEO) |
| `/approach` | Measurement + systems |
| `/method` | Permanent redirect to `/approach` |
| `/evidence` | Verified claim map |
| `/resume` | Master resume (print / save PDF) |
| `/contact` | Contact |

## Facts

Do not invent lifts or executive titles. He reports to the Black Clover CEO. He reported to the Nutricost CMO. CEO applies only at McFly Ads.

SAMPLE method pointers (not client data):

- [00-recast-r-memo](https://github.com/mcflyadsmmm-ctrl/marketing-measurement-proof/tree/main/00-recast-r-memo)
- [01-geolift](https://github.com/mcflyadsmmm-ctrl/marketing-measurement-proof/tree/main/01-geolift)

## Deploy on Vercel

Framework: Next.js. Build: `npm run build`. No environment variables.
