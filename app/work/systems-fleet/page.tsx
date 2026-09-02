import type { Metadata } from "next";
import Link from "next/link";
import { FleetMap } from "@/components/FleetMap";
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
    <article className="doc proof">
      <header className="open">
        <h1>{fleet.title}</h1>
        <p className="quiet">
          {fleet.role}. {fleet.reportsTo} {fleet.dates}.
        </p>
        <p className="open-line">{fleet.lead}</p>
      </header>

      {fleet.open.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <FleetMap />

      <section>
        <h2>{fleet.shift.title}</h2>
        <p>{fleet.shift.lead}</p>
        <ShiftCompare />
        <p>{fleet.shift.note}</p>
      </section>

      <section>
        <h2>{fleet.identities.title}</h2>
        <p>{fleet.identities.lead}</p>
        <PortalRoles />
        <p>{fleet.identities.note}</p>
      </section>

      {fleet.lanes.map((lane) => (
        <section id={lane.id} key={lane.id}>
          <h2>{lane.title}</h2>
          {lane.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}

      <section>
        <h2>{fleet.constraints.title}</h2>
        <p>{fleet.constraints.lead}</p>
        {fleet.constraints.items.map((item) => (
          <div className="constraint" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>{fleet.mix.title}</h2>
        <p>{fleet.mix.body}</p>
      </section>

      <p className="close-links">
        <Link href="/work">All work</Link>
        <Link href="/resume">Resume</Link>
      </p>
    </article>
  );
}
