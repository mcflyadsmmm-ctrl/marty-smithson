import { fleet } from "@/lib/content";

export function ShiftCompare({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { shift } = fleet;

  return (
    <figure className={compact ? "figure shift is-compact" : "figure shift"}>
      <figcaption>
        <span className="field">The move</span>
        {shift.lead}
      </figcaption>
      <div className="figure-body">
        <div className="shift-grid">
          <section className="shift-col">
            <p className="field">{shift.before.label}</p>
            <h3>{shift.before.title}</h3>
            <ul>
              {shift.before.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
          <section className="shift-col">
            <p className="field">{shift.after.label}</p>
            <h3>{shift.after.title}</h3>
            <ul>
              {shift.after.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        </div>
        <p className="shift-note">About $20K a month left the bill. GCP class held around $30.</p>
      </div>
    </figure>
  );
}
