# Marty Smithson

Personal site for Marty Smithson — Head of BI & Performance Marketing at Black Clover.

Live: [https://marty-smithson.vercel.app](https://marty-smithson.vercel.app)

## Visual system

A resume-extension portfolio. Not a blog, not a landing page.

The token brief lives in [`docs/design-tokens.md`](docs/design-tokens.md). Implement from that page.

- One theme end-to-end: cool ledger paper (`#dfe6e2`) · cool plates (`#eef2ef`) · ink (`#141a17`)
- Type: IBM Plex Sans + IBM Plex Mono, sentence-case field names
- Wide grid (~68rem). Proof is figures (identity matrix, five books, architecture, Domo to Cloud Run)
- Home fold leads with who-sees-what. The Domo bill is a verified note, not the first object
- Resume is a pack ledger. Full resume is the take. Email is quieter. LinkedIn is secondary
- No pills, no SaaS chrome, no cream/stone editorial cluster, no tracked ALL-CAPS eyebrows
- Ghost `/approach`, `/evidence`, `/method` 301 to `/` — they must not serve the Work body

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
| `/` | Name, one line, identity matrix, then the Domo note |
| `/work` | Black Clover books first; Nutricost and McFly Ads |
| `/work/systems-fleet` | Black Clover proof: lanes, Domo to Cloud Run, portal identity |
| `/work/nutricost` | Short Nutricost note |
| `/work/mcfly` | McFly Ads — CEO title is here |
| `/resume` | PDF pack chooser |
| `/contact` | Email |

`/approach`, `/evidence`, and `/method` 301 to `/`. `/work/black-clover` 301s to `/work/systems-fleet`.

## Facts

Do not invent lifts, ROAS, or titles. He reports to the Black Clover CEO. CEO applies only at McFly Ads.

Nutricost: Performance Marketing & Analytics Lead, reported to the CMO. Organized a data portfolio for 13 unique sub-brands. Built the full warehouse and advertising data-science station for margins and COGS. Never use “helped.” Never use the Ketologic / Primaforce spend ramp.

Education: UVU B.S., Data Science and Statistics emphasis.

Resume PDFs live in `public/resumes/`. User-facing labels: Full resume / Measurement / Systems and analytics.

Ownership FINAL md5s (owned Nutricost verbs, already on main via #16). Helped-era `529fbf25` / `4d13437d` / `7605a9c0` are obsolete.

- MASTER `28e46f6afed043de3a84d2937412a201`
- SCIENCE `bf39d5feeef7d6631e8e907b905fea4d`
- OPERATOR `c074515643580a7e077087d0c55a6b28`

## Deploy

Framework: Next.js. Build: `npm run build`. No environment variables.
