import type { Metadata } from "next";
import Link from "next/link";
import { evidenceItems } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Evidence",
  description:
    "The same facts as the resume, in one place. Public SAMPLE method folders — not client extracts. No invented lifts.",
  alternates: { canonical: "/evidence" },
};

export default function EvidencePage() {
  return (
    <article>
      <header className="page-hero">
        <h1>What’s on the desk</h1>
        <p className="lede measure">
          The same facts as the resume, in one place. No invented lifts. The public folders are
          SAMPLE method work — not Black Clover, not Nutricost, not client extracts.
        </p>
        <div className="artifact-list">
          <a className="artifact" href={site.proof.recast} rel="noreferrer" target="_blank">
            <strong>SAMPLE Recast memo</strong>
            <span>Public R write-up — method only, not client data</span>
          </a>
          <a className="artifact" href={site.proof.geolift} rel="noreferrer" target="_blank">
            <strong>SAMPLE GeoLift</strong>
            <span>Public geo-holdout notebooks — method only, not client data</span>
          </a>
        </div>
      </header>
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
          <Link className="btn btn-solid" href="/resume">
            Resume / PDF
          </Link>
          <Link className="btn" href="/approach">
            Approach
          </Link>
        </p>
      </section>
    </article>
  );
}
