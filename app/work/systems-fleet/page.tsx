import type { Metadata } from "next";
import Link from "next/link";
import { fleet } from "@/lib/content";

export const metadata: Metadata = {
  title: "What I built at Black Clover",
  description:
    "I moved Black Clover’s warehouse off Domo onto Cloud Run and built a partner portal for about 50 people.",
  alternates: { canonical: "/work/systems-fleet" },
};

export default function SystemsFleetPage() {
  return (
    <article className="case">
      <header className="page-head">
        <p className="kicker">
          {fleet.place} · {fleet.role}
        </p>
        <h1>{fleet.title}</h1>
        <p className="lede">{fleet.lead}</p>
      </header>

      <section className="case-section">
        <h2>{fleet.warehouse.title}</h2>
        <p>{fleet.warehouse.body}</p>
      </section>

      <figure className="desk-flow-wrap" aria-label="How a desk works">
        <figcaption>How a desk works</figcaption>
        <ol className="desk-flow">
          {fleet.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </figure>

      <div className="lane-grid">
        {fleet.lanes.map((lane) => (
          <section className="case-section" key={lane.title}>
            <h2>{lane.title}</h2>
            <p>{lane.body}</p>
          </section>
        ))}
      </div>

      <p className="case-nav">
        <Link href="/work">All work</Link>
        <Link href="/resume">Resume</Link>
      </p>
    </article>
  );
}
