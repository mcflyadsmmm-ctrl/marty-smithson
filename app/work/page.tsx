import type { Metadata } from "next";
import Link from "next/link";
import { workIndex } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Black Clover case: warehouse off Domo onto Cloud Run, partner portal for about 50 people, and the books leadership uses.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const { case: lead, also } = workIndex;

  return (
    <article className="work">
      <header className="page-head">
        <h1>Work</h1>
        <p className="lede">{workIndex.lead}</p>
      </header>

      <Link className="lead-case" href={lead.href}>
        <p className="kicker">{lead.role}</p>
        <h2>{lead.title}</h2>
        <p>{lead.body}</p>
        <span className="more">Read the case</span>
      </Link>

      <section className="also" aria-labelledby="also-title">
        <h2 id="also-title">Also</h2>
        <ul>
          {also.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <strong>{item.title}</strong>
                <span>{item.role}</span>
                {item.body}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
