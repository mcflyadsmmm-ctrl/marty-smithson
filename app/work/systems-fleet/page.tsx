import type { Metadata } from "next";
import Link from "next/link";
import { CaseNav } from "@/components/CaseNav";
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

      <CaseNav />

      <div className="wrap">
        <section className="case-block case-block-first" id="architecture">
          <p className="label">01 / Architecture</p>
          <h2 className="visually-hidden">Architecture</h2>
          <FleetMap />
        </section>

        <section className="case-block" id="shift">
          <p className="label">02 / Shift</p>
          <h2>{fleet.shift.title}</h2>
          <ShiftCompare />
          <p className="quiet after-figure">{fleet.shift.note}</p>
        </section>

        <section className="case-block" id="identity">
          <p className="label">03 / Identity</p>
          <h2>{fleet.identities.title}</h2>
          <PortalRoles />
          <p className="quiet after-figure">{fleet.identities.note}</p>
        </section>

        <section className="case-block" id="lanes">
          <p className="label">04 / Lanes</p>
          <h2>Five isolated books</h2>
          <LaneGrid />
        </section>

        <section className="case-block" id="constraint">
          <p className="label">05 / Constraint</p>
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

        <section className="band" id="mix">
          <p className="label">06 / Mix</p>
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
