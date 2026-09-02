import type { Metadata } from "next";
import { resumePdfs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download Marty Smithson’s resume as a PDF.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <article className="resume">
      <header className="page-head">
        <h1>Resume</h1>
        <p className="lede">Three PDFs. Same person. Different tilt.</p>
        <p className="note">{site.locationLine}</p>
      </header>

      <ul className="pdf-cards">
        {resumePdfs.map((pdf) => (
          <li key={pdf.key}>
            <a className="pdf-card" href={pdf.href} download>
              <strong>{pdf.title}</strong>
              <span>{pdf.note}</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="resume-links">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.linkedin} rel="noreferrer" target="_blank">
          LinkedIn
        </a>
      </p>
    </article>
  );
}
