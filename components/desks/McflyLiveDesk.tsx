"use client";

import { useState } from "react";
import { SalesChart } from "@/components/desks/charts";
import { harborSample, mcflyRoas, type McflyPeriod } from "@/lib/desks";
import { money, multiple, percent, signedMoney, signedPercent } from "@/lib/format";
import { site } from "@/lib/site";

const periods: { id: McflyPeriod; label: string }[] = [
  { id: "month", label: "This month" },
  { id: "quarter", label: "This quarter" },
  { id: "year", label: "This year" },
];

export function McflyLiveDesk() {
  const [period, setPeriod] = useState<McflyPeriod>("month");
  const current = harborSample.periods[period];
  const delta = current.sales - current.lastYear;

  return (
    <div className="desk-stage">
      <div className="desk-toolbar">
        <p className="field">
          {harborSample.shop} SAMPLE · {harborSample.window}
        </p>
        <div className="week-rail" role="tablist" aria-label="Window">
          {periods.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={period === item.id}
              onClick={() => setPeriod(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="kpi-strip">
        <div className="kpi">
          <p className="field">{periods.find((item) => item.id === period)?.label}</p>
          <p className="kpi-num">{money(current.sales)}</p>
          <p className="quiet">
            Last year {money(current.lastYear)} · {signedMoney(delta)} ·{" "}
            {signedPercent(current.sales, current.lastYear)}
          </p>
        </div>
        <div className="kpi">
          <p className="field">Typical order</p>
          <p className="kpi-num">{money(harborSample.typicalOrder)}</p>
          <p className="quiet">{current.orders} orders</p>
        </div>
        <div className="kpi">
          <p className="field">Returning dollars</p>
          <p className="kpi-num">{money(harborSample.returningDollars)}</p>
          <p className="quiet">{percent(harborSample.returningShare)} of sales</p>
        </div>
        <div className="kpi">
          <p className="field">90-day LTV</p>
          <p className="kpi-num">{money(harborSample.ltv90)}</p>
          <p className="quiet">{harborSample.daysToSecond} days to second</p>
        </div>
      </div>

      <dl className="harbor-spend">
        <div>
          <dt>Ad spend</dt>
          <dd>{money(harborSample.spend)}</dd>
        </div>
        <div>
          <dt>Sales ÷ spend</dt>
          <dd>{multiple(mcflyRoas())}</dd>
        </div>
        <div>
          <dt>Break-even</dt>
          <dd>
            {multiple(harborSample.breakEven)} @ {percent(harborSample.margin)}
          </dd>
        </div>
        <div>
          <dt>Weekend mix</dt>
          <dd>{percent(harborSample.weekendShare)}</dd>
        </div>
      </dl>

      <SalesChart
        compact
        current={current.sales}
        lastYear={current.lastYear}
        label="Harbor Home Co SAMPLE against last year"
      />

      <p className="desk-note">
        SAMPLE · not a live client. Spend is optional. No ad-network login.
      </p>
      <p className="close-links">
        <a className="pack-take" href={site.mcflyDemo} rel="noreferrer" target="_blank">
          Open live SAMPLE desk
        </a>
        <a href={site.mcfly} rel="noreferrer" target="_blank">
          {site.mcflyProduct}
        </a>
      </p>
    </div>
  );
}
