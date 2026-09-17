"use client";

import { useState } from "react";
import {
  catalogMargin,
  nutricostCatalogs,
} from "@/lib/desks";
import { money, percent } from "@/lib/format";

export function NutricostDesk() {
  const [id, setId] = useState(nutricostCatalogs[0].id);
  const [view, setView] = useState<"lastClick" | "blended">("blended");
  const row = nutricostCatalogs.find((item) => item.id === id) ?? nutricostCatalogs[0];
  const margin = catalogMargin(row);
  const contribution = view === "lastClick" ? row.lastClick : row.blended;
  const totalSales = nutricostCatalogs.reduce((sum, item) => sum + item.sales, 0);
  const totalCogs = nutricostCatalogs.reduce((sum, item) => sum + item.cogs, 0);

  return (
    <div className="desk-stage">
      <div className="desk-toolbar">
        <p className="field">Synthetic catalog book · not production numbers</p>
        <div className="week-rail" role="group" aria-label="Contribution view">
          <button
            type="button"
            aria-pressed={view === "blended"}
            onClick={() => setView("blended")}
          >
            Blended
          </button>
          <button
            type="button"
            aria-pressed={view === "lastClick"}
            onClick={() => setView("lastClick")}
          >
            Last-click
          </button>
        </div>
      </div>

      <div className="kpi-strip">
        <div className="kpi">
          <p className="field">{row.name}</p>
          <p className="kpi-num">{money(row.sales, true)}</p>
          <p className="quiet">{row.kind}</p>
        </div>
        <div className="kpi">
          <p className="field">COGS</p>
          <p className="kpi-num">{money(row.cogs, true)}</p>
          <p className="quiet">{percent(row.cogs / row.sales)} of sales</p>
        </div>
        <div className="kpi">
          <p className="field">Margin</p>
          <p className="kpi-num">{percent(margin)}</p>
          <p className="quiet">{money(row.sales - row.cogs, true)} after COGS</p>
        </div>
        <div className="kpi">
          <p className="field">{view === "blended" ? "Blended share" : "Last-click share"}</p>
          <p className="kpi-num">{percent(contribution)}</p>
          <p className="quiet">
            Portfolio sales {money(totalSales, true)} · COGS {money(totalCogs, true)}
          </p>
        </div>
      </div>

      <table className="desk-table desk-table-click">
        <caption>Thirteen catalogs under one station</caption>
        <thead>
          <tr>
            <th scope="col">Catalog</th>
            <th scope="col">Kind</th>
            <th scope="col">Sales</th>
            <th scope="col">COGS</th>
            <th scope="col">Margin</th>
            <th scope="col">{view === "blended" ? "Blended" : "Last-click"}</th>
          </tr>
        </thead>
        <tbody>
          {nutricostCatalogs.map((item) => (
            <tr key={item.id} className={item.id === id ? "is-active" : undefined}>
              <th scope="row">
                <button type="button" onClick={() => setId(item.id)}>
                  {item.name}
                </button>
              </th>
              <td>{item.kind}</td>
              <td>{money(item.sales)}</td>
              <td>{money(item.cogs)}</td>
              <td>{percent(catalogMargin(item))}</td>
              <td>{percent(view === "blended" ? item.blended : item.lastClick)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
