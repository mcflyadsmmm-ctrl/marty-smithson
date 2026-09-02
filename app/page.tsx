import Link from "next/link";
import { ProofRail } from "@/components/ProofRail";
import { hero, homeTease, workPage } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  const { nutricost, mcfly } = workPage;

  return (
    <article className="page">
      <header className="hero">
        <div className="wrap">
          <h1>{hero.name}</h1>
          <p className="lede">{hero.line}</p>
          <ProofRail showPortal />
          <p className="hero-paths">
            <Link href={homeTease.href}>{homeTease.more}</Link>
          </p>
        </div>
      </header>

      <div className="wrap">
        <section className="section" aria-label="Also">
          <p className="label">Also</p>
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
