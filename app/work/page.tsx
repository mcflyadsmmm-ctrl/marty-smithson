import type { Metadata } from "next";
import Link from "next/link";
import { FleetMap } from "@/components/FleetMap";
import { workPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Black Clover — warehouse off Domo onto Cloud Run, isolated books, and the partner portal. Notes on Nutricost and McFly Ads.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const { blackClover, nutricost, mcfly } = workPage;

  return (
    <article className="doc">
      <header className="open">
        <h1>Work</h1>
        <p className="open-line">{workPage.lead}</p>
      </header>

      <section>
        <h2>{blackClover.title}</h2>
        <p className="quiet">{blackClover.role}</p>
        <p>{blackClover.body}</p>
        <FleetMap compact />
        <p>
          <Link href={blackClover.href}>{blackClover.more}</Link>
        </p>
      </section>

      <section>
        <h2>{nutricost.title}</h2>
        <p className="quiet">{nutricost.role}</p>
        <p>{nutricost.body}</p>
        <p>
          <Link href={nutricost.href}>{nutricost.more}</Link>
        </p>
      </section>

      <section>
        <h2>{mcfly.title}</h2>
        <p className="quiet">{mcfly.role}</p>
        <p>{mcfly.body}</p>
        <p>
          <Link href={mcfly.href}>{mcfly.more}</Link>
        </p>
      </section>
    </article>
  );
}
