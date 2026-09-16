import type { Metadata } from "next";
import Link from "next/link";
import { BrandRoster } from "@/components/BrandRoster";
import { CtaRow } from "@/components/CtaRow";
import { featured } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Black Clover, Nutricost, and Mcfly Analytics Shopify App. Marketing analytics and measurement.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>Work</h1>
        <p className="lede">
          Black Clover, Nutricost, and Mcfly Analytics Shopify App.
        </p>
        <CtaRow />
      </header>

      <div className="wrap">
        <section className="desk" aria-labelledby="desk-title">
          <p className="field">Live desk</p>
          <h2 id="desk-title">
            {site.mcflyProduct} <span className="live-mark">LIVE</span>
          </h2>
          <p>The shipped Shopify desk is the demo. Open it at mcflyads.com.</p>
          <p className="close-links">
            <a className="pack-take" href={site.mcfly} rel="noreferrer" target="_blank">
              {site.mcflyProduct}
            </a>
          </p>
        </section>

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
          <div className="case-grid">
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
                <p>{item.line}</p>
                <p className="close-links">
                  {item.key === "mcfly" ? (
                    <a href={site.mcfly} rel="noreferrer" target="_blank">
                      {site.mcflyProduct}
                    </a>
                  ) : null}
                  <Link href={item.href}>{item.more}</Link>
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
