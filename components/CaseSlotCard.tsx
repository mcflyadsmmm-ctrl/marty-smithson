import Link from "next/link";
import type { CaseSlot } from "@/lib/content";

export function CaseSlotCard({ slot }: { slot: CaseSlot }) {
  return (
    <article className="slot-card">
      <p className="slot-label">{slot.label}</p>
      <h3 className="exp-brand">{slot.title}</h3>
      <p className="note">{slot.purpose}</p>
      <ol className="slot-steps">
        {slot.steps.map((step, index) => (
          <li key={step.title}>
            <span className="exp-idx num">0{index + 1}</span>
            <div>
              <strong>{step.title}</strong>
              <p>{step.note}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link className="more" href={`/work/slot/${slot.slug}`}>
        Open slot →
      </Link>
    </article>
  );
}
