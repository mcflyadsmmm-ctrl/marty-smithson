import type { Metadata } from "next";
import { CtaRow } from "@/components/CtaRow";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Email ${site.name}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>Contact</h1>
        <p className="lede">
          Email is the direct path. LinkedIn is if you already live there.
        </p>
        <p className="quiet">{site.locationLine}</p>
        <CtaRow />
      </header>
    </article>
  );
}
