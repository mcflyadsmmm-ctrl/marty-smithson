import { proof } from "@/lib/content";

export function ProofStrip() {
  return (
    <section aria-label="Proof">
      <ul className="proof-strip">
        {proof.map((item) => (
          <li key={item.label}>
            <strong>{item.label}</strong>
            <span className="quiet">{item.note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
