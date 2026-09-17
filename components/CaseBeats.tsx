import type { CaseBeat } from "@/lib/content";

const labels = [
  ["problem", "Problem"],
  ["method", "Method"],
  ["decision", "Decision"],
  ["outcome", "Outcome"],
] as const;

export function CaseBeats({ beats }: { beats: CaseBeat }) {
  return (
    <dl className="case-beats">
      {labels.map(([key, label]) => (
        <div key={key}>
          <dt>{label}</dt>
          <dd>{beats[key]}</dd>
        </div>
      ))}
    </dl>
  );
}
