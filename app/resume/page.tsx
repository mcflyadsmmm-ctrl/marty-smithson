import type { Metadata } from "next";
import { resumePdfs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Marty Smithson’s resume, as PDFs.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>Resume</h1>
        <p className="lede">
          Three PDFs. Same facts, different emphasis.
        </p>
        <p className="quiet">{site.locationLine}</p>
      </header>

      <div className="wrap">
        <ul className="resume-chooser">
          {resumePdfs.map((pdf) => (
            <li key={pdf.key}>
              <a className="resume-card" href={pdf.href} download>
                <span className="label">PDF</span>
                <strong>{pdf.title}</strong>
                <span className="quiet">{pdf.use}</span>
                <span className="more">Download</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="close-links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </p>
      </div>
    </article>
  );
}
