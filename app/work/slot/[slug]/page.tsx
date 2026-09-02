import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseSlots, slotBySlug } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseSlots.map((slot) => ({ slug: slot.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const slot = slotBySlug(slug);
  if (!slot) return { title: "Slot" };
  return {
    title: `${slot.label} — ${slot.title}`,
    description: slot.purpose,
    alternates: { canonical: `/work/slot/${slot.slug}` },
    robots: { index: false, follow: false },
  };
}

export default async function CaseSlotPage({ params }: Props) {
  const { slug } = await params;
  const slot = slotBySlug(slug);
  if (!slot) notFound();

  return (
    <article>
      <header className="page-hero">
        <p className="eyebrow">{slot.label}</p>
        <h1>{slot.title}</h1>
        <p className="lede measure">{slot.purpose}</p>
      </header>
      <ol className="slot-steps slot-steps-page">
        {slot.steps.map((step, index) => (
          <li key={step.title}>
            <span className="exp-idx num">0{index + 1}</span>
            <div>
              <h2>{step.title}</h2>
              <p>{step.note}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="actions mt-block-lg">
        <Link className="btn" href="/work">
          All work
        </Link>
      </p>
    </article>
  );
}
