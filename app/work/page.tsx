import type { Metadata } from "next";
import { BrandRoster } from "@/components/BrandRoster";
import { CaseCards } from "@/components/CaseCards";
import { CtaRow } from "@/components/CtaRow";
import { DeskShelf } from "@/components/desks/DeskShelf";
import { HarborFeature } from "@/components/desks/HarborFeature";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Open the desks. Black Clover, Nutricost, and Mcfly Analytics Shopify App.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>Work</h1>
        <p className="lede">Open a desk. Black Clover, Nutricost, and the live Shopify product.</p>
        <CtaRow showDemo />
      </header>

      <div className="wrap">
        <HarborFeature />

        <section className="section" aria-labelledby="cases-title">
          <p className="field">Cases</p>
          <h2 id="cases-title">Black Clover, Nutricost, and the live desk</h2>
          <CaseCards />
        </section>

        <DeskShelf />

        <section className="section" aria-labelledby="clients-title">
          <p className="field">McFly Ads clients</p>
          <h2 id="clients-title">Named brands</h2>
          <BrandRoster wall />
        </section>
      </div>
    </article>
  );
}
