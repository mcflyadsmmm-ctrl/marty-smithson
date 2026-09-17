"use client";

import Link from "next/link";
import { useState } from "react";
import { Sparkline } from "@/components/desks/charts";
import { DeskInstrument } from "@/components/desks/DeskInstrument";
import {
  cashMer,
  cashMerWeeks,
  desks,
  incrementalityChannels,
  mcflyPeek,
  nutricostCatalogs,
  type DeskSlug,
} from "@/lib/desks";

const previews: Record<DeskSlug, Array<number | null>> = {
  mcfly: [
    mcflyPeek.periods.month.lastYear / 12,
    mcflyPeek.periods.month.sales / 10,
    mcflyPeek.periods.month.sales / 8,
    mcflyPeek.periods.month.sales / 7,
    mcflyPeek.periods.month.sales / 6,
  ],
  "cash-mer": cashMerWeeks.map((week) => cashMer(week)),
  incrementality: incrementalityChannels.map(
    (item) => item.incremental / item.claimed,
  ),
  nutricost: nutricostCatalogs.map((item) => (item.sales - item.cogs) / item.sales),
};

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
      <div className="desk-shelf">
        {desks.map((desk) => {
          const selected = desk.slug === open;
          return (
            <button
              key={desk.slug}
              type="button"
              className={
                desk.slug === "mcfly"
                  ? "desk-tile is-live"
                  : "desk-tile"
              }
              aria-pressed={selected}
              onClick={() => setOpen(desk.slug)}
            >
              <p className="field">
                {desk.field}
                {desk.kind === "live" ? (
                  <>
                    {" "}
                    <span className="live-mark">LIVE</span>
                  </>
                ) : null}
              </p>
              <h3>{desk.title}</h3>
              <Sparkline values={previews[desk.slug]} label={`${desk.title} preview`} />
              <p className="quiet">{desk.blurb}</p>
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
