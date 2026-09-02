import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `${site.location}. US remote or Salt Lake hybrid. EST overlap.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="contact">
      <header className="page-head">
        <h1>Contact</h1>
        <p className="lede">{site.locationLine}</p>
      </header>
      <p>
        <a className="mail" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
      <p className="note">{site.authorization}</p>
      <p className="case-nav">
        <a href={site.linkedin} rel="noreferrer" target="_blank">
          LinkedIn
        </a>
        <Link href="/resume">Resume</Link>
      </p>
    </article>
  );
}
