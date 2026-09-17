# Marty Smithson

Personal site for Marty Smithson — marketing analytics and measurement. Head of BI & Performance Marketing at Black Clover.

Live: [https://marty-smithson.pages.dev](https://marty-smithson.pages.dev) (Cloudflare Pages project `marty-smithson`)

## Visual system

A resume-extension portfolio. Not a blog, not a landing page, not an architecture poem.

The token brief lives in [`docs/design-tokens.md`](docs/design-tokens.md). Implement from that page.

- One theme end-to-end: cool ledger paper (`#d0dbd4`) · cool plates (`#e7eee9`) · ink (`#141a17`)
- Type: IBM Plex Sans + IBM Plex Mono, sentence-case field names
- Wide grid (~68rem). Home fold is measurement hero → LIVE desk → ten-name client wall → three cases
- One spend headline: $25M+ in career-managed ad spend
- Resume is a pack ledger. Full resume is the take. Email, LinkedIn, and the PDF sit on every page
- No pills, no SaaS chrome, no cream/stone editorial cluster, no tracked ALL-CAPS eyebrows, no sample architecture diagrams
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

```bash
npm test          # content / title / client / PDF MD5 locks
npm run build
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Marketing analytics / measurement hero, Mcfly Analytics Shopify App LIVE desk, 10-name client wall, three cases |
| `/work` | LIVE desk, client wall, three cases |
| `/work/systems-fleet` | Black Clover measurement case — Domo→Cloud Run as support |
| `/work/nutricost` | Nutricost — Advertising Data Scientist |
| `/work/mcfly` | Mcfly Analytics Shopify App — LIVE + client names |
| `/resume` | HTML resume + PDF pack chooser |
| `/contact` | Email |

`/approach`, `/evidence`, and `/method` 301 to `/`. `/work/black-clover` 301s to `/work/systems-fleet`.

## Facts

Do not invent lifts, ROAS, or titles. He reports to the Black Clover CEO. McFly Ads consulting title is Founder and Data Analytics Consultant.

Nutricost: Advertising Data Scientist, reported to the CMO. Organized a data portfolio for 13 unique sub-brands. Built the full warehouse and advertising data-science station for margins and COGS. Never use “helped.” Never use the Ketologic / Primaforce spend ramp.

Product name (locked): Mcfly Analytics Shopify App. LIVE at https://mcflyads.com. Do not call the product “McFly” or “McFly Ads”. McFly Ads is the consulting practice only.

Education: Bachelor of Science — Emphasis: Data Analytics and Statistics (Utah Valley University, May 2025).

One spend headline: $25M+ in career-managed ad spend. Do not invent $30M.

Resume PDFs live in `public/resumes/`. User-facing labels: Full resume / Measurement / Systems and analytics.

Ownership FINAL md5s (owned Nutricost verbs, already on main via #16). Helped-era `529fbf25` / `4d13437d` / `7605a9c0` are obsolete.

- MASTER `28e46f6afed043de3a84d2937412a201`
- SCIENCE `bf39d5feeef7d6631e8e907b905fea4d`
- OPERATOR `c074515643580a7e077087d0c55a6b28`

## Deploy

Cloudflare Pages project: `marty-smithson` → [https://marty-smithson.pages.dev](https://marty-smithson.pages.dev).

Framework preset: **Next.js**. Build command: `npm run build`. Output: Next.js default (do not switch this project to a static `out/` export). Node 20+. No environment variables. Source of truth is this repo root — not a nested `/agent/.../site` copy.

Vercel, if it still has the alias, should 308 to the Pages URL. Do not change user-facing copy to make a host happy.

`wrangler.toml` names the Pages project. A Git-connected Pages project does not need OpenNext in this repo unless Cloudflare’s Next adapter starts failing the production build — if that happens, add `@opennextjs/cloudflare` in a dedicated deploy PR and keep messaging locks untouched.
