import type { Metadata } from "next";
import Link from "next/link";
import { ProofRail } from "@/components/ProofRail";
import { workPage } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Black Clover first — isolated books, a partner portal, and the warehouse off Domo onto Cloud Run. Mcfly Analytics Shopify App is LIVE. Nutricost is earlier.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const { blackClover, nutricost, mcfly } = workPage;

  return (
    <article className="page">
      <header className="page-head wrap">
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

        <section className="section" aria-label="Also now">
          <p className="field">Also now</p>
          <article className="work-entry work-entry-solo">
            <h2>
              {site.mcflyProduct}{" "}
              <span className="live-mark">LIVE</span>
            </h2>
            <p className="quiet">{mcfly.role}</p>
            <p>{mcfly.line}</p>
            <p className="close-links">
              <a href={site.mcfly} rel="noreferrer" target="_blank">
                {site.mcflyProduct}
              </a>
              <Link href={mcfly.href}>{mcfly.more}</Link>
            </p>
          </article>
        </section>

        <section className="section" aria-label="Earlier work">
          <p className="field">Earlier</p>
          <Link className="work-entry work-entry-solo" href={nutricost.href}>
            <h2>{nutricost.title}</h2>
            <p className="quiet">{nutricost.role}</p>
            <p>{nutricost.line}</p>
            <span className="more">{nutricost.more}</span>
          </Link>
        </section>
      </div>
    </article>
  );
}
