import { ExternalLink } from "@/components/ExternalLink";
import { site } from "@/lib/site";

export function CtaRow({
  className = "cta-row",
  showDemo = false,
}: {
  className?: string;
  showDemo?: boolean;
}) {
  return (
    <p className={className}>
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
      <a href={site.resumes.full} download>
        Resume PDF
      </a>
      <ExternalLink href={site.mcfly}>{site.mcflyProduct}</ExternalLink>
      {showDemo ? (
        <ExternalLink href={site.mcflyDemo}>Harbor SAMPLE</ExternalLink>
      ) : null}
    </p>
  );
}
