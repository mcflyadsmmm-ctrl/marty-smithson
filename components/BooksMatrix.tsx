import Link from "next/link";
import { fleet, laneHref, type LaneId } from "@/lib/content";

function writerFor(id: LaneId): string {
  switch (id) {
    case "wholesale":
    case "cash":
    case "retail":
    case "fulfillment":
      return "One desk";
    case "portal":
      return "None";
    default: {
      const _never: never = id;
      return _never;
    }
  }
}

export function BooksMatrix({
  prefix = "/work/systems-fleet",
}: {
  prefix?: string;
}) {
  return (
    <figure className="figure books">
      <figcaption>
        <span className="field">Five books</span>
        {fleet.mapCaption}
      </figcaption>
      <div className="figure-body">
        <table className="matrix">
          <thead>
            <tr>
              <th scope="col">Book</th>
              <th scope="col">Writer</th>
              <th scope="col">Field rewrite</th>
            </tr>
          </thead>
          <tbody>
            {fleet.lanes.map((lane) => (
              <tr key={lane.id}>
                <td>
                  <Link href={laneHref(lane.id, prefix)}>{lane.short}</Link>
                </td>
                <td>{writerFor(lane.id)}</td>
                <td className="role-rule">No</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
