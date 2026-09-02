import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-tiny">
        <span>
          Marty Smithson
          <br />
          Portfolio
        </span>
        <span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {" · "}
          <a href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          {" · "}
          <Link href="/resume">Resume</Link>
        </span>
        <span className="footer-loc">
          {site.location}
          <br />
          US remote · EST overlap
        </span>
      </div>
    </footer>
  );
}
