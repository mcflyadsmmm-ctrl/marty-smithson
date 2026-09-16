import Link from "next/link";
import { ProofRail } from "@/components/ProofRail";
import { hero, homeTease, workPage } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  const { nutricost, mcfly } = workPage;

  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>{hero.name}</h1>
        <p className="lede">{hero.line}</p>
        <p className="quiet">{hero.place}</p>
        <p className="quiet">{hero.school}</p>
      </header>

      <div className="wrap">
        <section className="featured" aria-labelledby="black-clover-home">
          <h2 id="black-clover-home" className="visually-hidden">
            {workPage.blackClover.title}
          </h2>
          <ProofRail showPortal />
          <p className="close-links">
            <Link href={homeTease.href}>{homeTease.more}</Link>
          </p>
        </section>

        <section className="section" aria-label="Also now">
          <p className="field">Also now</p>
          <Link className="work-entry work-entry-solo" href={mcfly.href}>
            <h2>
              {mcfly.title}{" "}
              <span className="live-mark">LIVE</span>
            </h2>
            <p className="quiet">{mcfly.role}</p>
            <p>{mcfly.line}</p>
            <span className="more">{mcfly.more}</span>
          </Link>
        </section>

        <section className="section" aria-label="Earlier">
          <p className="field">Earlier</p>
          <Link className="work-entry work-entry-solo" href={nutricost.href}>
            <h2>{nutricost.title}</h2>
            <p className="quiet">{nutricost.role}</p>
            <p>{nutricost.line}</p>
            <span className="more">{nutricost.more}</span>
          </Link>
        </section>

        <section className="close" aria-label="Email">
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </section>
      </div>
    </article>
  );
}
