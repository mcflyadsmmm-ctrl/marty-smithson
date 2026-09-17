import type { Metadata } from "next";
import { CtaRow } from "@/components/CtaRow";
import { DeskShelf } from "@/components/desks/DeskShelf";

export const metadata: Metadata = {
  title: "Desks",
  description:
    "Open the measurement desks: Mcfly Analytics Shopify App LIVE, Black Clover cash MER and incrementality, Nutricost margins and COGS.",
  alternates: { canonical: "/work/desks" },
};

export default function DesksIndexPage() {
  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>Desks</h1>
        <p className="lede">Open one. The live product is first.</p>
        <CtaRow />
      </header>
      <div className="wrap">
        <DeskShelf />
      </div>
    </article>
  );
}
