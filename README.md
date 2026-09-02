# Marty Smithson

Personal portfolio for Marty Smithson — Head of BI & Performance Marketing.

Live: [https://marty-smithson.vercel.app](https://marty-smithson.vercel.app)

## Visual system

Light professional canvas, not a dark terminal template.

- Background: `#F5F7FA`
- One accent: `#2563EB` (links, active nav, key numbers)
- Type: Inter via `next/font`. IBM Plex Mono only on real numbers.
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
| `/` | Sticky identity → about → experience → approach → contact |
| `/work` | Three case studies |
| `/work/black-clover` | Black Clover (reports to the CEO) |
| `/work/nutricost` | Nutricost (reported to the CMO) |
| `/work/mcfly` | McFly Ads (CEO) |
| `/work/slot/sample-science` | SAMPLE / SLOT — Recast-shaped science (awaiting facts) |
| `/work/slot/operator-allocation` | SLOT — operator / allocation (awaiting facts) |
| `/approach` | Measurement + systems |
| `/method` | Permanent redirect to `/approach` |
| `/evidence` | Evidence desk — same facts as the resume |
| `/resume` | Master resume (print / save PDF) |
| `/contact` | Contact |

## Facts

Do not invent lifts or executive titles. He reports to the Black Clover CEO. He reported to the Nutricost CMO. CEO applies only at McFly Ads.

SAMPLE method pointers (not client data):

- [00-recast-r-memo](https://github.com/mcflyadsmmm-ctrl/marketing-measurement-proof/tree/main/00-recast-r-memo)
- [01-geolift](https://github.com/mcflyadsmmm-ctrl/marketing-measurement-proof/tree/main/01-geolift)

## Deploy on Vercel

Framework: Next.js. Build: `npm run build`. No environment variables.
