import type { Metadata } from "next";
import Link from "next/link";
import { CaseArticle } from "@/components/CaseArticle";
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
      body={fleet.body}
      points={fleet.points}
      links={
        <>
          <Link href="/work">All work</Link>
          <Link href="/resume">Resume</Link>
        </>
      }
    />
  );
}
