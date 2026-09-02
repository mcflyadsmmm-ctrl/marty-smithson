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

      {fleet.sections.map((section) => (
        <section className="case-section" key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </section>
      ))}

      <p className="case-nav">
        <Link href="/work">All work</Link>
        <Link href="/resume">Resume</Link>
      </p>
    </article>
  );
}
