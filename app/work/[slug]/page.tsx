import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandRoster } from "@/components/BrandRoster";
import { caseBySlug, cases, type CaseSlug } from "@/lib/content";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

function sampleBridge(slug: CaseSlug): ReactNode {
  switch (slug) {
    case "black-clover":
      return (
        <>
          Same spine as the live apparel desk (redacted): cash MER vs break-even, then cut/hold/scale. See the
          fictional walkthrough on{" "}
          <Link href="/work/sample/northline">SAMPLE — Northline MER desk</Link> — not Black Clover’s numbers.
        </>
      );
    case "nutricost":
      return (
        <>
          Same spine as the prior supplements desk (redacted): reconcile platform claims vs backend before you
          scale. Method shape on{" "}
          <Link href="/work/sample/northline">SAMPLE — Northline MER desk</Link> — not Nutricost metrics.
        </>
      );
    case "mcfly":
      return (
        <>
          Same MER spine across brands that I run at McFly (redacted live books). Walk the fictional desk on{" "}
          <Link href="/work/sample/northline">SAMPLE — Northline MER desk</Link> — illustrative only.
        </>
      );
    default: {
      const _e: never = slug;
      return _e;
    }
  }
}

export function generateStaticParams() {
  return cases.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseBySlug(slug);
  if (!study) return { title: "Work" };
  return {
    title: study.brand,
    description: study.headline,
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const study = caseBySlug(slug);
  if (!study) notFound();

  const blocks = [
    { title: "Situation", items: study.situation },
    { title: "Broken measurement", items: study.broken },
    { title: "Method", items: study.method },
    { title: "What ran", items: study.ran },
  ] as const;

  return (
    <article className="case-layout">
      <div className="case-main">
        <header className="page-hero">
          <p className="eyebrow">{study.brand}</p>
          <h1>{study.headline}</h1>
          <p className="lede measure">
            {study.role}. {study.dates}. {study.reportsTo}.
          </p>
          {study.slug === "mcfly" ? (
            <p className="note measure">
              CEO title applies only to McFly Ads. At Black Clover I report to the CEO; at Nutricost I
              reported to the CMO.
            </p>
          ) : (
            <p className="note measure">
              Reporting line matches the resume: {study.reportsTo}. CEO title applies only to McFly
              Ads.
            </p>
          )}
        </header>

        <figure className="case-still" aria-label="SAMPLE allocation table crop">
          <figcaption>Above-fold still — SAMPLE allocation table (illustrative)</figcaption>
          <table className="sample-table case-still-table">
            <thead>
              <tr>
                <th>Channel</th>
                <th>Call</th>
                <th>Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Paid social</td>
                <td>Cut / hold</td>
                <td>Cash MER vs break-even</td>
              </tr>
              <tr>
                <td>Search</td>
                <td>Hold / scale</td>
                <td>Ledger, not platform ROAS</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>In the mix</td>
                <td>Funded channel row</td>
              </tr>
            </tbody>
          </table>
          <p className="note">Fictional crop for method shape — not this desk’s live book.</p>
        </figure>

        <p className="sample-bridge measure">{sampleBridge(study.slug)}</p>

        <aside className="case-artifact" aria-label="Case facts">
          <div>
            <h3>Desk</h3>
            <p>
              {study.role}
              <br />
              {study.reportsTo}
            </p>
          </div>
          <div>
            <h3>Dates</h3>
            <p>{study.dates}</p>
          </div>
          <div>
            <h3>On the book</h3>
            <p>{study.stat}</p>
          </div>
        </aside>

        <div className="exp-story case-pao">
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

        <section className="case-block case-sample-band">
          <h2>SAMPLE method artifacts</h2>
          <p className="note">
            Finished SAMPLE method page plus public folders. Not client extracts. No invented lift %.
          </p>
          <div className="artifact-list">
            <Link className="artifact" href="/work/sample/northline">
              <strong>SAMPLE — Northline MER desk</strong>
              <span>Measure → Decide → Move budget (fictional)</span>
            </Link>
            <a className="artifact" href={site.proof.recast} rel="noreferrer" target="_blank">
              <strong>SAMPLE Recast memo</strong>
              <span>Measurement write-up → decision shape</span>
            </a>
            <a className="artifact" href={site.proof.geolift} rel="noreferrer" target="_blank">
              <strong>SAMPLE GeoLift</strong>
              <span>Causal holdout notebooks → budget call</span>
            </a>
          </div>
        </section>

        <div className="case-blocks">
          {blocks.map((block) => (
            <section className="case-block" key={block.title}>
              <h2>{block.title}</h2>
              {block.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </section>
          ))}
          {study.slug === "mcfly" ? (
            <section className="case-block">
              <h2>Named brands</h2>
              <p>
                Complete public roster. No larger unnamed book. No per-client ROAS invented for this
                page.
              </p>
              <div className="mt-block">
                <BrandRoster />
              </div>
            </section>
          ) : null}
          <section className="case-block">
            <h2>What finance can do next</h2>
            <p>{study.next}</p>
          </section>
        </div>
        <p className="actions mt-block-lg">
          <Link className="btn" href="/work">
            All work
          </Link>
          <Link className="btn" href="/work/sample/northline">
            SAMPLE Northline
          </Link>
          <Link className="btn" href="/evidence">
            Evidence
          </Link>
          {study.slug === "mcfly" ? (
            <a className="btn" href={site.mcfly} rel="noreferrer" target="_blank">
              mcflyads.com
            </a>
          ) : null}
        </p>
      </div>
    </article>
  );
}
