import type { Metadata } from "next";
import Link from "next/link";
import { CtaRow } from "@/components/CtaRow";
import { fleet } from "@/lib/content";

export const metadata: Metadata = {
  title: "Black Clover",
  description:
    "Marketing measurement and BI at Black Clover. Cash MER, mix models, incrementality. I report to the CEO.",
  alternates: { canonical: "/work/systems-fleet" },
};

export default function SystemsFleetPage() {
  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>{fleet.title}</h1>
        <p className="lede">{fleet.lead}</p>
        <p className="quiet">
          {fleet.role}. {fleet.reportsTo} {fleet.dates}.
        </p>
        <CtaRow />
      </header>

      <div className="wrap">
        <div className="section-copy">
          <p>
            The job is measurement the CEO can spend against. Cash MER is the
            control. Meridian when the mix call is causal. GeoLift or an RCT
            when two channels claim the same sale. Platform ROAS is not the
            budget.
          </p>
          <p>
            Attribution and incrementality sit on the same desk as the BI. I
            allocate a seven-figure monthly paid mix across Google, Meta, and
            Microsoft against cash MER.
          </p>
          <p>
            The warehouse left Domo for Cloud Run. Same work. About $20K a
            month left the bill. That cost is already on the resume — not a
            dashboard, and not a walkthrough of the internals.
          </p>
        </div>

        <p className="close-links">
          <Link href="/work">All work</Link>
          <Link href="/resume">Resume</Link>
        </p>
      </div>
    </article>
  );
}
