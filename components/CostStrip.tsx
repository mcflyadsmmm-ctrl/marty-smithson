import { fleet } from "@/lib/content";

export function CostStrip() {
  const { shift } = fleet;

  return (
    <figure className="cost-strip">
      <figcaption className="visually-hidden">{shift.title}</figcaption>
      <div className="cost-node">
        <p className="label">{shift.before.label}</p>
        <p className="cost-title">{shift.before.title}</p>
      </div>
      <div className="cost-delta">
        <p className="cost-delta-num">~$20K</p>
        <p className="label">a month off the bill</p>
      </div>
      <div className="cost-node is-now">
        <p className="label">{shift.after.label}</p>
        <p className="cost-title">{shift.after.title}</p>
        <p className="label">GCP class ~$30</p>
      </div>
    </figure>
  );
}
