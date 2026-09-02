import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SAMPLE — Northline MER desk",
  description:
    "SAMPLE / illustrative only. Fictional Northline Apparel cash-MER desk: brand+period → KPIs → ledger/CPA → channels → platform-vs-cash → move budget. Not client results.",
  alternates: { canonical: "/work/sample/northline" },
  robots: { index: false, follow: true },
};

const modules = [
  "Overview",
  "Scoreboard",
  "Ledger",
  "CPA",
  "Spend Plan",
  "Channels",
  "Plan",
  "YoY",
  "Goals",
  "Retain",
  "Customers",
  "Growth",
  "LTV",
  "Honesty",
  "Platform-vs-Cash",
  "Click Allocation",
  "Email & Promo",
  "Audit",
] as const;

export default function NorthlineSamplePage() {
  return (
    <article className="sample-page">
      <p className="sample-banner" role="status">
        SAMPLE / illustrative — fictional brand “Northline Apparel”. Cash MER desk shape vs Domo-style
        sales + total-cost performance — NOT platform ROAS. Not Black Clover, not Nutricost, not client
        results. Every number below is invented for method shape only.
      </p>

      <header className="page-hero">
        <p className="eyebrow">SAMPLE method</p>
        <h1>Cash MER desk → budget moved</h1>
        <p className="lede measure">
          Decision flow: pick sample brand + period → KPI cards vs targets → drill spend / ledger / CPA
          → channel mix → platform-vs-cash honesty → move budget. GeoLift / MMM live on separate SAMPLE
          Recast and GeoLift bands — not in this chrome.
        </p>
      </header>

      <section className="sample-panel" aria-labelledby="context-title">
        <p className="eyebrow">00 · Context</p>
        <h2 id="context-title">Portfolio · brand · period</h2>
        <p className="measure">
          Sticky SAMPLE selectors set the book before anyone argues ROAS. Same spine can list multiple
          fictional brands; this page stays on Northline.
        </p>
        <div className="sample-context">
          <label>
            Brand
            <span className="sample-select">Northline Apparel</span>
          </label>
          <label>
            Period
            <span className="sample-select">MTD · SAMPLE</span>
          </label>
          <div className="sample-chips" aria-label="SAMPLE period chips">
            <span>YTD</span>
            <span className="is-active">QTD</span>
            <span>MTD</span>
          </div>
        </div>
      </section>

      <section className="sample-panel" aria-labelledby="score-title">
        <p className="eyebrow">01 · Scoreboard</p>
        <h2 id="score-title">KPI cards vs targets</h2>
        <p className="measure">
          SAMPLE cards read cash MER, total cost, and contribution against goals — Domo-style sales
          truth, not the ad manager.
        </p>
        <div className="sample-kpis" aria-label="SAMPLE KPI cards">
          <div className="sample-kpi">
            <p className="sample-kpi-label">Cash MER</p>
            <p className="sample-kpi-value num">2.4×</p>
            <p className="note">vs SAMPLE target 2.2×</p>
          </div>
          <div className="sample-kpi">
            <p className="sample-kpi-label">Ledger sales</p>
            <p className="sample-kpi-value num">$1.8M</p>
            <p className="note">after returns · invented</p>
          </div>
          <div className="sample-kpi">
            <p className="sample-kpi-label">Total media cost</p>
            <p className="sample-kpi-value num">$750K</p>
            <p className="note">SAMPLE book only</p>
          </div>
          <div className="sample-kpi">
            <p className="sample-kpi-label">Break-even MER</p>
            <p className="sample-kpi-value num">1.9×</p>
            <p className="note">1 ÷ contribution margin</p>
          </div>
        </div>
      </section>

      <section className="sample-panel" aria-labelledby="modules-title">
        <p className="eyebrow">02 · Story beats on the desk</p>
        <h2 id="modules-title">What you open before you allocate</h2>
        <p className="measure">
          Story chrome for the desk — not a product screenshot. Labels below are the kinds of views an
          operator flips through before trusting a channel chip: ledger and CPA before spend, honesty
          before scale, email in the mix not as vanity opens.
        </p>
        <div className="sample-chips sample-modules" aria-label="SAMPLE story beats">
          {modules.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
        <p className="note">
          SAMPLE labels only — illustrative navigation, not a claim that a public demo ships every pane.
        </p>
        <div className="sample-charts" aria-hidden="true">
          <figure className="sample-chart">
            <figcaption>SAMPLE — channel mix (illustrative)</figcaption>
            <svg viewBox="0 0 320 120" width="100%" height="120">
              <rect x="20" y="40" width="40" height="60" fill="#93c5fd" />
              <rect x="80" y="25" width="40" height="75" fill="#60a5fa" />
              <rect x="140" y="55" width="40" height="45" fill="#3b82f6" />
              <rect x="200" y="70" width="40" height="30" fill="#2563eb" />
              <text x="20" y="115" fontSize="10" fill="#64748b">
                Google Meta MSFT Email
              </text>
            </svg>
            <p className="note">Invented bars. Not a real book.</p>
          </figure>
          <figure className="sample-chart">
            <figcaption>SAMPLE — cash MER vs break-even</figcaption>
            <svg viewBox="0 0 320 120" width="100%" height="120">
              <line x1="20" y1="70" x2="300" y2="70" stroke="#94a3b8" strokeDasharray="4 3" />
              <polyline
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
                points="20,90 70,78 120,82 170,55 220,48 270,52 300,40"
              />
              <text x="22" y="66" fontSize="10" fill="#64748b">
                break-even
              </text>
            </svg>
            <p className="note">Trend is fictional. No lift % claimed as real.</p>
          </figure>
        </div>
      </section>

      <section className="sample-panel" aria-labelledby="honesty-title">
        <p className="eyebrow">03 · Platform-vs-Cash · Honesty</p>
        <h2 id="honesty-title">Reconcile claims before you scale</h2>
        <p className="measure">
          SAMPLE honesty module: platform-reported conversions vs cash / ledger. When Meta and Google
          both claim the same order, the desk does not double-count — it waits on backend truth (or a
          holdout elsewhere). Email sits in Click Allocation / Email & Promo as a funded channel, not
          vanity opens.
        </p>
        <ul className="sample-decide">
          <li>
            <strong>Platform-vs-Cash</strong> — ad manager rows vs ledger sales after returns.
          </li>
          <li>
            <strong>Click Allocation</strong> — SAMPLE path view; still subordinated to cash MER.
          </li>
          <li>
            <strong>Email & Promo / Klaviyo-shaped</strong> — promo spend in the same MER spine.
          </li>
          <li>
            <strong>Audit</strong> — who changed the plan and when (ops credibility for finance).
          </li>
        </ul>
      </section>

      <section className="sample-panel" aria-labelledby="move-title">
        <p className="eyebrow">04 · Move budget</p>
        <h2 id="move-title">Cut / hold / scale from cash MER</h2>
        <p className="measure">
          The operator presenting to finance names the next period’s allocation. Below cash MER
          break-even, cut or hold — platform ROAS does not get a defense. No invented lift percentage;
          the artifact is the budget that moved.
        </p>
        <table className="sample-table">
          <caption>SAMPLE allocation change — illustrative only</caption>
          <thead>
            <tr>
              <th>Channel</th>
              <th>Call</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Meta</td>
              <td>Cut</td>
              <td>Below cash MER break-even</td>
            </tr>
            <tr>
              <td>Google</td>
              <td>Hold</td>
              <td>At break-even band</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>Hold</td>
              <td>In mix via Email & Promo</td>
            </tr>
            <tr>
              <td>Microsoft</td>
              <td>Scale (modest)</td>
              <td>Above break-even in SAMPLE book</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="sample-panel">
        <p className="eyebrow">Causal tests (separate SAMPLE)</p>
        <h2>GeoLift / MMM live elsewhere</h2>
        <p className="measure">
          This MER desk chrome does not pretend to be Meridian or GeoLift. Those SAMPLE method folders
          stay on their own bands — use them when the question is causal inference, not the weekly
          allocate loop.
        </p>
        <p className="actions">
          <a className="btn" href={site.proof.recast} rel="noreferrer" target="_blank">
            SAMPLE Recast memo
          </a>
          <a className="btn" href={site.proof.geolift} rel="noreferrer" target="_blank">
            SAMPLE GeoLift
          </a>
          <Link className="btn" href="/evidence#mix-call">
            Science proof object
          </Link>
        </p>
      </section>

      <p className="actions mt-block-lg">
        <Link className="btn btn-solid" href="/work">
          Real desks
        </Link>
        <Link className="btn" href="/approach">
          Approach
        </Link>
        <Link className="btn" href="/evidence">
          Evidence
        </Link>
      </p>
    </article>
  );
}
