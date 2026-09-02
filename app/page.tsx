import Link from "next/link";
import { fleet, hero, homeNote, homeStories } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <article className="home">
      <header className="hero">
        <h1>{hero.name}</h1>
        <p className="lede">{hero.line}</p>
      </header>

      <section className="stories" aria-label="What I built">
        {homeStories.map((story) => (
          <div className="story" key={story.title}>
            <h2>{story.title}</h2>
            <p>{story.body}</p>
          </div>
        ))}
        <p className="story-more">
          <Link href="/work/systems-fleet">The Black Clover case</Link>
        </p>
      </section>

      <p className="home-note">{homeNote}</p>
      <p className="home-note quiet">{fleet.dates}.</p>

      <section className="close" aria-label="Contact">
        <a className="mail" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <p className="note">{site.locationLine}</p>
      </section>
    </article>
  );
}
