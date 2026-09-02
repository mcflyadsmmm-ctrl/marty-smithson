import Link from "next/link";
import { FleetMap } from "@/components/FleetMap";
import { hero, homeIndex, homeTease, workPage } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  const { nutricost, mcfly } = workPage;

  return (
    <article className="page">
      <header className="hero">
        <div className="wrap">
          <p className="label">Head of BI & Performance Marketing · Black Clover</p>
          <h1>{hero.name}</h1>
          <p className="lede">{hero.line}</p>
          <p className="hero-paths">
            <Link href={homeTease.href}>{homeTease.more}</Link>
            <Link href="/work">Work</Link>
            <Link href="/resume">Resume</Link>
          </p>
          <ul className="hero-index">
            {homeIndex.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>
                  <span className="label">{item.label}</span>
                  <strong>{item.value}</strong>
                  <span className="hero-index-note">{item.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="wrap">
        <section className="section" aria-label="Black Clover">
          <p className="label">Black Clover</p>
          <FleetMap compact />
        </section>

        <section className="section" aria-label="Also">
          <p className="label">Also</p>
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

        <section className="close" aria-label="Contact">
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="quiet">
            {site.location}. {site.education}.
          </p>
        </section>
      </div>
    </article>
  );
}
