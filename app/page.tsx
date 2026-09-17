import Link from "next/link";
import { BrandRoster } from "@/components/BrandRoster";
import { CtaRow } from "@/components/CtaRow";
import { DeskShelf } from "@/components/desks/DeskShelf";
import { HarborFeature } from "@/components/desks/HarborFeature";
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
        <HarborFeature />
        <DeskShelf />

        <section className="section" aria-labelledby="clients-title">
          <p className="field">McFly Ads clients</p>
          <h2 id="clients-title">Named brands</h2>
          <BrandRoster wall />
        </section>

        <section className="section" aria-labelledby="work-title">
          <p className="field">Cases</p>
          <h2 id="work-title" className="visually-hidden">
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
