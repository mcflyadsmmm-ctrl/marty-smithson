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

export function HarborFeature() {
  const [period, setPeriod] = useState<McflyPeriod>("month");
  const current = harborSample.periods[period];
  const delta = current.sales - current.lastYear;

  return (
    <section className="harbor" aria-labelledby="harbor-title">
      <div className="harbor-mast">
        <div>
          <p className="field">
            Live SAMPLE desk <span className="sample-mark">SAMPLE</span>
          </p>
          <h2 id="harbor-title">
            {site.mcflyProduct} <span className="live-mark">LIVE</span>
          </h2>
          <p className="quiet">
            Harbor Home Co · {harborSample.window}. Founder and Data Analytics
            Consultant, McFly Ads. Not a live client.
          </p>
          <p className="harbor-glance">
            <span>
              <em>This month</em>
              {money(harborSample.periods.month.sales)}
            </span>
            <span>
              <em>Ad spend</em>
              {money(harborSample.spend)}
            </span>
            <span>
              <em>Sales ÷ spend</em>
              {multiple(mcflyRoas())}
            </span>
          </p>
        </div>
        <p className="harbor-actions">
          <a href={site.mcflyDemo} rel="noreferrer" target="_blank">
            Harbor SAMPLE
          </a>
          <a href={site.mcfly} rel="noreferrer" target="_blank">
            {site.mcflyProduct}
          </a>
        </p>
      </div>

      <div className="harbor-board">
        <div className="desk-toolbar">
          <p className="field">
            {harborSample.shop} SAMPLE · as-of {harborSample.asOf}
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
            <p className="quiet">
              {percent(harborSample.returningShare)} of sales · {harborSample.newBuyers}{" "}
              new buyers
            </p>
          </div>
          <div className="kpi">
            <p className="field">90-day LTV</p>
            <p className="kpi-num">{money(harborSample.ltv90)}</p>
            <p className="quiet">{harborSample.daysToSecond} days to second</p>
          </div>
        </div>

        <SalesChart
          compact
          current={current.sales}
          lastYear={current.lastYear}
          label="Harbor Home Co SAMPLE against last year"
        />
        <p className="desk-note">
          SAMPLE · Harbor Home Co · not a live client.
        </p>
      </div>
    </section>
  );
}
