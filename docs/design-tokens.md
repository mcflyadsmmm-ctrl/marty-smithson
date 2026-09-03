# Design tokens — ledger / identity matrix

One-page brief. Implement these tokens; do not restyle from taste.

## Reader

Head or director of analytics, or an AE screening decision-systems work, at a mid-market company (~$30–100M). They are deciding whether Marty can be trusted with company truth systems.

**Leave-with:** he builds isolated, fail-closed decision systems companies can trust.

**Stealth CTA:** Resume download is primary. Email is available and quieter. LinkedIn is secondary. No apply language.

## Why this system

The subject is books, writers, roles, and a warehouse that is not allowed to lie. The site should look like that: ruled paper, a matrix, a spine. It should not look like a cream editorial blog, a terracotta-serif magazine, a neon terminal, or a SaaS card kit.

Live (PR #19) used warm stone `#ecece8` and cream plates `#f7f7f4` — playbook tell #1. This pass leaves that cluster.

## Color

| Token | Value | Role |
| --- | --- | --- |
| `--paper` | `#d0dbd4` | Canvas. Cool ledger stock. Not warm stone `#ecece8`. |
| `--plate` | `#e7eee9` | Figures and packs. Cool sheet. Not cream `#f7f7f4`. |
| `--ink` | `#141a17` | Text, double-rules, warehouse spine. |
| `--mute` | `#465049` | Secondary sentences. |
| `--faint` | `#667068` | Field names only. |
| `--rule` | `#a8b4ac` | Ledger lines inside figures. |
| `--spine` | `#141a17` | Warehouse book. |
| `--spine-ink` | `#eef2ef` | Type on the spine. |
| `--take` | `#141a17` | Primary resume control. Paper type on ink. Not green. |

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
- Figures are sharp plates with a 1px rule. No radius, no shadow, no gradient.
- Matrices live inside a padded figure body. Rules must not escape the plate.
- Home fold: identity (who sees what) before the Domo cost note. Architecture and process lead; dollars remain as a verified footnote, not the first object.
- Resume is a pack ledger, not three equal cards over a void. Full resume is the take. The other two packs are lanes.
- One theme on every route.

## Motion and access

- `prefers-reduced-motion` kills smooth scroll and transitions.
- Focus is a 2px ink ring, 3px offset, visible on paper and on the spine.
- Hit targets 44px on nav, packs, and case jumps.
- Skip link to `#content`.

## Out of bounds

Pills, soft-shadow card kits, decorative gradients, tracked caps, job-hunt chrome, apply CTAs, fake product shots, Northline / AI demo work.
