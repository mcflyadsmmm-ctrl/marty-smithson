import Link from "next/link";
import { cases, hero, homeBuilds, homeLanes } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <article className="home-quiet home-personal">
      <header className="page-hero home-hero-quiet">
        <p className="hero-name">{hero.name}</p>
        <h1>{hero.lock}</h1>
        <p className="lede quiet-lede">{hero.claim}</p>
        <p className="actions hero-cta">
          <Link className="btn btn-solid btn-lg" href="/work/systems-fleet">
            What I built
          </Link>
          <Link className="btn-text" href="/resume">
            Resume
          </Link>
          <a className="btn-text" href={`mailto:${site.email}`}>
            Email
          </a>
        </p>
      </header>

      <section className="band" id="built" aria-labelledby="built-title">
        <p className="eyebrow">What I built</p>
        <h2 id="built-title">Concrete work</h2>
        <p className="tight measure">{homeLanes}</p>
        <ul className="build-list">
          {homeBuilds.map((build) => (
            <li key={build.lead}>
              <strong>{build.lead}</strong> {build.body}
            </li>
          ))}
        </ul>
        <p className="actions">
          <Link className="btn" href="/work/systems-fleet">
            Read the case →
          </Link>
        </p>
      </section>

      <section className="band" id="sat" aria-labelledby="sat-title">
        <p className="eyebrow">Where this sat</p>
        <h2 id="sat-title">Backdrop</h2>
        <ul className="context-list">
          {cases.map((study) => (
            <li key={study.slug}>
              <Link href={`/work/${study.slug}`}>
                {study.headline} · {study.role} · {study.brand} · {study.dates}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="band contact-strip-home" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Get in touch</h2>
        <p className="actions">
          <a className="btn btn-solid" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="btn" href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <Link className="btn" href="/resume">
            Resume
          </Link>
        </p>
        <p className="note tight footer-tiny-note">{site.locationLine}</p>
      </section>
    </article>
  );
}
