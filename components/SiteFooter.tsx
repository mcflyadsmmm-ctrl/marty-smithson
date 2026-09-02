import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-tiny">
        <span>Marty Smithson</span>
        <span className="footer-cta">
          <a href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <Link href="/resume">Resume pack</Link>
          <a href={`mailto:${site.email}`}>Email</a>
        </span>
        <span>
          {site.location} · US remote · EST overlap
        </span>
      </div>
    </footer>
  );
}
