import type { CaseSlug } from "@/lib/content";
import { site } from "@/lib/site";

type ArtifactStripProps = {
  slug?: CaseSlug;
  heading?: string;
};

export function ArtifactStrip({
  slug,
  heading = "SAMPLE method folders",
}: ArtifactStripProps) {
  return (
    <div className="artifact-list" aria-label={heading}>
      <a className="artifact" href={site.proof.recast} rel="noreferrer" target="_blank">
        <strong>SAMPLE Recast memo</strong>
        <span>Public R write-up — method only, not client data</span>
      </a>
      <a className="artifact" href={site.proof.geolift} rel="noreferrer" target="_blank">
        <strong>SAMPLE GeoLift</strong>
        <span>Public geo-holdout notebooks — method only, not client data</span>
      </a>
      <a className="artifact" href={site.proof.repo} rel="noreferrer" target="_blank">
        <strong>SAMPLE measurement repo</strong>
        <span>The public method folder — not a desk extract</span>
      </a>
      {slug === "mcfly" ? (
        <a className="artifact" href={site.mcfly} rel="noreferrer" target="_blank">
          <strong>mcflyads.com</strong>
          <span>McFly Ads — the company, not a lift claim</span>
        </a>
      ) : null}
    </div>
  );
}
