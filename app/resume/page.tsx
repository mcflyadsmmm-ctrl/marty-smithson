import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
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
        <div className="resume-tools no-print">
          <PrintButton />
          <a className="btn" href="/resume.md" download="marty-smithson-resume.md">
            Markdown
          </a>
          <a className="btn" href="/resume.doc" download="Marty-Smithson-Resume.doc">
            Word
          </a>
        </div>
        <h2>{resume.role}</h2>
        <p className="resume-scan">{resume.scan}</p>
      </header>

      <section className="band">
        <h3 className="kicker">Summary</h3>
        <p>{resume.summary}</p>
      </section>

      {resume.jobs.map((job) => (
        <section className="resume-job" key={job.org}>
          <h3>{job.title}</h3>
          <p className="note">
            {job.org} · {job.dates}
          </p>
          <p className="note">{job.meta}</p>
          <ul>
            {job.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      <section className="band">
        <h3 className="kicker">Skills</h3>
        {resume.skills.map((group) => (
          <p key={group.label}>
            <strong>{group.label}:</strong> {group.items}
          </p>
        ))}
      </section>

      <section className="band">
        <h3 className="kicker">Education</h3>
        <p>{resume.education}</p>
      </section>
    </article>
  );
}
