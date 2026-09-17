import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeskPage } from "@/components/desks/DeskPage";
import {
  assertDeskSlug,
  deskBySlug,
  desks,
  type DeskSlug,
} from "@/lib/desks";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return desks.map((desk) => ({ slug: desk.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const desk = deskBySlug(slug);
  if (!desk) return { title: "Desk" };
  return {
    title: desk.title,
    description: desk.blurb,
    alternates: { canonical: `/work/desks/${desk.slug}` },
  };
}

function isDeskSlug(value: string): value is DeskSlug {
  return desks.some((desk) => desk.slug === value);
}

export default async function DeskRoutePage({ params }: Props) {
  const { slug } = await params;
  if (!isDeskSlug(slug)) notFound();
  return <DeskPage slug={assertDeskSlug(slug)} />;
}
