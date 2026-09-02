import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `${site.location}. US remote or Salt Lake hybrid. EST overlap. ${site.authorization}`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="contact-page">
      <header className="page-hero">
        <h1>Contact</h1>
        <p className="lede measure">
          {site.location}. US remote or Salt Lake hybrid. EST overlap. {site.authorization}
        </p>
      </header>
      <p>
        <a className="cta-mail" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
      <p className="actions">
        <a className="btn btn-solid" href={site.linkedin} rel="noreferrer" target="_blank">
          LinkedIn
        </a>
        <Link className="btn" href="/resume">
          Resume / PDF
        </Link>
        <a className="btn" href="/resume.doc" download="Marty-Smithson-Resume.doc">
          Word
        </a>
      </p>
    </article>
  );
}
