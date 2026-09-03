import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Email ${site.name}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>Contact</h1>
        <p className="lede">
          Email is the direct path. LinkedIn is if you already live there.
        </p>
      </header>
      <div className="wrap resume-sheet">
        <p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <div className="resume-sign">
          <p>
            <a href={site.linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
