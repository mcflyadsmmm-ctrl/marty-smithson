import type { Metadata } from "next";
import Link from "next/link";
import { CaseCard } from "@/components/CaseCard";
import { cases, mixCall } from "@/lib/content";

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
      <p className="mt-block">
        <Link className="more" href="/evidence#mix-call">
          {mixCall.title} →
        </Link>
      </p>
    </article>
  );
}
