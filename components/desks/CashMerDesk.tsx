"use client";

import { useState } from "react";
import { MerChart } from "@/components/desks/charts";
import {
  CASH_MER_BREAK_EVEN,
  cashMer,
  cashMerChannels,
  cashMerWeeks,
  platformRoas,
  weekSpend,
  type CashMerChannel,
} from "@/lib/desks";
import { money, multiple } from "@/lib/format";

const firstClosed = cashMerWeeks.findIndex((week) => week.closed);

export function CashMerDesk() {
  const [index, setIndex] = useState(firstClosed === -1 ? 0 : firstClosed);
  const [channel, setChannel] = useState<CashMerChannel | "all">("all");
  const week = cashMerWeeks[index];
  const spend = weekSpend(week);
  const mer = cashMer(week);
  const roas = platformRoas(week);
  const channelSpend =
    channel === "all"
      ? spend
      : week[channel];

  return (
    <div className="desk-stage">
      <div className="desk-toolbar">
        <p className="field">Synthetic week book · not production numbers</p>
        <div className="week-rail" role="group" aria-label="Channel">
          <button
            type="button"
            aria-pressed={channel === "all"}
            onClick={() => setChannel("all")}
          >
            All spend
          </button>
          {cashMerChannels.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={channel === item.id}
              onClick={() => setChannel(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="kpi-strip">
        <div className="kpi">
          <p className="field">Cash MER</p>
          <p className="kpi-num">{multiple(mer)}</p>
          <p className="quiet">
            {week.closed
              ? mer !== null && mer < CASH_MER_BREAK_EVEN
                ? "Below break-even. Cut."
                : "Above break-even."
              : "Fail-closed. Import did not certify."}
          </p>
        </div>
        <div className="kpi">
          <p className="field">Ledger sales</p>
          <p className="kpi-num">{week.closed ? money(week.sales, true) : "—"}</p>
          <p className="quiet">{week.label}</p>
        </div>
        <div className="kpi">
          <p className="field">{channel === "all" ? "Exact spend" : `${channel} spend`}</p>
          <p className="kpi-num">{week.closed ? money(channelSpend, true) : "—"}</p>
          <p className="quiet">Google, Meta, Microsoft</p>
        </div>
        <div className="kpi">
          <p className="field">Platform ROAS</p>
          <p className="kpi-num">{multiple(roas)}</p>
          <p className="quiet">Not the budget</p>
        </div>
      </div>

      <MerChart
        cash={cashMerWeeks.map((item) => cashMer(item))}
        platform={cashMerWeeks.map((item) => platformRoas(item))}
        breakEven={CASH_MER_BREAK_EVEN}
        selected={index}
        onSelect={setIndex}
        labels={cashMerWeeks.map((item) => item.label)}
      />

      <div className="week-rail" role="group" aria-label="Week">
        {cashMerWeeks.map((item, weekIndex) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={index === weekIndex}
            onClick={() => setIndex(weekIndex)}
          >
            {item.label}
            {item.closed ? "" : " gap"}
          </button>
        ))}
      </div>

      <table className="desk-table">
        <caption>Channel spend this week</caption>
        <thead>
          <tr>
            <th scope="col">Channel</th>
            <th scope="col">Spend</th>
            <th scope="col">Share</th>
          </tr>
        </thead>
        <tbody>
          {cashMerChannels.map((item) => {
            const value = week.closed ? week[item.id] : 0;
            return (
              <tr key={item.id}>
                <th scope="row">{item.label}</th>
                <td>{week.closed ? money(value) : "—"}</td>
                <td>{week.closed && spend ? `${Math.round((value / spend) * 100)}%` : "—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
