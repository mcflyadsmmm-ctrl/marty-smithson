import type { Metadata } from "next";
import Link from "next/link";
import { homeLanes, workBuilds } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Domo warehouse move to Cloud Run (~$20K/month), partner portal for ~50 users, Decision Net, cash MER, retail and fulfillment.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <article className="work-tight work-personal">
      <header className="page-hero">
        <h1>Work</h1>
        <p className="lede tight measure">{homeLanes}</p>
      </header>

      <section className="band band-flush" aria-label="Builds">
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
    </article>
  );
}
