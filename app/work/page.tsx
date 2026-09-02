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
      <header className="case-hero">
        <p className="sec-id">
          <strong>01</strong> / Work
        </p>
        <h1>Three desks.</h1>
        <p className="lede measure">
          Black Clover, Nutricost, and McFly Ads as portfolio pieces — problem, approach, outcome.
          The same jobs as the resume. No invented lifts.
        </p>
      </header>
      <section className="band band-flush">
        <div className="case-list">
          {cases.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
    </article>
  );
}
