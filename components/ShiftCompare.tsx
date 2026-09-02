import { fleet } from "@/lib/content";

export function ShiftCompare() {
  const { shift } = fleet;

  return (
    <figure className="shift">
      <figcaption>{shift.title}</figcaption>
      <div className="shift-grid">
        <section>
          <p className="shift-label">{shift.before.label}</p>
          <h3>{shift.before.title}</h3>
          <ul>
            {shift.before.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
        <section>
          <p className="shift-label">{shift.after.label}</p>
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
