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
    <article className="page">
      <header className="page-head wrap">
        <h1>Contact</h1>
        <p className="lede">{site.locationLine}</p>
      </header>
      <div className="wrap">
        <p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p className="quiet">{site.authorization}</p>
        <p className="close-links">
          <a href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <Link href="/resume">Resume</Link>
        </p>
      </div>
    </article>
  );
}
