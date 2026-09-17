import { site } from "@/lib/site";

export function CtaRow({
  className = "cta-row",
}: {
  className?: string;
}) {
  return (
    <p className={className}>
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <a href={site.linkedin} rel="noreferrer" target="_blank">
        LinkedIn
      </a>
      <a href={site.resumes.full} download>
        Resume
      </a>
      <a href={site.mcfly} rel="noreferrer" target="_blank">
        {site.mcflyProduct}
      </a>
      <a href={site.mcflyDemo} rel="noreferrer" target="_blank">
        Open live SAMPLE desk
      </a>
    </p>
  );
}
