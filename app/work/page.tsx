import type { Metadata } from "next";
import Link from "next/link";
import { BrandRoster } from "@/components/BrandRoster";
import { CtaRow } from "@/components/CtaRow";
import { DeskShelf } from "@/components/desks/DeskShelf";
import { HarborFeature } from "@/components/desks/HarborFeature";
import { featured } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Open the desks. Black Clover, Nutricost, and Mcfly Analytics Shopify App.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>Work</h1>
        <p className="lede">Open a desk. Black Clover, Nutricost, and the live Shopify product.</p>
        <CtaRow showDemo />
      </header>

      <div className="wrap">
        <HarborFeature />
        <DeskShelf />

        <section className="section" aria-labelledby="clients-title">
          <p className="field">McFly Ads clients</p>
          <h2 id="clients-title">Named brands</h2>
          <BrandRoster wall />
        </section>

        <section className="section" aria-labelledby="cases-title">
          <p className="field">Cases</p>
          <h2 id="cases-title" className="visually-hidden">
            Cases
          </h2>
          <div className="case-stack case-stack-thin">
            {featured.map((item) => (
              <article className="work-entry" key={item.key}>
                <h3>
                  {item.title}
                  {"live" in item && item.live ? (
                    <>
                      {" "}
                      <span className="live-mark">LIVE</span>
                    </>
                  ) : null}
                </h3>
                <p className="quiet">{item.role}</p>
                <p className="close-links">
                  {item.key === "mcfly" ? (
                    <a href={site.mcfly} rel="noreferrer" target="_blank">
                      {site.mcflyProduct}
                    </a>
                  ) : null}
                  <Link href={item.desk}>{item.more}</Link>
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
