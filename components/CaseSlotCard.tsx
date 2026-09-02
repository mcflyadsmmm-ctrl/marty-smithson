import Link from "next/link";

export function CaseSlotCard({
  title,
  note,
}: {
  title: string;
  note: string;
}) {
  return (
    <article className="story">
      <h3>{title}</h3>
      <p>{note}</p>
      <Link href="/work">Work</Link>
    </article>
  );
}
