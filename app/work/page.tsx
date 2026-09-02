import type { Metadata } from "next";
import { CaseCard } from "@/components/CaseCard";
import { CaseSlotCard } from "@/components/CaseSlotCard";
import { caseSlots, cases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Three desks. The same jobs as the resume. Two slots awaiting facts.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <article>
      <header className="case-hero">
        <p className="eyebrow">Work</p>
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
      <section className="band" id="slots" aria-labelledby="slots-title">
        <p className="eyebrow">Ready slots</p>
        <h2 id="slots-title">Awaiting Marty facts</h2>
        <p className="note measure">
          Structure only. Not finished case studies. No invented brands, lifts, or numbers.
        </p>
        <div className="slot-list">
          {caseSlots.map((slot) => (
            <CaseSlotCard key={slot.slug} slot={slot} />
          ))}
        </div>
      </section>
    </article>
  );
}
