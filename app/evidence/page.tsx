import type { Metadata } from "next";
import Link from "next/link";
import { evidenceItems } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Evidence",
  description:
    "What can be verified. A screener can point at the resume. No invented lift. No graduation month — bachelor’s only.",
  alternates: { canonical: "/evidence" },
};

export default function EvidencePage() {
  return (
    <article>
      <header className="case-hero">
        <p className="eyebrow">Evidence</p>
        <h1>What can be verified</h1>
        <p className="lede measure">
          A screener can point at the resume. This is that map. No invented lift. No graduation
          month — bachelor’s only.
        </p>
      </header>
      <div className="proof-list">
        {evidenceItems.map((item) => (
          <article className="proof-row" key={item.index}>
            <p className="exp-idx">{item.index}</p>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <p className="proof-tag">{item.tag}</p>
            </div>
            <p className="verified">Verified</p>
          </article>
        ))}
      </div>
      <section className="band">
        <p className="note measure">
          Upload Word on myworkdayjobs.com. PDF on Greenhouse and Ashby. Same facts. Public SAMPLE
          pointers only — not Black Clover, not Nutricost, not client data.
        </p>
        <p className="actions">
          <Link className="btn" href="/resume">
            Full resume
          </Link>
          <Link className="btn" href="/approach">
            Approach
          </Link>
          <a className="btn" href={site.proof.recast} rel="noreferrer" target="_blank">
            00-recast-r-memo
          </a>
          <a className="btn" href={site.proof.geolift} rel="noreferrer" target="_blank">
            01-geolift
          </a>
        </p>
      </section>
    </article>
  );
}
