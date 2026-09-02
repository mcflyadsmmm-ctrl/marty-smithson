import type { Metadata } from "next";
import Link from "next/link";
import { ResumePack } from "@/components/ResumePack";
import { ceoClarifier, resume } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: resume.summary,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <article className="resume-page">
      <header className="page-hero">
        <h1>{site.name}</h1>
        <p className="note resume-contact">
          {site.locationLine}
          <br />
          {site.authorization}
          <span className="phone-print"> · {site.phone}</span>
        </p>
        <p className="resume-links no-print">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <Link href="/contact">Contact</Link>
        </p>
        <p className="note no-print">Phone is on the printed PDF only.</p>
        <h2>{resume.role}</h2>
        <p className="resume-scan">{resume.scan}</p>
        <p className="note measure">{ceoClarifier}</p>
      </header>

      <section className="band">
        <h3 className="kicker">Summary</h3>
        <p className="measure">{resume.summary}</p>
      </section>

      <section className="band no-print">
        <h3 className="kicker">Resume pack</h3>
        <p className="note measure">
          Download the pack PDFs. They are the source of truth. This page is a scan, not a second
          resume.
        </p>
        <ResumePack />
      </section>

      <section className="band">
        <h3 className="kicker">Education</h3>
        <p>{resume.education}</p>
      </section>
    </article>
  );
}
