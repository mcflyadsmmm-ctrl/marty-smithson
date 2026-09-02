import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, caseBySlug, cases } from "@/lib/content";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cases.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseBySlug(slug);
  if (!study) return { title: "Work" };
  return {
    title: study.brand,
    description: study.headline,
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const study = caseBySlug(slug);
  if (!study) notFound();

  const blocks = [
    { title: "Situation", items: study.situation },
    { title: "Broken measurement", items: study.broken },
    { title: "Method", items: study.method },
    { title: "What ran", items: study.ran },
  ] as const;

  return (
    <article>
      <header className="case-hero">
        <p className="sec-id">{study.kicker}</p>
        <h1>{study.headline}</h1>
        <p className="lede measure">
          {study.role}. {study.dates}. {study.reportsTo}. {study.stat}.
        </p>
      </header>
      <div className="case-blocks">
        {blocks.map((block) => (
          <section className="case-block" key={block.title}>
            <h2>{block.title}</h2>
            {block.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </section>
        ))}
        {study.slug === "mcfly" ? (
          <section className="case-block">
            <h2>Named brands</h2>
            <p>Complete public roster. No larger unnamed book. No per-client ROAS invented for this page.</p>
            <div className="brand-grid mt-block">
              {brands.map((brand) => (
                <div className="brand-tile" key={brand.mark}>
                  <p className="brand-mark label">{brand.mark}</p>
                  <p className="brand-name">{brand.name}</p>
                  <p className="brand-cat label">McFly / {brand.category}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}
        <section className="case-block">
          <h2>What finance can do next</h2>
          <p>{study.next}</p>
        </section>
      </div>
      <p className="actions mt-block-lg">
        <Link className="btn" href="/work">
          All work
        </Link>
        <Link className="btn" href="/approach">
          Approach
        </Link>
        {study.slug === "mcfly" ? (
          <a className="btn" href={site.mcfly} rel="noreferrer" target="_blank">
            mcflyads.com
          </a>
        ) : null}
      </p>
    </article>
  );
}
