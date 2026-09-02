# Marty Smithson

Personal portfolio for Marty Smithson — Head of BI & Performance Marketing.

Live: [https://marty-smithson.vercel.app](https://marty-smithson.vercel.app)

## Visual system

Light professional canvas, not a dark terminal template.

- Background: `#F5F7FA`
- One accent: `#2563EB` (links, active nav, key numbers)
- Type: Inter via `next/font` (`display: optional`, `adjustFontFallback`). IBM Plex Mono only on real numbers. CSS stack uses the variable, not a literal `"Inter"`.
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
| `/` | Sentence-led home → about → experience → approach → contact |
| `/work` | Three case studies |
| `/work/black-clover` | Black Clover (reports to the CEO) |
| `/work/nutricost` | Nutricost (reported to the CMO) |
| `/work/mcfly` | McFly Ads (CEO) |
| `/approach` | Measurement + systems |
| `/method` | Permanent redirect to `/approach` |
| `/evidence` | How the mix call ships — SAMPLE measurement → decision → budget |
| `/resume` | Scan + pack PDFs (`/resumes/Marty_Smithson_Resume_{MASTER,SCIENCE,OPERATOR}.pdf`) |
| `/contact` | Dense contact strip |

## Facts

Do not invent lifts or executive titles. He reports to the Black Clover CEO. He reported to the Nutricost CMO. CEO applies only at McFly Ads.

SAMPLE method pointers (not client data):

- [SAMPLE Recast memo](https://github.com/mcflyadsmmm-ctrl/marketing-measurement-proof/tree/main/00-recast-r-memo)
- [SAMPLE GeoLift](https://github.com/mcflyadsmmm-ctrl/marketing-measurement-proof/tree/main/01-geolift)
- [SAMPLE measurement repo](https://github.com/mcflyadsmmm-ctrl/marketing-measurement-proof)

Resume pack PDFs (parent CLI drops binaries):

- `/resumes/Marty_Smithson_Resume_MASTER.pdf`
- `/resumes/Marty_Smithson_Resume_SCIENCE.pdf`
- `/resumes/Marty_Smithson_Resume_OPERATOR.pdf`

## Deploy on Vercel

Framework: Next.js. Build: `npm run build`. No environment variables.
