import type { CaseBeat } from "@/lib/content";

const labels = [
  ["problem", "Problem"],
  ["method", "Method"],
  ["decision", "Decision"],
  ["outcome", "Outcome"],
] as const;

export function CaseBeats({
  beats,
  compact = false,
}: {
  beats: CaseBeat;
  compact?: boolean;
}) {
  return (
    <dl className={compact ? "case-beats case-beats-stack" : "case-beats case-beats-board"}>
      {labels.map(([key, label]) => (
        <div key={key}>
          <dt>{label}</dt>
          <dd>{beats[key]}</dd>
        </div>
      ))}
    </dl>
  );
}
