import Link from "next/link";
import type { CaseStudy } from "@/lib/content";

export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <article>
      <Link className="exp-row" href={`/work/${study.slug}`}>
        <div>
          <h3 className="exp-brand">
            <span className="exp-idx num">{study.index}</span>
            {study.brand}
          </h3>
          <p className="exp-role">{study.role}</p>
          <p className="exp-meta">
            {study.reportsTo} · {study.dates} · {study.stat}
          </p>
          <div className="exp-story">
            <div>
              <h3>Problem</h3>
              <p>{study.problem}</p>
            </div>
            <div>
              <h3>Approach</h3>
              <p>{study.approach}</p>
            </div>
            <div>
              <h3>Outcome</h3>
              <p>{study.outcome}</p>
            </div>
          </div>
          <span className="more">Read case →</span>
        </div>
      </Link>
    </article>
  );
}
