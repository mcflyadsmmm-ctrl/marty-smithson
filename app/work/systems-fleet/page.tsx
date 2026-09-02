import type { Metadata } from "next";
import Link from "next/link";
import { fleet } from "@/lib/content";

export const metadata: Metadata = {
  title: "Black Clover",
  description:
    "I moved Black Clover’s warehouse off Domo onto Cloud Run and built a partner portal on the same stack for about fifty people.",
  alternates: { canonical: "/work/systems-fleet" },
};

export default function SystemsFleetPage() {
  return (
    <article className="doc">
      <header className="open">
        <h1>{fleet.title}</h1>
        <p className="quiet">
          {fleet.role}. {fleet.reportsTo}
        </p>
        <p className="open-line">{fleet.lead}</p>
      </header>

      {fleet.sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </section>
      ))}

      <p className="close-links">
        <Link href="/work">All work</Link>
        <Link href="/resume">Resume</Link>
      </p>
    </article>
  );
}
