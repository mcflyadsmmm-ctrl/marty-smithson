import type { Metadata } from "next";
import { BrandRoster } from "@/components/BrandRoster";
import { CaseCards } from "@/components/CaseCards";
import { CtaRow } from "@/components/CtaRow";
import { DeskShelf } from "@/components/desks/DeskShelf";
import { GtmBridge } from "@/components/GtmBridge";
import { HarborFeature } from "@/components/desks/HarborFeature";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Black Clover measurement: Meridian MMM, incrementality, cash MER, and GTM analytics from the warehouse to the partner portal. Nutricost marketing data science. Mcfly Analytics Shopify App.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>Work</h1>
        <p className="lede">
          Black Clover, Nutricost, and Mcfly Analytics Shopify App. Harbor Home
          Co SAMPLE sits with the product note.
        </p>
        <CtaRow />
      </header>

      <div className="wrap">
        <section className="section" aria-labelledby="cases-title">
          <p className="field">Cases</p>
          <h2 id="cases-title">Black Clover, Nutricost, and the live desk</h2>
          <CaseCards />
        </section>

        <GtmBridge />

        <HarborFeature />

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
