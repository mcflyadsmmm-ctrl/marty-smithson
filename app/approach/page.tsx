import type { Metadata } from "next";
import Link from "next/link";
import { ArtifactStrip } from "@/components/ArtifactStrip";
import { methodPillars, methodSteps, methodSystems, mixCall } from "@/lib/content";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How the mix moves: data, warehouse, model, experiment, decision, budget. Cash MER. Meridian. GeoLift.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return (
    <article>
      <header className="page-hero">
        <h1>How the mix moves</h1>
        <p className="lede measure">
          Finance funds what it can read. I own the budget. The model is how we argue with cash, not
          with path credit.
        </p>
      </header>

      <ol className="approach-rows">
        {methodSteps.map((step, index) => (
          <li key={step.title}>
            <p className="exp-idx num">0{index + 1}</p>
            <div>
              <h2>{step.title}</h2>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="band">
        <h2>What I measure</h2>
        <div className="measure-stack">
          {methodPillars.map((pillar) => (
            <article className="case-block" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <h2>What ran in production</h2>
        {methodSystems.map((item) => (
          <p className="measure" key={item}>
            {item}
          </p>
        ))}
      </section>

      <section className="band">
        <h2>SAMPLE method folders</h2>
        <p className="note measure">
          Public R work — not Black Clover, not Nutricost, not client extracts.
        </p>
        <ArtifactStrip />
        <p className="actions mt-block">
          <Link className="btn" href="/evidence#mix-call">
            {mixCall.title}
          </Link>
          <Link className="btn" href="/work">
            Work
          </Link>
        </p>
      </section>
    </article>
  );
}
