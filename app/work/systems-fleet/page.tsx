import type { Metadata } from "next";
import Link from "next/link";
import { FleetMap } from "@/components/FleetMap";
import { LaneGrid } from "@/components/LaneGrid";
import { PortalRoles } from "@/components/PortalRoles";
import { ShiftCompare } from "@/components/ShiftCompare";
import { fleet } from "@/lib/content";

export const metadata: Metadata = {
  title: "Black Clover",
  description:
    "I moved Black Clover’s warehouse off Domo onto Cloud Run, held the GCP class around thirty dollars, and built isolated books for wholesale, the field portal, cash, retail, and fulfillment.",
  alternates: { canonical: "/work/systems-fleet" },
};

export default function SystemsFleetPage() {
  return (
    <article className="page proof">
      <header className="page-head wrap">
        <p className="label">
          {fleet.role} · {fleet.dates}
        </p>
        <h1>{fleet.title}</h1>
        <p className="lede">{fleet.lead}</p>
      </header>

      <div className="wrap">
        <section className="section" aria-labelledby="arch-title">
          <h2 id="arch-title" className="visually-hidden">
            Architecture
          </h2>
          <FleetMap />
        </section>

        <section className="section-copy after-figure">
          {fleet.open.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="section">
          <h2>{fleet.shift.title}</h2>
          <ShiftCompare />
          <div className="section-copy">
            <p>{fleet.shift.note}</p>
          </div>
        </section>

        <section className="section">
          <h2>{fleet.identities.title}</h2>
          <PortalRoles />
          <div className="section-copy">
            <p>{fleet.identities.note}</p>
          </div>
        </section>

        <section className="section">
          <p className="label">Lanes</p>
          <h2>Five isolated books</h2>
          <LaneGrid />
        </section>

        <section className="section">
          <h2>{fleet.constraints.title}</h2>
          <ul className="constraint-grid">
            {fleet.constraints.items.map((item) => (
              <li className="constraint" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="band">
          <p className="label">Mix</p>
          <h2>{fleet.mix.title}</h2>
          <p>{fleet.mix.body}</p>
        </section>

        <p className="close-links">
          <Link href="/work">All work</Link>
          <Link href="/resume">Resume</Link>
        </p>
      </div>
    </article>
  );
}
