# Design tokens — ledger / identity matrix

One-page brief. Implement these tokens; do not restyle from taste.

## Reader

A hiring manager or recruiter screening a $150k+ marketing analytics / measurement seat. They need a person, a live desk, named brands, and three cases — not an architecture poem.

**Leave-with:** he runs mix models, attribution, incrementality, and cash MER, and he has a live Shopify measurement product.

**Stealth CTA:** Email, LinkedIn, and the resume PDF sit on every page. No apply language.

## Why this system

The subject is marketing analytics and measurement. The site should look like a personal ledger: ruled paper, named brands, a live desk. It should not look like a cream editorial blog, a terracotta-serif magazine, a neon terminal, a SaaS card kit, or a sample architecture diagram.

Live (PR #19) used warm stone `#ecece8` and cream plates `#f7f7f4` — playbook tell #1. This pass leaves that cluster.

## Color

| Token | Value | Role |
| --- | --- | --- |
| `--paper` | `#e4eee7` | Canvas. Cool sage, brighter than the old ledger stock. Not warm stone `#ecece8`. |
| `--plate` | `#f7fbf8` | Cards and desks. Near-white sheet. Not cream `#f7f7f4`. |
| `--ink` | `#102018` | Text. |
| `--mute` | `#3d4f45` | Secondary sentences. |
| `--faint` | `#5c6e64` | Field names only. |
| `--rule` | `#c5d4cb` | Card edges. |
| `--accent` | `#1b6b4a` | Live marks, selected chips, primary take. |
| `--sample` | `#b45309` | SAMPLE mark only. |
| `--take` | `#1b6b4a` | Primary control. Paper type on pine. |

Print inverts to white paper / black ink. No dark-mode skin.

## Type

IBM Plex Sans (400/500) and IBM Plex Mono (400/500), via `next/font`. Systems face, not a display serif.

- Body 17px / 1.55. Mobile 16px.
- Titles: weight 500, tracking about `-0.03em`. Not poster-tight.
- Field names (`.field`): mono, ~0.78rem, sentence case, no tracking, no uppercase.
- No ALL-CAPS eyebrows. No middle-dot chrome strings. No em-dash fragment labels. No “→” on links.

## Layout

- Measure `--page: 68rem`. Gutter `1.75rem` / `1.15rem` on small screens.
- Header sits on paper. Double hairline under it (ledger total), not a dark app bar.
- Figures are cards: 12px radius, light lift, hover. Pine accent on the live take. Copper SAMPLE mark.
- Matrices live inside a padded figure body. Rules must not escape the plate.
- Home fold: short identity, then the Harbor Home Co SAMPLE desk with a big Open live SAMPLE desk CTA to mcflyads.com/demo. Other desks (cash MER, incrementality, Nutricost) sit under that. Client wall after. Thin case jumps. One spend headline ($25M+).
- Resume is a pack ledger, not three equal cards over a void. Full resume is the take. The other two packs are lanes.
- One theme on every route.

## Motion and access

- `prefers-reduced-motion` kills smooth scroll and transitions.
- Focus is a 2px ink ring, 3px offset, visible on paper and on the spine.
- Hit targets 44px on nav, packs, and case jumps.
- Skip link to `#content`.

## Out of bounds

Pills, soft-shadow card kits, decorative gradients, tracked caps, job-hunt chrome, apply CTAs, fake product shots, Northline / AI demo work.
