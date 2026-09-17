import Link from "next/link";
import { CtaRow } from "@/components/CtaRow";
import { DeskInstrument } from "@/components/desks/DeskInstrument";
import { desks, type DeskSlug } from "@/lib/desks";

export function DeskPage({ slug }: { slug: DeskSlug }) {
  const desk = desks.find((item) => item.slug === slug);
  if (!desk) return null;

  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>
          {desk.title}
          {desk.kind === "live" ? (
            <>
              {" "}
              <span className="live-mark">LIVE</span>
            </>
          ) : null}
        </h1>
        <p className="lede">{desk.blurb}</p>
        <p className="quiet">{desk.role}</p>
        <p className="quiet">{desk.field}</p>
        <CtaRow />
      </header>
      <div className="wrap">
        <DeskInstrument slug={desk.slug} />
        <p className="close-links">
          <Link href="/">All desks</Link>
          <Link href="/work">Work</Link>
        </p>
      </div>
    </article>
  );
}
