import Link from "next/link";
import { CaseRow } from "@/components/CaseRow";
import { ContactStrip } from "@/components/ContactStrip";
import { cases, ceoClarifier, hero, methodPillars, mixCall, resume } from "@/lib/content";

export default function HomePage() {
  return (
    <article>
      <header className="page-hero">
        <h1>{hero.lock}</h1>
        <p className="lede">{hero.claim}</p>
        <p className="hero-lead">
          <span className="num">$30M+</span> media directed
        </p>
      </header>

      <section className="band" id="about" aria-labelledby="about-title">
        <h2 id="about-title">{hero.pair}</h2>
        <p className="measure">{resume.summary}</p>
        <p className="note measure">{ceoClarifier}</p>
      </section>

      <section className="band" id="experience" aria-labelledby="experience-title">
        <h2 id="experience-title">Three desks</h2>
        <p className="note measure">
          Same jobs as the resume. Channels, duration, and reporting lines — no invented lifts.
        </p>
        <div className="exp-list">
          {cases.map((study) => (
            <CaseRow key={study.slug} study={study} />
          ))}
        </div>
        <p className="mt-block">
          <Link className="more" href="/work">
            All case notes →
          </Link>
        </p>
      </section>

      <section className="band" id="approach" aria-labelledby="approach-title">
        <h2 id="approach-title">Cash first. Then the model.</h2>
        <ol className="approach-rows">
          {methodPillars.map((pillar, index) => (
            <li key={pillar.title}>
              <p className="exp-idx num">0{index + 1}</p>
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-block">
          <Link className="more" href="/evidence#mix-call">
            {mixCall.title} →
          </Link>
        </p>
        <p>
          <Link className="more" href="/approach">
            Full approach →
          </Link>
        </p>
      </section>

      <section className="band band-contact" id="contact" aria-labelledby="contact-title">
        <ContactStrip showHeading />
      </section>
    </article>
  );
}
