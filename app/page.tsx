import Link from "next/link";
import { BrandRoster } from "@/components/BrandRoster";
import { CtaRow } from "@/components/CtaRow";
import { featured, hero } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>{hero.name}</h1>
        <p className="lede">{hero.role}</p>
        <p>{hero.line}</p>
        <p className="quiet">{hero.place}</p>
        <p className="quiet">{hero.school}</p>
        <CtaRow />
      </header>

      <div className="wrap">
        <section className="desk" aria-labelledby="desk-title">
          <p className="field">Live desk</p>
          <h2 id="desk-title">
            {site.mcflyProduct} <span className="live-mark">LIVE</span>
          </h2>
          <p>
            The product is live at mcflyads.com. Founder and Data Analytics
            Consultant at McFly Ads.
          </p>
          <p className="close-links">
            <a className="pack-take" href={site.mcfly} rel="noreferrer" target="_blank">
              {site.mcflyProduct}
            </a>
            <Link href="/work/mcfly">The product note</Link>
          </p>
        </section>

        <section className="section" aria-labelledby="clients-title">
          <p className="field">McFly Ads clients</p>
          <h2 id="clients-title">Named brands</h2>
          <BrandRoster wall />
        </section>

        <section className="section" aria-labelledby="work-title">
          <p className="field">Selected work</p>
          <h2 id="work-title" className="visually-hidden">
            Selected work
          </h2>
          <div className="case-stack">
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
