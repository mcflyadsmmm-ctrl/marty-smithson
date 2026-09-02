import type { Metadata } from "next";
import Link from "next/link";
import { cases, homeLanes, workBuilds } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "What I built: partner portal on Cloud Run for ~50 users, Domo warehouse move (~$20K/month), Decision Net, cash MER. Seats are backdrop.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <article className="work-tight work-personal">
      <header className="page-hero">
        <h1>Work</h1>
        <p className="lede tight">The builds I’m proudest of, then the seats that held them.</p>
      </header>

      <section className="band" aria-labelledby="work-built-title">
        <p className="eyebrow">What I built</p>
        <h2 id="work-built-title">Black Clover systems</h2>
        <p className="tight measure">{homeLanes}</p>
        <ul className="build-list">
          {workBuilds.map((build) => (
            <li key={build.lead}>
              <strong>{build.lead}</strong> — {build.body}
            </li>
          ))}
        </ul>
        <p className="actions">
          <Link className="btn btn-solid" href="/work/systems-fleet">
            Read the full case
          </Link>
        </p>
      </section>

      <section className="band" aria-labelledby="work-sat-title">
        <p className="eyebrow">Backdrop</p>
        <h2 id="work-sat-title">Where those builds sat</h2>
        <ul className="context-list">
          {cases.map((study) => (
            <li key={study.slug}>
              <Link href={`/work/${study.slug}`}>
                {study.headline} · {study.role} · {study.brand} · {study.dates}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
