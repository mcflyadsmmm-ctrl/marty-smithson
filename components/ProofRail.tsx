import Link from "next/link";
import { fleet, laneHref } from "@/lib/content";
import { ShiftCompare } from "@/components/ShiftCompare";

export function ProofRail({
  prefix = "/work/systems-fleet",
  lanesOnly = false,
}: {
  prefix?: string;
  lanesOnly?: boolean;
}) {
  return (
    <div className="proof-rail" aria-label="Black Clover proof">
      {lanesOnly ? null : <ShiftCompare compact />}
      <ol className="proof-rail-lanes">
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
  );
}
