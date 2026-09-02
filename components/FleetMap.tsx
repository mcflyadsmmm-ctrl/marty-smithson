import Link from "next/link";
import { fleet, laneHref } from "@/lib/content";

export function FleetMap({
  compact = false,
}: {
  compact?: boolean;
}) {
  const prefix = compact ? "/work/systems-fleet" : "";

  return (
    <figure className={compact ? "fleet-map is-compact" : "fleet-map"}>
      <figcaption>{fleet.mapCaption}</figcaption>
      {compact ? null : (
        <ul className="fleet-sources">
          {fleet.sources.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
      )}
      <ol className="fleet-lanes">
        {fleet.lanes.map((lane) => (
          <li key={lane.id}>
            <Link href={laneHref(lane.id, prefix)}>{lane.short}</Link>
          </li>
        ))}
      </ol>
    </figure>
  );
}
