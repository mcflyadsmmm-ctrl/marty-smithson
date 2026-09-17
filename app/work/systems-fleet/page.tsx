import type { Metadata } from "next";
import Link from "next/link";
import { CaseArticle } from "@/components/CaseArticle";
import { CashMerDesk } from "@/components/desks/CashMerDesk";
import { IncrementalityDesk } from "@/components/desks/IncrementalityDesk";
import { fleet } from "@/lib/content";

export const metadata: Metadata = {
  title: "Black Clover",
  description:
    "Marketing measurement and BI at Black Clover. Cash MER, mix models, incrementality. I report to the CEO.",
  alternates: { canonical: "/work/systems-fleet" },
};

export default function SystemsFleetPage() {
  return (
    <CaseArticle
      title={fleet.title}
      lede={fleet.lead}
      meta={`${fleet.role}. ${fleet.reportsTo} ${fleet.dates}.`}
      beats={fleet.beats}
      body={fleet.body}
      points={fleet.points}
      links={
        <>
          <Link href="/work/desks/cash-mer">Cash MER desk</Link>
          <Link href="/work/desks/incrementality">Incrementality desk</Link>
          <Link href="/work">All work</Link>
        </>
      }
    >
      <section className="section" aria-labelledby="cash-mer-desk">
        <p className="field">Black Clover · synthetic book</p>
        <h2 id="cash-mer-desk">Cash MER</h2>
        <CashMerDesk />
      </section>
      <section className="section" aria-labelledby="incrementality-desk">
        <p className="field">Black Clover · synthetic book</p>
        <h2 id="incrementality-desk">Incrementality</h2>
        <IncrementalityDesk />
      </section>
    </CaseArticle>
  );
}
