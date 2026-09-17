"use client";

import { useState } from "react";
import { SalesChart } from "@/components/desks/charts";
import { mcflyPeek, mcflyRoas, type McflyPeriod } from "@/lib/desks";
import { money, multiple, percent, signedMoney, signedPercent } from "@/lib/format";
import { site } from "@/lib/site";

const periods: { id: McflyPeriod; label: string }[] = [
  { id: "month", label: "This month" },
  { id: "quarter", label: "This quarter" },
  { id: "year", label: "This year" },
];

export function McflyLiveDesk() {
  const [period, setPeriod] = useState<McflyPeriod>("month");
  const current = mcflyPeek.periods[period];
  const delta = current.sales - current.lastYear;

  return (
    <div className="desk-stage">
      <div className="desk-toolbar">
        <p className="field">Career peek of the live desk</p>
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
          <p className="kpi-num">{money(current.sales, true)}</p>
          <p className="quiet">
            Last year {money(current.lastYear, true)} · {signedMoney(delta)} ·{" "}
            {signedPercent(current.sales, current.lastYear)}
          </p>
        </div>
        <div className="kpi">
          <p className="field">Typical order</p>
          <p className="kpi-num">{money(mcflyPeek.typicalOrder)}</p>
          <p className="quiet">{current.orders} orders</p>
        </div>
        <div className="kpi">
          <p className="field">Returning dollars</p>
          <p className="kpi-num">{money(mcflyPeek.returningDollars, true)}</p>
          <p className="quiet">{percent(mcflyPeek.returningShare)} of sales</p>
        </div>
        <div className="kpi">
          <p className="field">90-day LTV</p>
          <p className="kpi-num">{money(mcflyPeek.ltv90)}</p>
          <p className="quiet">{mcflyPeek.daysToSecond} days to second</p>
        </div>
      </div>

      <SalesChart
        current={current.sales}
        lastYear={current.lastYear}
        label="This window against last year"
      />

      <dl className="metric-row">
        <div>
          <dt>Weekend mix</dt>
          <dd>{percent(mcflyPeek.weekendShare)}</dd>
        </div>
        <div>
          <dt>Spend added</dt>
          <dd>{money(mcflyPeek.spend, true)}</dd>
        </div>
        <div>
          <dt>Sales ÷ spend</dt>
          <dd>{multiple(mcflyRoas())}</dd>
        </div>
        <div>
          <dt>Break-even</dt>
          <dd>
            {multiple(mcflyPeek.breakEven)} @ {percent(mcflyPeek.margin)}
          </dd>
        </div>
      </dl>

      <p className="desk-note">
        Spend is optional. No ad-network login. The live product is at mcflyads.com.
      </p>
      <p className="close-links">
        <a className="pack-take" href={site.mcfly} rel="noreferrer" target="_blank">
          {site.mcflyProduct}
        </a>
      </p>
    </div>
  );
}
