export function money(value: number, compact = false): string {
  if (!Number.isFinite(value)) return "—";
  if (compact && Math.abs(value) >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }
  if (compact && Math.abs(value) >= 1_000) {
    return `$${(value / 1_000).toFixed(0)}k`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function multiple(value: number | null): string {
  if (value === null || !Number.isFinite(value)) return "—";
  return `${value.toFixed(2)}×`;
}

export function percent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export function signedMoney(value: number): string {
  const abs = money(Math.abs(value));
  if (value > 0) return `+${abs}`;
  if (value < 0) return `−${abs}`;
  return abs;
}

export function signedPercent(current: number, previous: number): string {
  if (previous === 0) return "—";
  const delta = (current - previous) / previous;
  const pts = Math.round(delta * 100);
  if (pts > 0) return `+${pts}%`;
  if (pts < 0) return `${pts}%`;
  return "0%";
}
