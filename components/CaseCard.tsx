import Link from "next/link";
import type { CaseStudy } from "@/lib/content";

export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <article className="case-card-wrap">
      <Link className="case-card" href={`/work/${study.slug}`}>
        <p className="case-idx label">{study.index}</p>
        <div>
          <p className="case-role">{study.role}</p>
          <p className="case-meta label">
            {study.datesShort} · {study.reportsTo}
          </p>
        </div>
        <div className="case-body">
          <h3 className="case-brand">{study.brand}</h3>
          <p className="note tight">
            {study.headline}
          </p>
          <div className="case-story">
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
          <div className="case-foot">
            <p className="case-stat label">{study.stat}</p>
            <span className="more label">Read →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
