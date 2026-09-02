# Marty Smithson

Personal portfolio for Marty Smithson — Head of BI & Performance Marketing.

Live: [https://marty-smithson.vercel.app](https://marty-smithson.vercel.app)

This repo is the source of truth for a Next.js App Router rebuild. The previous Vercel project was deployed from Cursor CLI without a git link.

## Stack

- Next.js 15 App Router
- TypeScript
- CSS (editorial system — not a generic Tailwind landing page)
- `next/font`: Instrument Serif, Geist Sans, Geist Mono

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
| `/` | Narrative homepage: Signal → proof → work cards → origin → approach → evidence → roster → close |
| `/work` | Three case studies |
| `/work/black-clover` | Black Clover desk |
| `/work/nutricost` | Nutricost desk |
| `/work/mcfly` | McFly Ads |
| `/approach` | Measurement + systems (canonical) |
| `/method` | Permanent redirect to `/approach` |
| `/evidence` | Verified claim map |
| `/resume` | Master resume (print / save PDF) |
| `/resume.md` | Markdown download |
| `/resume.doc` | Word-compatible download for Workday |
| `/contact` | Contact |

## Facts

Copy, employers, metrics, brand names, and contact details match the live site. Do not invent lifts, clients, or graduation months.

Public SAMPLE method pointers (not client data):

- [marketing-measurement-proof](https://github.com/mcflyadsmmm-ctrl/marketing-measurement-proof)
- [00-recast-r-memo](https://github.com/mcflyadsmmm-ctrl/marketing-measurement-proof/tree/main/00-recast-r-memo)
- [01-geolift](https://github.com/mcflyadsmmm-ctrl/marketing-measurement-proof/tree/main/01-geolift)

## Deploy on Vercel

1. Import this GitHub repo into Vercel (or link the existing `marty-smithson` project).
2. Framework preset: Next.js. Build command: `npm run build`. Output: default.
3. No environment variables required.
4. Production domain stays `marty-smithson.vercel.app`.

Printable resume: open `/resume` and use **Print / save PDF**. Phone number is print-only.
