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
    <article className="contact-page contact-dense">
      <header className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Contact</h1>
      </header>
      <div className="contact-strip">
        <p className="contact-strip-lead">
          {site.location}. US remote or Salt Lake hybrid. EST overlap.
          <br />
          {site.authorization}
        </p>
        <p>
          <a className="cta-mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        <p className="note">{resume.scan}</p>
        <div className="contact-grid">
          <a className="btn btn-solid" href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a className="btn" href={site.pack.master} download>
            MASTER PDF
          </a>
          <a className="btn" href={site.pack.science} download>
            SCIENCE PDF
          </a>
          <a className="btn" href={site.pack.operator} download>
            OPERATOR PDF
          </a>
          <Link className="btn" href="/resume">
            Resume pack
          </Link>
          <a className="btn" href="/resume.doc" download="Marty-Smithson-Resume.doc">
            Word
          </a>
        </div>
      </div>
    </article>
  );
}
