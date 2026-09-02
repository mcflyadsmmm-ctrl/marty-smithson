import type { Metadata } from "next";
import Link from "next/link";
import { FleetMap } from "@/components/FleetMap";
import { ShiftCompare } from "@/components/ShiftCompare";
import { workPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Black Clover — warehouse off Domo onto Cloud Run, isolated books, and the partner portal. Notes on Nutricost and McFly Ads.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const { blackClover, nutricost, mcfly } = workPage;

  return (
    <article className="page">
      <header className="page-head wrap">
        <p className="label">Work</p>
        <h1>Work</h1>
        <p className="lede">{workPage.lead}</p>
      </header>

      <div className="wrap">
        <section className="featured" aria-labelledby="black-clover-title">
          <div className="featured-head">
            <p className="label">Black Clover</p>
            <h2 id="black-clover-title">{blackClover.title}</h2>
            <p className="quiet">{blackClover.role}</p>
          </div>
          <ShiftCompare compact />
          <FleetMap compact />
          <p className="close-links">
            <Link href={blackClover.href}>{blackClover.more}</Link>
          </p>
        </section>

        <section className="section" aria-label="Earlier work">
          <p className="label">Earlier</p>
          <div className="later-grid">
            <Link className="work-entry" href={nutricost.href}>
              <h2>{nutricost.title}</h2>
              <p className="quiet">{nutricost.role}</p>
              <p>{nutricost.line}</p>
              <p className="more">{nutricost.more}</p>
            </Link>
            <Link className="work-entry" href={mcfly.href}>
              <h2>{mcfly.title}</h2>
              <p className="quiet">{mcfly.role}</p>
              <p>{mcfly.line}</p>
              <p className="more">{mcfly.more}</p>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
