import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>{site.location}</span>
      <span className="footer-links">
        <a href={site.linkedin} rel="noreferrer" target="_blank">
          LinkedIn
        </a>
      </span>
    </footer>
  );
}
