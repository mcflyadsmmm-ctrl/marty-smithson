import type { Metadata } from "next";
import Link from "next/link";
import { ArtifactStrip } from "@/components/ArtifactStrip";
import { MixCall } from "@/components/MixCall";
import { evidenceItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "How the mix call ships",
  description:
    "SAMPLE method — Cash MER / MMM / GeoLift, then cut or scale, then the budget that moved. Not client extracts. No invented lifts.",
  alternates: { canonical: "/evidence" },
};

export default function EvidencePage() {
  return (
    <article>
      <header className="page-hero">
        <MixCall asPageTitle showLink={false} />
        <ArtifactStrip />
      </header>
      <section className="band" aria-labelledby="desk-facts-title">
        <h2 id="desk-facts-title">What’s on the desk</h2>
        <p className="note measure">
          The same facts as the resume, in one place. No invented lifts. The public folders above
          are SAMPLE method work — not Black Clover, not Nutricost, not client extracts.
        </p>
      </section>
      <div className="proof-list">
        {evidenceItems.map((item) => (
          <article className="proof-row" key={item.index}>
            <p className="exp-idx num">{item.index}</p>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
      <section className="band">
        <p className="actions">
          <Link className="btn btn-solid" href="/resume">
            Resume pack
          </Link>
          <Link className="btn" href="/approach">
            Approach
          </Link>
          <Link className="btn" href="/work">
            Work
          </Link>
        </p>
      </section>
    </article>
  );
}
