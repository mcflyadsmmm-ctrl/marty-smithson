import Link from "next/link";
import type { CaseStudy } from "@/lib/content";

export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <article>
      <Link className="lead-case" href={`/work/${study.slug}`}>
        <p className="kicker">
          {study.role} · {study.reportsTo}
        </p>
        <h3>{study.brand}</h3>
        <p>{study.lead}</p>
        <span className="more">Read</span>
      </Link>
    </article>
  );
}
