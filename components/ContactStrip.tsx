import { ResumePack } from "@/components/ResumePack";
import { resume } from "@/lib/content";
import { site } from "@/lib/site";

type ContactStripProps = {
  showHeading?: boolean;
};

export function ContactStrip({ showHeading = false }: ContactStripProps) {
  return (
    <div className="contact-strip">
      {showHeading ? <h2 id="contact-title">Get in touch</h2> : null}
      <p className="note measure">{resume.scan}</p>
      <p className="note measure">
        {site.locationLine}
        <br />
        {site.authorization}
      </p>
      <p>
        <a className="cta-mail" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
      <p className="actions">
        <a className="btn btn-solid" href={site.linkedin} rel="noreferrer" target="_blank">
          LinkedIn
        </a>
        <a className="btn" href={`mailto:${site.email}`}>
          Email
        </a>
      </p>
      <p className="kicker pack-kicker">Resume pack</p>
      <ResumePack />
    </div>
  );
}
