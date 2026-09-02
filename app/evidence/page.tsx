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
      <header className="case-hero">
        <p className="eyebrow">Evidence</p>
        <h1>What’s on the desk</h1>
        <p className="lede measure">
          The same facts as the resume, in one place. No invented lifts. The public folders are
          SAMPLE method work — not Black Clover, not Nutricost, not client extracts.
        </p>
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
        <p className="note measure">
          SAMPLE Recast R memo and SAMPLE GeoLift notebooks are public method folders. They are not
          client data and they are not a product comparison.
        </p>
        <p className="actions">
          <Link className="btn" href="/resume">
            Full resume
          </Link>
          <Link className="btn" href="/approach">
            Approach
          </Link>
          <a className="btn" href={site.proof.recast} rel="noreferrer" target="_blank">
            SAMPLE Recast memo
          </a>
          <a className="btn" href={site.proof.geolift} rel="noreferrer" target="_blank">
            SAMPLE GeoLift
          </a>
        </p>
      </section>
    </article>
  );
}
