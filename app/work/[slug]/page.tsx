import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { BrandRoster } from "@/components/BrandRoster";
import { CaseArticle } from "@/components/CaseArticle";
import { McflyLiveDesk } from "@/components/desks/McflyLiveDesk";
import { NutricostDesk } from "@/components/desks/NutricostDesk";
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
    <CaseArticle
      title={study.brand}
      live={study.live}
      lede={study.lead}
      meta={`${study.role}. ${study.reportsTo}. ${study.dates}.`}
      body={study.body}
      points={study.points}
      links={
        <>
          <Link href="/work">All work</Link>
          {study.slug === "mcfly" ? (
            <a href={site.mcfly} rel="noreferrer" target="_blank">
              {site.mcflyProduct}
            </a>
          ) : null}
        </>
      }
    >
      {study.slug === "mcfly" ? (
        <>
          <section className="section" aria-labelledby="mcfly-desk">
            <p className="field">Live product</p>
            <h2 id="mcfly-desk">
              {site.mcflyProduct} <span className="live-mark">LIVE</span>
            </h2>
            <McflyLiveDesk />
          </section>
          <section className="section" aria-labelledby="clients-title">
            <p className="field">McFly Ads clients</p>
            <h2 id="clients-title">Named brands</h2>
            <BrandRoster wall />
          </section>
        </>
      ) : null}
      {study.slug === "nutricost" ? (
        <section className="section" aria-labelledby="nutricost-desk">
          <p className="field">Nutricost · synthetic book</p>
          <h2 id="nutricost-desk">Margins and COGS</h2>
          <NutricostDesk />
        </section>
      ) : null}
    </CaseArticle>
  );
}
