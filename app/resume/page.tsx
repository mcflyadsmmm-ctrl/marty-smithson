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
    <article>
      <header className="resume-top">
        <p className="eyebrow">Master resume</p>
        <h1>{site.name}</h1>
        <p className="note wide">
          {site.locationLine} · {site.authorization} ·{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> ·{" "}
          <a href={site.linkedin} rel="noreferrer" target="_blank">
            {site.linkedinLabel}
          </a>{" "}
          · <Link href="/contact">{site.url.replace("https://", "")}/contact</Link>
          <span className="phone-print"> · {site.phone}</span>
        </p>
        <p className="note no-print">Phone is on the printed PDF only.</p>
        <div className="resume-tools no-print">
          <PrintButton />
          <a className="btn" href="/resume.md" download="marty-smithson-resume.md">
            Markdown
          </a>
          <a className="btn" href="/resume.doc" download="Marty-Smithson-Resume.doc">
            Word (Workday)
          </a>
          <Link className="btn" href="/contact">
            Contact
          </Link>
        </div>
        <h2>{resume.role}</h2>
        <p className="resume-scan">{resume.scan}</p>
      </header>

      <section className="band">
        <p className="kicker">Summary</p>
        <p className="measure">{resume.summary}</p>
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
        <p className="kicker">Skills</p>
        {resume.skills.map((group) => (
          <p key={group.label} className="measure">
            <strong>{group.label}:</strong> {group.items}
          </p>
        ))}
      </section>

      <section className="band">
        <p className="kicker">Education</p>
        <p className="measure">{resume.education}</p>
      </section>
    </article>
  );
}
