import { CtaRow } from "@/components/CtaRow";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>{site.locationLine}</span>
      <CtaRow className="footer-links" showDemo />
    </footer>
  );
}
