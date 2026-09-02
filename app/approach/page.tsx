import type { Metadata } from "next";
import Link from "next/link";
import { methodPillars, methodSteps, methodSystems, stack } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Cash MER. Bayesian MMM. GeoLift. Finance funds what it can read. I own the budget.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return (
    <article>
      <header className="case-hero">
        <p className="eyebrow">Approach</p>
        <h1>Cash MER. Bayesian MMM. GeoLift.</h1>
        <p className="lede measure">
          Finance funds what it can read. I own the budget. The model is how we argue with cash, not
          with path credit.
        </p>
      </header>
      <ol className="steps">
        {methodSteps.map((step, index) => (
          <li key={step}>
            <b>0{index + 1}</b>
            {step}
          </li>
        ))}
      </ol>
      <section className="band split">
        <div>
          <p className="kicker">Measurement</p>
          {methodPillars.map((pillar) => (
            <article className="case-block" key={pillar.title}>
              <h2>{pillar.title}</h2>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
        <div>
          <p className="kicker">Systems</p>
          {methodSystems.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <p>
            Public SAMPLE method work — not client data — starts at{" "}
            <a href={site.proof.recast} rel="noreferrer" target="_blank">
              00-recast-r-memo
            </a>{" "}
            and{" "}
            <a href={site.proof.geolift} rel="noreferrer" target="_blank">
              01-geolift
            </a>
            .
          </p>
        </div>
      </section>
      <section className="band">
        <p className="eyebrow">Stack</p>
        <h2>The system</h2>
        <ul className="stack-list">
          {stack.map((item) => (
            <li key={item.name}>
              <strong>{item.name}</strong>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
        <p className="actions mt-block-lg">
          <Link className="btn" href="/work">
            Work
          </Link>
          <Link className="btn" href="/evidence">
            Evidence
          </Link>
          <a className="btn" href={site.proof.repo} rel="noreferrer" target="_blank">
            SAMPLE repo
          </a>
        </p>
      </section>
    </article>
  );
}
