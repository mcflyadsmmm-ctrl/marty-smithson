import type { Metadata } from "next";
import Link from "next/link";
import { resume } from "@/lib/content";
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
        <p className="eyebrow">Resume pack</p>
        <h1>{site.name}</h1>
        <p className="lede measure">
          Pack PDFs are the source of truth. Pick the tilt for the seat — do not use a divergent HTML
          copy.
        </p>
        <p className="resume-scan">{resume.scan}</p>
        <p className="note measure">
          {site.locationLine}. {site.authorization}. CEO title applies only to McFly Ads; at Black
          Clover I report to the CEO; at Nutricost I reported to the CMO.
        </p>
        <div className="resume-tools pack-grid no-print">
          <a className="btn btn-solid" href={site.pack.master} download>
            MASTER PDF
          </a>
          <a className="btn" href={site.pack.science} download>
            SCIENCE PDF
          </a>
          <a className="btn" href={site.pack.operator} download>
            OPERATOR PDF
          </a>
        </div>
        <p className="note no-print">
          SCIENCE for measurement / MMM seats. OPERATOR for brand growth / paid. MASTER default.
        </p>
        <p className="actions no-print">
          <a className="btn" href={`mailto:${site.email}`}>
            Email
          </a>
          <a className="btn" href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <Link className="btn" href="/contact">
            Contact
          </Link>
          <a className="btn" href="/resume.doc" download="Marty-Smithson-Resume.doc">
            Word
          </a>
        </p>
      </header>

      <section className="band resume-scan-only">
        <h2 className="kicker">On-page scan</h2>
        <p className="measure">{resume.summary}</p>
        <p className="note measure">
          Full bullets live in the PDFs above so ATS and humans see the same pack Resume owns.
        </p>
        <h3>{resume.role}</h3>
        <ul className="resume-desk-list">
          {resume.jobs.map((job) => (
            <li key={job.org}>
              <strong>{job.title}</strong> — {job.org} · {job.dates}
              <br />
              <span className="note">{job.meta}</span>
            </li>
          ))}
        </ul>
        <p className="measure">
          <strong>Education:</strong> {resume.education}
        </p>
      </section>
    </article>
  );
}
