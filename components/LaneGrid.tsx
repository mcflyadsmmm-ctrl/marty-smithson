import { fleet } from "@/lib/content";

export function LaneGrid() {
  return (
    <div className="lane-grid">
      {fleet.lanes.map((lane, index) => (
        <article className="lane-card" id={lane.id} key={lane.id}>
          <p className="label">{String(index + 1).padStart(2, "0")}</p>
          <h3>{lane.title}</h3>
          <p className="lane-scan">{lane.scan}</p>
          {lane.body.map((paragraph) => (
            <p className="quiet" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </article>
      ))}
    </div>
  );
}
