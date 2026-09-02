import { proofStats } from "@/lib/content";

export function ProofStats() {
  return (
    <section className="stats" id="signal" aria-label="Proof">
      {proofStats.map((stat) => (
        <article className="stat" key={stat.unit + stat.figure}>
          <p className="figure">{stat.figure}</p>
          <p className="stat-unit label">{stat.unit}</p>
          <p className="stat-line">{stat.line}</p>
          <p className="stat-meta label">{stat.meta}</p>
        </article>
      ))}
    </section>
  );
}
