import type { Metadata } from "next";
import { resume, resumePdfs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Marty Smithson’s resume. Same facts, different PDF emphasis.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>Resume</h1>
        <p className="lede">{resume.role}</p>
        <p className="quiet">{site.locationLine}</p>
        <p className="quiet">{resume.education}</p>
      </header>

      <div className="wrap resume-sheet">
        <p className="section-copy">{resume.summary}</p>

        <table className="pack-ledger">
          <caption>
            If they did not ask for a lane, send the full resume.
          </caption>
          <thead>
            <tr>
              <th scope="col">Pack</th>
              <th scope="col">When to send it</th>
              <th scope="col">
                <span className="visually-hidden">Download</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {resumePdfs.map((pdf) => {
              const primary = pdf.key === "full";
              return (
                <tr className={primary ? "is-primary" : undefined} key={pdf.key}>
                  <td>{pdf.title}</td>
                  <td className="pack-use">{pdf.use}</td>
                  <td>
                    <a
                      className={primary ? "pack-take" : "pack-link"}
                      href={pdf.href}
                      download
                    >
                      Download
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <section className="section" aria-labelledby="experience-title">
          <p className="field">Experience</p>
          <h2 id="experience-title" className="visually-hidden">
            Experience
          </h2>
          <ol className="resume-jobs">
            {resume.jobs.map((job) => (
              <li key={`${job.org}-${job.title}`}>
                <h3>{job.title}</h3>
                <p className="quiet">
                  {job.org} · {job.dates} · {job.meta}
                </p>
                <ul>
                  {job.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" aria-labelledby="skills-title">
          <p className="field">Skills</p>
          <h2 id="skills-title" className="visually-hidden">
            Skills
          </h2>
          {resume.skills.map((group) => (
            <p key={group.label}>
              <strong>{group.label}.</strong> {group.items}
            </p>
          ))}
        </section>

        <section className="section" aria-labelledby="school-title">
          <p className="field">Education</p>
          <h2 id="school-title" className="visually-hidden">
            Education
          </h2>
          <p>{resume.education}</p>
        </section>

        <div className="resume-sign">
          <p className="quiet">
            Email if you want to talk before you open a file.
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
    </article>
  );
}
