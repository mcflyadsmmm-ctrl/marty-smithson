import Link from "next/link";
import { FleetMap } from "@/components/FleetMap";
import { hero, homeAfter, homeTease } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <article className="doc">
      <header className="open first-screen">
        <h1>{hero.name}</h1>
        <p className="open-line">{hero.line}</p>
      </header>

      {homeTease.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <FleetMap compact />

      <p>
        <Link href={homeTease.href}>{homeTease.more}</Link>
      </p>

      <p className="quiet after">{homeAfter}</p>

      <section className="close" aria-label="Contact">
        <p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p className="quiet">
          {site.location}. {site.education}.
        </p>
        <p className="close-links">
          <Link href="/work">Work</Link>
          <Link href="/resume">Resume</Link>
          <a href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </p>
      </section>
    </article>
  );
}
