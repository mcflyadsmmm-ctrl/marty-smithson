import Link from "next/link";
import { CaseRow } from "@/components/CaseRow";
import { IdentityNav } from "@/components/IdentityNav";
import { budgetMoved, cases, hero, methodPillars, resume } from "@/lib/content";
import { nav, site } from "@/lib/site";

export default function HomePage() {
  return (
    <article className="home">
      <aside className="home-identity">
        <p className="identity-name">{hero.name}</p>
        <h1>{hero.lock}</h1>
        <p className="lede">{hero.claim}</p>
        <IdentityNav />
        <div className="identity-pages">
          {nav
            .filter((item) => item.href === "/work" || item.href === "/evidence" || item.href === "/resume")
            .map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
        </div>
        <div className="identity-links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <Link href="/resume">Resume</Link>
        </div>
      </aside>

      <div className="home-proof">
        <section className="home-section" id="about" aria-labelledby="about-title">
          <p className="eyebrow">About</p>
          <h2 id="about-title">{hero.pair}</h2>
          <p className="measure">{resume.summary}</p>
          <p className="note measure">
            I report to the Black Clover CEO. The CEO title applies only to McFly Ads.
          </p>
        </section>

        <section className="home-section" id="experience" aria-labelledby="experience-title">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-title">Three desks</h2>
          <p className="note measure">
            Same jobs as the resume. Real mix numbers — no invented lifts.
          </p>
          <p className="budget-moved measure">
            <span className="eyebrow">{budgetMoved.eyebrow}</span>
            {budgetMoved.body}
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

        <section className="home-section" id="approach" aria-labelledby="approach-title">
          <p className="eyebrow">Approach</p>
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
            <Link className="more" href="/approach">
              Full approach →
            </Link>
          </p>
        </section>

        <section className="home-section" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Get in touch</h2>
          <p className="note measure">{resume.scan}</p>
          <p>
            <a className="cta-mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="note">
            {site.locationLine}
            <br />
            {site.authorization}
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
      </div>
    </article>
  );
}
