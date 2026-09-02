import type { Metadata } from "next";
import Link from "next/link";
import { evidenceItems } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Evidence",
  description:
    "Measurement to budget moved. The same facts as the resume. SAMPLE method folders — not client extracts. No invented lifts.",
  alternates: { canonical: "/evidence" },
};

export default function EvidencePage() {
  return (
    <article className="evidence-page">
      <header className="page-hero">
        <h1>What’s on the desk</h1>
        <p className="lede measure">
          The same facts as the resume, in one place. No invented lifts. Public folders are SAMPLE
          method work — not Black Clover, not Nutricost, not client extracts.
        </p>
      </header>

      <section className="proof-object" id="mix-call" aria-labelledby="mix-call-title">
        <p className="eyebrow">Science proof</p>
        <h2 id="mix-call-title">How the mix call ships</h2>
        <p className="measure">
          One object: measurement → decision → budget moved. No fake lift percentage. The artifact is
          the allocation change finance can fund.
        </p>
        <ol className="proof-chain">
          <li>
            <strong>Measure</strong>
            <p>
              Cash MER (ledger sales after returns ÷ spend). Bayesian MMM (Robyn / Meridian) for
              channel pull and diminishing returns. GeoLift / geo-holdouts when two channels claim the
              same sale.
            </p>
          </li>
          <li>
            <strong>Decide</strong>
            <p>
              Break-even is 1 ÷ contribution margin. Below cash MER break-even, we cut. Platform ROAS
              does not get a defense. The operator presenting to finance names which channel is cut,
              held, or scaled for the next period — the call is the allocation change, not a lift
              percentage.
            </p>
          </li>
          <li>
            <strong>Move budget</strong>
            <p>
              Next period’s spend follows that call. SAMPLE folders below show the method shape —
              not a client lift claim.
            </p>
          </li>
        </ol>
        <div className="artifact-list">
          <Link className="artifact" href="/work/sample/northline">
            <strong>SAMPLE — Northline MER desk</strong>
            <span>Finished method page — fictional brand</span>
          </Link>
          <a className="artifact" href={site.proof.recast} rel="noreferrer" target="_blank">
            <strong>SAMPLE Recast memo</strong>
            <span>Public R write-up — method only</span>
          </a>
          <a className="artifact" href={site.proof.geolift} rel="noreferrer" target="_blank">
            <strong>SAMPLE GeoLift</strong>
            <span>Public geo-holdout notebooks — method only</span>
          </a>
          <a className="artifact" href={site.proof.repo} rel="noreferrer" target="_blank">
            <strong>SAMPLE repo</strong>
            <span>Full public method tree</span>
          </a>
        </div>
      </section>

      <div className="proof-list">
        {evidenceItems.map((item) => (
          <article className="proof-row" key={item.index}>
            <p className="exp-idx num">{item.index}</p>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
      <section className="band">
        <p className="actions">
          <a className="btn btn-solid" href={site.pack.science} download>
            SCIENCE PDF
          </a>
          <Link className="btn" href="/approach">
            Approach
          </Link>
          <Link className="btn" href="/resume">
            Resume pack
          </Link>
        </p>
      </section>
    </article>
  );
}
