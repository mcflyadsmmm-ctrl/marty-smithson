import Link from "next/link";
import type { Metadata } from "next";
import { CaseCard } from "@/components/CaseCard";
import { cases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Three desks. The same jobs as the resume. No invented lifts.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <article>
      <header className="page-hero">
        <h1>Three desks</h1>
        <p className="lede measure">
          Black Clover, Nutricost, and McFly Ads — problem, approach, outcome. The same jobs as the
          resume. No invented lifts.
        </p>
      </header>
      <section className="band band-flush">
        <div className="exp-list">
          {cases.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
      <section className="band">
        <p className="eyebrow">SAMPLE method</p>
        <h2>Illustrative MER desk</h2>
        <p className="note measure">
          Fictional Northline Apparel — Measure → Decide → Move budget. Not client results.
        </p>
        <p className="actions">
          <Link className="btn" href="/work/sample/northline">
            Open SAMPLE Northline
          </Link>
        </p>
      </section>
    </article>
  );
}
