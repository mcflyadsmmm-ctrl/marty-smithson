import Link from "next/link";
import { BrandRoster } from "@/components/BrandRoster";
import { CaseCard } from "@/components/CaseCard";
import { MerChart } from "@/components/MerChart";
import { ProofStats } from "@/components/ProofStats";
import {
  cases,
  evidenceItems,
  hero,
  methodPillars,
  methodSteps,
  origin,
  resume,
} from "@/lib/content";
import { site } from "@/lib/site";

const homeEvidence = evidenceItems.filter((item) =>
  ["01", "03", "06", "07"].includes(item.index),
);

export default function HomePage() {
  return (
    <article>
      <header className="hero">
        <div>
          <p className="sec-id">
            <strong>01</strong> / Signal
          </p>
          <h1>{hero.name}</h1>
          <p className="hero-pair">{hero.pair}</p>
          <p className="hero-claim">{hero.claim}</p>
          <p className="hero-lock">{hero.lock}</p>
        </div>
        <MerChart />
      </header>

      <ProofStats />

      <section className="band" id="work" aria-labelledby="work-title">
        <div className="band-head">
          <div>
            <p className="sec-id">
              <strong>02</strong> / Work
            </p>
            <h2 className="display" id="work-title">
              Three desks. Three stories.
            </h2>
          </div>
          <p className="note">
            Problem, approach, outcome — only facts already on the resume. No invented lifts.
          </p>
        </div>
        <div className="case-list">
          {cases.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <section className="band" id="origin" aria-labelledby="origin-title">
        <p className="sec-id">
          <strong>03</strong> / Origin
        </p>
        <h2 className="display" id="origin-title">
          {origin.lead}
        </h2>
        <p className="lede measure">{origin.copy}</p>
        <p className="note measure">{origin.note}</p>
      </section>

      <section className="band" id="approach" aria-labelledby="approach-title">
        <div className="band-head">
          <div>
            <p className="sec-id">
              <strong>04</strong> / Approach
            </p>
            <h2 className="display" id="approach-title">
              Cash MER. Bayesian MMM. GeoLift.
            </h2>
          </div>
          <p className="note">
            Finance funds what it can read. I own the budget. The model is how we argue with cash,
            not with path credit.
          </p>
        </div>
        <ol className="steps">
          {methodSteps.map((step, index) => (
            <li key={step}>
              <b>0{index + 1}</b>
              {step}
            </li>
          ))}
        </ol>
        <div className="pillars">
          {methodPillars.map((pillar) => (
            <article className="pillar" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-block">
          <Link className="more label" href="/approach">
            Full approach →
          </Link>
        </p>
      </section>

      <section className="band" id="evidence" aria-labelledby="evidence-title">
        <div className="band-head">
          <div>
            <p className="sec-id">
              <strong>05</strong> / Evidence
            </p>
            <h2 className="display" id="evidence-title">
              What can be verified.
            </h2>
          </div>
          <p className="note">
            A screener can point at the resume. SAMPLE method work lives in public R folders — not
            client extracts.
          </p>
        </div>
        <div className="proof-list">
          {homeEvidence.map((item) => (
            <article className="proof-row" key={item.index}>
              <p className="label">{item.index}</p>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <p className="proof-tag">{item.tag}</p>
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
            SAMPLE · Recast memo
          </a>
          <a className="btn" href={site.proof.geolift} rel="noreferrer" target="_blank">
            SAMPLE · GeoLift
          </a>
        </p>
      </section>

      <section className="band" id="brands" aria-labelledby="brands-title">
        <p className="sec-id">
          <strong>06</strong> / Roster
        </p>
        <h2 className="display" id="brands-title">
          Ten named brands
        </h2>
        <BrandRoster />
      </section>

      <section className="band" id="contact" aria-labelledby="close-title">
        <p className="sec-id">
          <strong>07</strong> / Close
        </p>
        <div className="cta">
          <div>
            <h2 className="display" id="close-title">
              The desk is open.
            </h2>
            <p className="note measure">{resume.scan}</p>
            <a className="cta-mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className="actions">
            <Link className="btn btn-solid" href="/contact">
              Contact
            </Link>
            <Link className="btn" href="/resume">
              Master resume
            </Link>
            <a className="btn" href={site.linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
