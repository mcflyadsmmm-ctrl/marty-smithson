import Link from "next/link";
import { fleet, laneHref } from "@/lib/content";

export function FleetMap({
  compact = false,
}: {
  compact?: boolean;
}) {
  const prefix = compact ? "/work/systems-fleet" : "";

  return (
    <figure className={compact ? "figure arch is-compact" : "figure arch"}>
      <figcaption>
        <span className="field">Architecture</span>
        {fleet.mapCaption}
      </figcaption>
      <div className="figure-body">
        {compact ? (
          <ul className="arch-source-row">
            {fleet.sources.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ul>
        ) : null}
        <div className="arch-board">
          <div className="arch-col arch-sources-col">
            <p className="field">Sources</p>
            <ul className="arch-sources">
              {fleet.sources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          </div>
          <div className="arch-join arch-join-sources" aria-hidden="true">
            <span className="arch-join-line" />
          </div>
          <div className="arch-spine">
            <p className="field">Warehouse</p>
            <p className="arch-spine-title">Cloud Run</p>
            <p>BigQuery and Apps Script</p>
            <p className="arch-spine-note">GCP class around $30</p>
          </div>
          <div className="arch-join" aria-hidden="true">
            <span className="arch-join-line" />
          </div>
          <div className="arch-col">
            <p className="field">Five isolated books</p>
            <ol className="arch-lanes">
              {fleet.lanes.map((lane, index) => (
                <li key={lane.id}>
                  <Link href={laneHref(lane.id, prefix)}>
                    <span className="arch-idx">{String(index + 1).padStart(2, "0")}</span>
                    <span>{lane.short}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </figure>
  );
}
