import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { BrandRoster } from "@/components/BrandRoster";
import { caseBySlug, cases } from "@/lib/content";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cases.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "black-clover") {
    return { title: "Black Clover" };
  }
  const study = caseBySlug(slug);
  if (!study) return { title: "Work" };
  return {
    title: study.brand,
    description: study.lead,
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  if (slug === "black-clover") {
    redirect("/work/systems-fleet");
  }

  const study = caseBySlug(slug);
  if (!study) notFound();

  return (
    <article className="doc">
      <header className="open">
        <h1>{study.brand}</h1>
        <p className="quiet">
          {study.role}. {study.reportsTo}. {study.dates}.
        </p>
        <p className="open-line">{study.lead}</p>
      </header>

      {study.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {study.slug === "mcfly" ? (
        <section>
          <h2>Named brands</h2>
          <BrandRoster />
        </section>
      ) : null}

      <p className="close-links">
        <Link href="/work">All work</Link>
        {study.slug === "mcfly" ? (
          <a href={site.mcfly} rel="noreferrer" target="_blank">
            mcflyads.com
          </a>
        ) : null}
      </p>
    </article>
  );
}
