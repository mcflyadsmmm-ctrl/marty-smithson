import Link from "next/link";
import { BrandRoster } from "@/components/BrandRoster";
import { CaseCard } from "@/components/CaseCard";
import { cases, evidenceItems, hero, methodPillars, proofStats, resume } from "@/lib/content";
import { site } from "@/lib/site";

const homeEvidence = evidenceItems.filter((item) =>
  ["01", "03", "06", "07"].includes(item.index),
);

export default function HomePage() {
  return (
    <article>
      <header className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>{hero.name}</h1>
        <p className="hero-role">{hero.pair}</p>
        <p className="lede">{hero.claim}</p>
        <p className="note measure">{hero.lock}</p>
        <ul className="facts">
          {proofStats.map((stat) => (
            <li key={stat.unit + stat.figure}>
              <strong>{stat.figure}</strong> {stat.unit.toLowerCase()} {stat.line} · {stat.meta}
            </li>
          ))}
        </ul>
      </header>

      <section className="band" id="work" aria-labelledby="work-title">
        <div className="band-head">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 id="work-title">Three desks</h2>
          </div>
          <p className="note">
            Same jobs as the resume. Problem, approach, outcome — no invented lifts.
          </p>
        </div>
        <div className="exp-list">
          {cases.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <section className="band" id="approach" aria-labelledby="approach-title">
        <div className="band-head">
          <div>
            <p className="eyebrow">Approach</p>
            <h2 id="approach-title">Cash MER. Bayesian MMM. GeoLift.</h2>
          </div>
          <p className="note">
            Finance funds what it can read. I own the budget. The model is how we argue with cash,
            not with path credit.
          </p>
        </div>
        <div className="pillars">
          {methodPillars.map((pillar) => (
            <article className="pillar" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-block">
          <Link className="more" href="/approach">
            Full approach →
          </Link>
        </p>
      </section>

      <section className="band" id="evidence" aria-labelledby="evidence-title">
        <div className="band-head">
          <div>
            <p className="eyebrow">Evidence</p>
            <h2 id="evidence-title">What can be verified</h2>
          </div>
          <p className="note">
            SAMPLE method work is public R folders — not client extracts.
          </p>
        </div>
        <div className="proof-list">
          {homeEvidence.map((item) => (
            <article className="proof-row" key={item.index}>
              <p className="exp-idx">{item.index}</p>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <p className="verified">Verified</p>
            </article>
          ))}
        </div>
        <p className="actions mt-block">
          <Link className="btn" href="/evidence">
            Evidence map
          </Link>
          <a className="btn" href={site.proof.recast} rel="noreferrer" target="_blank">
            SAMPLE Recast memo
          </a>
          <a className="btn" href={site.proof.geolift} rel="noreferrer" target="_blank">
            SAMPLE GeoLift
          </a>
        </p>
      </section>

      <section className="band" id="brands" aria-labelledby="brands-title">
        <p className="eyebrow">McFly Ads</p>
        <h2 id="brands-title">Ten named brands</h2>
        <p className="note">Complete public roster. No invented ROAS. CEO of McFly Ads only.</p>
        <BrandRoster />
      </section>

      <section className="band" id="contact" aria-labelledby="close-title">
        <p className="eyebrow">Contact</p>
        <h2 id="close-title">Get in touch</h2>
        <p className="note measure">{resume.scan}</p>
        <p>
          <a className="cta-mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        <p className="actions">
          <Link className="btn btn-solid" href="/contact">
            Contact
          </Link>
          <Link className="btn" href="/resume">
            Resume
          </Link>
          <a className="btn" href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </p>
      </section>
    </article>
  );
}
