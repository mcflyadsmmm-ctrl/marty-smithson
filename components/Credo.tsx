import { credo } from "@/lib/content";

export function Credo() {
  return (
    <section className="credo" aria-labelledby="credo-title">
      <h2 id="credo-title">{credo.mark}</h2>
      <p>{credo.line}</p>
    </section>
  );
}
