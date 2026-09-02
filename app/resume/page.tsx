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
    <article className="doc">
      <header className="open">
        <h1>Resume</h1>
        <p className="open-line">A few PDFs, depending on what you want to look at.</p>
        <p className="quiet">{site.locationLine}</p>
      </header>

      <ul className="file-list">
        {resumePdfs.map((pdf) => (
          <li key={pdf.key}>
            <a href={pdf.href} download>
              {pdf.title}
            </a>
            <span>{pdf.note}</span>
          </li>
        ))}
      </ul>

      <p className="close-links">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.linkedin} rel="noreferrer" target="_blank">
          LinkedIn
        </a>
      </p>
    </article>
  );
}
