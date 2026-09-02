import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>{site.name}</span>
      <span className="footer-links">
        <a href={site.linkedin} rel="noreferrer" target="_blank">
          LinkedIn
        </a>
        <Link href="/resume">Resume</Link>
        <a href={`mailto:${site.email}`}>Email</a>
      </span>
    </footer>
  );
}
