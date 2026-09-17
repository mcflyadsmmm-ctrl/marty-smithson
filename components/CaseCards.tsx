import Link from "next/link";
import { CaseBeats } from "@/components/CaseBeats";
import { featured } from "@/lib/content";
import { site } from "@/lib/site";

export function CaseCards() {
  return (
    <div className="case-grid">
      {featured.map((item) => (
        <article className="work-entry case-card" key={item.key}>
          <p className="field">
            {item.key === "mcfly" ? "Live product" : "Case"}
            {"live" in item && item.live ? (
              <>
                {" "}
                <span className="live-mark">LIVE</span>
              </>
            ) : null}
          </p>
          <h3>{item.title}</h3>
          <p className="quiet">{item.role}</p>
          <CaseBeats beats={item.beats} />
          <p className="close-links">
            <Link href={item.href}>Read the case</Link>
            {item.key === "mcfly" ? (
              <a href={site.mcflyDemo} rel="noreferrer" target="_blank">
                Open live SAMPLE desk
              </a>
            ) : (
              <Link href={item.desk}>Open the desk</Link>
            )}
          </p>
        </article>
      ))}
    </div>
  );
}
