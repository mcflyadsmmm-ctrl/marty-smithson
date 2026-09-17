"use client";

import { useState } from "react";
import { SplitBars } from "@/components/desks/charts";
import { incrementalityChannels } from "@/lib/desks";
import { money, percent } from "@/lib/format";

export function IncrementalityDesk() {
  const [id, setId] = useState(incrementalityChannels[1].id);
  const row = incrementalityChannels.find((item) => item.id === id) ?? incrementalityChannels[0];
  const keep = row.incremental / row.claimed;
  const cut = keep < 0.55;

  return (
    <div className="desk-stage">
      <div className="desk-toolbar">
        <p className="field">Synthetic holdout book · not production numbers</p>
        <div className="week-rail" role="group" aria-label="Channel">
          {incrementalityChannels.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={id === item.id}
              onClick={() => setId(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="kpi-strip">
        <div className="kpi">
          <p className="field">{row.label} claimed</p>
          <p className="kpi-num">{money(row.claimed, true)}</p>
          <p className="quiet">Platform conversion credit</p>
        </div>
        <div className="kpi">
          <p className="field">Incremental</p>
          <p className="kpi-num">{money(row.incremental, true)}</p>
          <p className="quiet">
            {row.holdouts} holdouts · {row.weeks} weeks
          </p>
        </div>
        <div className="kpi">
          <p className="field">Kept share</p>
          <p className="kpi-num">{percent(keep)}</p>
          <p className="quiet">Incremental ÷ claimed</p>
        </div>
        <div className="kpi">
          <p className="field">Call</p>
          <p className="kpi-num">{cut ? "Cut" : "Hold"}</p>
          <p className="quiet">{cut ? "The test did not keep the spend." : "The test kept the spend."}</p>
        </div>
      </div>

      <SplitBars
        claimed={row.claimed}
        incremental={row.incremental}
        label={`${row.label} claimed against incremental`}
      />

      <table className="desk-table">
        <caption>All three channels, same sale window</caption>
        <thead>
          <tr>
            <th scope="col">Channel</th>
            <th scope="col">Claimed</th>
            <th scope="col">Incremental</th>
            <th scope="col">Kept</th>
          </tr>
        </thead>
        <tbody>
          {incrementalityChannels.map((item) => (
            <tr key={item.id} className={item.id === id ? "is-active" : undefined}>
              <th scope="row">{item.label}</th>
              <td>{money(item.claimed)}</td>
              <td>{money(item.incremental)}</td>
              <td>{percent(item.incremental / item.claimed)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
