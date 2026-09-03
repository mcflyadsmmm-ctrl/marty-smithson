import type { Metadata } from "next";
import Link from "next/link";
import { ProofRail } from "@/components/ProofRail";
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
        <h1>{blackClover.title}</h1>
        <p className="lede">{blackClover.role}</p>
      </header>

      <div className="wrap">
        <section className="featured" aria-labelledby="black-clover-title">
          <h2 id="black-clover-title" className="visually-hidden">
            {blackClover.title}
          </h2>
          <ProofRail />
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
              <span className="more">{nutricost.more}</span>
            </Link>
            <Link className="work-entry" href={mcfly.href}>
              <h2>{mcfly.title}</h2>
              <p className="quiet">{mcfly.role}</p>
              <p>{mcfly.line}</p>
              <span className="more">{mcfly.more}</span>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
