type Point = {
  x: number;
  y: number | null;
};

function scalePoints(
  values: Array<number | null>,
  width: number,
  height: number,
  pad = 8,
): Point[] {
  const finite = values.filter((value): value is number => value !== null);
  const min = Math.min(...finite, 0);
  const max = Math.max(...finite, 1);
  const span = max - min || 1;
  return values.map((value, index) => {
    const x =
      pad + (index / Math.max(values.length - 1, 1)) * (width - pad * 2);
    if (value === null) return { x, y: null };
    const y = height - pad - ((value - min) / span) * (height - pad * 2);
    return { x, y };
  });
}

function polyline(points: Point[]): string {
  return points
    .filter((point): point is Point & { y: number } => point.y !== null)
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x} ${point.y}`)
    .join(" ");
}

export function Sparkline({
  values,
  width = 220,
  height = 56,
  label,
}: {
  values: Array<number | null>;
  width?: number;
  height?: number;
  label: string;
}) {
  const points = scalePoints(values, width, height);
  return (
    <svg
      className="desk-chart"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={label}
    >
      <path d={polyline(points)} fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function MerChart({
  cash,
  platform,
  breakEven,
  selected,
  onSelect,
  labels,
}: {
  cash: Array<number | null>;
  platform: Array<number | null>;
  breakEven: number;
  selected: number;
  onSelect: (index: number) => void;
  labels: readonly string[];
}) {
  const width = 640;
  const height = 180;
  const pad = 16;
  const merged = [...cash, ...platform, breakEven];
  const finite = merged.filter((value): value is number => value !== null);
  const min = Math.min(...finite, 0);
  const max = Math.max(...finite, 1);
  const span = max - min || 1;
  const yFor = (value: number) =>
    height - pad - ((value - min) / span) * (height - pad * 2);
  const cashPoints = scalePoints(cash, width, height, pad);
  const platformPoints = scalePoints(platform, width, height, pad);
  const beY = yFor(breakEven);

  return (
    <svg
      className="desk-chart desk-chart-wide"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Cash MER against platform ROAS and break-even"
    >
      <line
        x1={pad}
        x2={width - pad}
        y1={beY}
        y2={beY}
        stroke="currentColor"
        strokeDasharray="4 4"
        strokeWidth="1"
        opacity="0.45"
      />
      <path
        d={polyline(platformPoints)}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.35"
      />
      <path
        d={polyline(cashPoints)}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      {cashPoints.map((point, index) => {
        if (point.y === null) {
          return (
            <rect
              key={labels[index]}
              x={point.x - 6}
              y={pad}
              width="12"
              height={height - pad * 2}
              fill="currentColor"
              opacity="0.08"
            />
          );
        }
        const active = index === selected;
        return (
          <g key={labels[index]}>
            <circle
              cx={point.x}
              cy={point.y}
              r={active ? 5 : 3}
              fill={active ? "currentColor" : "var(--plate)"}
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <rect
              x={point.x - 14}
              y={0}
              width="28"
              height={height}
              fill="transparent"
              role="button"
              tabIndex={0}
              aria-label={`${labels[index]} cash MER`}
              onClick={() => onSelect(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onSelect(index);
                }
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}

export function SplitBars({
  claimed,
  incremental,
  label,
}: {
  claimed: number;
  incremental: number;
  label: string;
}) {
  const max = Math.max(claimed, incremental, 1);
  return (
    <div className="split-bars" role="img" aria-label={label}>
      <div className="split-row">
        <span>Claimed</span>
        <span className="split-track">
          <span style={{ width: `${(claimed / max) * 100}%` }} />
        </span>
      </div>
      <div className="split-row">
        <span>Incremental</span>
        <span className="split-track is-ink">
          <span style={{ width: `${(incremental / max) * 100}%` }} />
        </span>
      </div>
    </div>
  );
}

export function SalesChart({
  current,
  lastYear,
  label,
  compact = false,
}: {
  current: number;
  lastYear: number;
  label: string;
  compact?: boolean;
}) {
  const width = 640;
  const height = 120;
  const steps = 12;
  const currentSeries = Array.from({ length: steps }, (_, index) => {
    const t = (index + 1) / steps;
    const wobble = 1 + Math.sin(index * 0.9) * 0.04;
    return (current / steps) * (0.55 + t * 0.9) * wobble;
  });
  const lastSeries = Array.from({ length: steps }, (_, index) => {
    const t = (index + 1) / steps;
    const wobble = 1 + Math.cos(index * 0.7) * 0.03;
    return (lastYear / steps) * (0.55 + t * 0.9) * wobble;
  });
  const currentPoints = scalePoints(currentSeries, width, height);
  const lastPoints = scalePoints(lastSeries, width, height);

  return (
    <svg
      className={compact ? "desk-chart desk-chart-harbor" : "desk-chart desk-chart-wide"}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={label}
    >
      <path
        className="chart-prior"
        d={polyline(lastPoints)}
        fill="none"
        strokeWidth="1.5"
      />
      <path
        className="chart-now"
        d={polyline(currentPoints)}
        fill="none"
        strokeWidth="2.25"
      />
    </svg>
  );
}
