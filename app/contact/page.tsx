import type { Metadata } from "next";
import Link from "next/link";
import { resume } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `${site.location}. US remote or Salt Lake hybrid. EST overlap. ${site.authorization}`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article>
      <header className="case-hero">
        <p className="sec-id">
          <strong>07</strong> / Contact
        </p>
        <h1>Contact</h1>
        <p className="lede measure">
          {site.location}. US remote or Salt Lake hybrid. EST overlap. {site.authorization}
        </p>
        <p>
          <a className="cta-mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        <p>
          <a href={site.linkedin} rel="noreferrer" target="_blank">
            {site.linkedinLabel}
          </a>
        </p>
        <p className="actions">
          <Link className="btn" href="/resume">
            Download PDF
          </Link>
          <a className="btn" href="/resume.doc">
            Word (Workday)
          </a>
        </p>
        <p className="note">{resume.scan}</p>
      </header>
    </article>
  );
}
