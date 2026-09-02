import type { Metadata } from "next";
import Link from "next/link";
import { fleetShipped, fleetSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Systems fleet — what I built",
  description:
    "Isolated truth lanes at Black Clover — partner portal on Cloud Run for ~50 users, Domo warehouse move, certified desks, cash MER.",
  alternates: { canonical: "/work/systems-fleet" },
};

export default function SystemsFleetPage() {
  return (
    <article className="fleet-page fleet-personal">
      <header className="page-hero">
        <p className="eyebrow">My case · Black Clover</p>
        <h1>Isolated truth lanes</h1>
        <p className="lede tight">
          Partner portal on Google Cloud Run for about 50 users. Domo warehouse moved to Cloud Run
          — about $20K a month saved. Leadership funds a call from certified numbers.
        </p>
      </header>

      <figure className="os-diagram os-diagram-lg" aria-label="How the desk works">
        <figcaption>How the desk works</figcaption>
        <ol className="os-flow">
          {fleetSteps.map((step) => (
            <li key={step}>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="diagram-note">Constraints I designed around: identity · dual-writer ban</p>
      </figure>

      <section className="band band-flush" aria-labelledby="shipped-title">
        <h2 id="shipped-title">What I shipped</h2>
        <ul className="build-list">
          {fleetShipped.map((item) => (
            <li key={item.title}>
              <strong>{item.title}.</strong> {item.body}
            </li>
          ))}
        </ul>
      </section>

      <p className="note tight">Public-safe telling. No proprietary internals.</p>
      <p className="actions mt-block-lg">
        <Link className="btn btn-solid" href="/work">
          All work
        </Link>
        <Link className="btn" href="/">
          Home
        </Link>
      </p>
    </article>
  );
}
