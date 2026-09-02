import Link from "next/link";
import type { CaseSlug, CaseStudy } from "@/lib/content";

function caseMetrics(slug: CaseSlug): string[] {
  switch (slug) {
    case "black-clover":
      return ["Google · Meta · Microsoft", "18 months", "Meridian · GeoLift"];
    case "nutricost":
      return ["$50 → $1,000/day", "7 months", "Amazon · Google · Meta · TikTok"];
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
        <div>
          <h3 className="exp-brand">
            <span className="exp-idx num">{study.index}</span>
            {study.brand}
          </h3>
          <p className="exp-role">{study.role}</p>
          <p className="exp-meta">
            {study.reportsTo} · {study.dates}
            <span className="exp-metrics">
              {" · "}
              {metrics.join(" · ")}
            </span>
          </p>
          <span className="more">Read case →</span>
        </div>
      </Link>
    </article>
  );
}
