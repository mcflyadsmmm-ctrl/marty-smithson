import type { Metadata } from "next";
import { resumePdfs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Marty Smithson’s resume, as PDFs. Same facts, different emphasis.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>Resume</h1>
        <p className="lede">Three PDFs. Same facts, different emphasis.</p>
      </header>

      <div className="wrap resume-sheet">
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
