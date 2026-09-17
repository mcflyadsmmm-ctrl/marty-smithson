import type { CaseBeat } from "@/lib/content";

const labels = [
  ["problem", "Problem"],
  ["method", "Method"],
  ["decision", "Decision"],
  ["outcome", "Outcome"],
] as const;

type CaseBeatsLayout = "card" | "page";

export function CaseBeats({
  beats,
  layout = "page",
}: {
  beats: CaseBeat;
  layout?: CaseBeatsLayout;
}) {
  return (
    <dl className={`case-beats is-${layout}`}>
      {labels.map(([key, label]) => (
        <div key={key}>
          <dt>{label}</dt>
          <dd>{beats[key]}</dd>
        </div>
      ))}
    </dl>
  );
}
