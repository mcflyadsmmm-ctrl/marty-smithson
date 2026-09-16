# Marty Smithson

Personal site for Marty Smithson — Head of BI & Performance Marketing at Black Clover.

Live: [https://marty-smithson.pages.dev](https://marty-smithson.pages.dev) (Cloudflare Pages project `marty-smithson`)

## Visual system

A resume-extension portfolio. Not a blog, not a landing page.

The token brief lives in [`docs/design-tokens.md`](docs/design-tokens.md). Implement from that page.

- One theme end-to-end: cool ledger paper (`#d0dbd4`) · cool plates (`#e7eee9`) · ink (`#141a17`)
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
| `/` | Measurement/BI hero, Mcfly Analytics Shopify App LIVE desk, 10-name client wall, three cases |
| `/work` | LIVE desk, client wall, three cases |
| `/work/systems-fleet` | Black Clover measurement case — no internal diagrams |
| `/work/nutricost` | Nutricost — Advertising Data Scientist |
| `/work/mcfly` | Mcfly Analytics Shopify App — LIVE + client names |
| `/resume` | PDF pack chooser |
| `/contact` | Email |

`/approach`, `/evidence`, and `/method` 301 to `/`. `/work/black-clover` 301s to `/work/systems-fleet`.

## Facts

Do not invent lifts, ROAS, or titles. He reports to the Black Clover CEO. McFly Ads consulting title is Founder and Data Analytics Consultant.

Nutricost: Advertising Data Scientist, reported to the CMO. Organized a data portfolio for 13 unique sub-brands. Built the full warehouse and advertising data-science station for margins and COGS. Never use “helped.” Never use the Ketologic / Primaforce spend ramp.

Product name (locked): Mcfly Analytics Shopify App. LIVE at https://mcflyads.com. Do not call the product “McFly” or “McFly Ads”. McFly Ads is the consulting practice only. Do not lead the homepage with the product.

Education: Bachelor of Science — Emphasis: Data Analytics and Statistics (Utah Valley University, May 2025).

Resume PDFs live in `public/resumes/`. User-facing labels: Full resume / Measurement / Systems and analytics.

Ownership FINAL md5s (owned Nutricost verbs, already on main via #16). Helped-era `529fbf25` / `4d13437d` / `7605a9c0` are obsolete.

- MASTER `28e46f6afed043de3a84d2937412a201`
- SCIENCE `bf39d5feeef7d6631e8e907b905fea4d`
- OPERATOR `c074515643580a7e077087d0c55a6b28`

## Deploy

Cloudflare Pages project: `marty-smithson` → [https://marty-smithson.pages.dev](https://marty-smithson.pages.dev).

Framework: Next.js. Build: `npm run build`. No environment variables. Source of truth is this repo root — not a nested `/agent/.../site` copy.
