"use client";

import Link from "next/link";
import { useState } from "react";
import { DeskInstrument } from "@/components/desks/DeskInstrument";
import { desks, type DeskSlug } from "@/lib/desks";

export function DeskShelf({
  initial = "mcfly",
}: {
  initial?: DeskSlug;
}) {
  const [open, setOpen] = useState<DeskSlug>(initial);
  const active = desks.find((desk) => desk.slug === open) ?? desks[0];

  return (
    <section className="showcase" aria-labelledby="desks-title">
      <p className="field">Desks</p>
      <h2 id="desks-title">Open a desk</h2>
      <div className="desk-rail" role="tablist" aria-label="Desks">
        {desks.map((desk) => {
          const selected = desk.slug === open;
          return (
            <button
              key={desk.slug}
              type="button"
              role="tab"
              aria-selected={selected}
              className={desk.kind === "live" ? "is-live" : undefined}
              onClick={() => setOpen(desk.slug)}
            >
              <span className="field">
                {desk.field}
                {desk.kind === "live" ? (
                  <>
                    {" "}
                    <span className="live-mark">LIVE</span>
                  </>
                ) : null}
              </span>
              <strong>{desk.title}</strong>
              <span className="desk-rail-num">{desk.headline}</span>
              <span className="quiet">{desk.headlineNote}</span>
            </button>
          );
        })}
      </div>

      <div className="desk-open" id={`desk-${active.slug}`}>
        <header className="desk-open-head">
          <p className="field">
            {active.field}
            {active.kind === "live" ? (
              <>
                {" "}
                <span className="live-mark">LIVE</span>
              </>
            ) : null}
          </p>
          <h3>{active.title}</h3>
          <p className="quiet">{active.role}</p>
          <p className="close-links">
            <Link href={active.href}>Open full desk</Link>
          </p>
        </header>
        <DeskInstrument slug={active.slug} />
      </div>
    </section>
  );
}
