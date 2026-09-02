import Link from "next/link";
import type { CaseSlug, CaseStudy } from "@/lib/content";

function caseMetrics(slug: CaseSlug): string[] {
  switch (slug) {
    case "black-clover":
      return ["$1M/month mix", "~$45M year", "18 months"];
    case "nutricost":
      return ["$2M/month mix", "$50 → $1,000/day", "7 months"];
    case "mcfly":
      return ["10 named brands", "6 years"];
    default: {
      const _exhaustive: never = slug;
      return _exhaustive;
    }
  }
}

export function CaseRow({ study }: { study: CaseStudy }) {
  const metrics = caseMetrics(study.slug);

  return (
    <article>
      <Link className="exp-row exp-row-slim" href={`/work/${study.slug}`}>
        <p className="exp-idx num">{study.index}</p>
        <div>
          <h3 className="exp-brand">{study.brand}</h3>
          <p className="exp-role">{study.role}</p>
          <p className="exp-meta">
            {study.reportsTo} · {study.dates}
          </p>
          <p className="exp-metrics">
            {metrics.map((metric) => (
              <span className="num" key={metric}>
                {metric}
              </span>
            ))}
          </p>
          <span className="more">Read case →</span>
        </div>
      </Link>
    </article>
  );
}
