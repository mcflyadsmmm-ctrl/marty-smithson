import Link from "next/link";
import type { CaseSlug, CaseStudy } from "@/lib/content";

function caseChips(slug: CaseSlug): string[] {
  switch (slug) {
    case "black-clover":
      return ["Google · Meta · Microsoft", "18 months"];
    case "nutricost":
      return ["Amazon · Google · Meta · TikTok", "7 months"];
    case "mcfly":
      return ["10 named brands", "6 years"];
    default: {
      const _exhaustive: never = slug;
      return _exhaustive;
    }
  }
}

export function CaseRow({ study }: { study: CaseStudy }) {
  const chips = caseChips(study.slug);

  return (
    <article>
      <Link className="exp-row exp-row-slim" href={`/work/${study.slug}`}>
        <div>
          <h3 className="exp-brand">
            <span className="exp-idx num">{study.index}</span>
            {study.brand}
          </h3>
          <p className="exp-role">{study.role}</p>
          <p className="exp-meta">
            {study.reportsTo} · {study.dates}
          </p>
          <ul className="metric-chips">
            {chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
          <span className="more">Read case →</span>
        </div>
      </Link>
    </article>
  );
}
