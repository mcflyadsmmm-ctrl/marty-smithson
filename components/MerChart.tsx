export function MerChart() {
  return (
    <div className="alloc" aria-hidden="true">
      <svg viewBox="0 0 720 420" className="alloc-svg">
        <g className="alloc-grid">
          {Array.from({ length: 13 }, (_, i) => (
            <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="420" />
          ))}
          {Array.from({ length: 8 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 60} x2="720" y2={i * 60} />
          ))}
        </g>
        <line className="alloc-be" x1="0" y1="248" x2="720" y2="248" />
        <path
          className="alloc-line"
          d="M20 310 C 80 300, 120 210, 180 230 S 280 140, 340 190 S 460 90, 520 150 S 620 70, 700 110"
        />
        <circle className="alloc-node" cx="180" cy="230" r="3.5" />
        <circle className="alloc-node" cx="340" cy="190" r="3.5" />
        <circle className="alloc-node" cx="520" cy="150" r="3.5" />
        <text x="24" y="40" className="alloc-label">
          GOOGLE
        </text>
        <text x="300" y="40" className="alloc-label">
          META
        </text>
        <text x="580" y="40" className="alloc-label">
          MICROSOFT
        </text>
        <text x="24" y="238" className="alloc-label is-accent">
          BREAK-EVEN
        </text>
        <text x="620" y="100" className="alloc-label is-accent">
          MER
        </text>
      </svg>
      <p className="alloc-cap">Illustration — not client data</p>
    </div>
  );
}
