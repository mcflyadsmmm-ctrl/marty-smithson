import { fleet } from "@/lib/content";

export function CostStrip() {
  const { shift } = fleet;

  return (
    <figure className="cost-strip">
      <figcaption className="visually-hidden">{shift.title}</figcaption>
      <div className="cost-node">
        <p className="field">{shift.before.label}</p>
        <p className="cost-title">{shift.before.title}</p>
        <p className="quiet">{shift.before.points[0]}</p>
      </div>
      <div className="cost-node">
        <p className="field">{shift.after.label}</p>
        <p className="cost-title">{shift.after.title}</p>
        <p className="quiet">Same warehouse work, held to a GCP class around $30.</p>
      </div>
      <p className="cost-note">About $20K a month left the bill. The work did not change to make the move look good.</p>
    </figure>
  );
}
