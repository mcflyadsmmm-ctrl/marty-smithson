import { proof } from "@/lib/content";

export function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Proof">
      {proof.map((item) => (
        <p key={item.label}>
          <strong>{item.label}</strong>
          <span className="quiet">{item.note}</span>
        </p>
      ))}
    </section>
  );
}
