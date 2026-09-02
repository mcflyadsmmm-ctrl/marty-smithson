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
        <span className="label">Shift</span>
        {shift.title}
      </figcaption>
      <div className="shift-grid">
        <section className="shift-col">
          <p className="label">{shift.before.label}</p>
          <h3>{shift.before.title}</h3>
          <ul>
            {shift.before.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
        <div className="shift-delta">
          <p className="shift-delta-num">~$20K</p>
          <p className="shift-delta-unit">a month off the bill</p>
          <p className="shift-delta-hold">GCP class held around $30</p>
        </div>
        <section className="shift-col">
          <p className="label">{shift.after.label}</p>
          <h3>{shift.after.title}</h3>
          <ul>
            {shift.after.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      </div>
    </figure>
  );
}
