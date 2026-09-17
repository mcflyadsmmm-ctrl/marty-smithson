import type { ReactNode } from "react";
import { CaseBeats } from "@/components/CaseBeats";
import { CtaRow } from "@/components/CtaRow";
import type { CaseBeat, CasePoint } from "@/lib/content";

type CaseArticleProps = {
  title: string;
  live?: boolean;
  lede: string;
  meta: string;
  body: readonly string[];
  beats?: CaseBeat;
  points?: readonly CasePoint[];
  children?: ReactNode;
  links?: ReactNode;
  showDemo?: boolean;
};

export function CaseArticle({
  title,
  live = false,
  lede,
  meta,
  body,
  beats,
  points,
  children,
  links,
  showDemo = false,
}: CaseArticleProps) {
  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>
          {title}
          {live ? (
            <>
              {" "}
              <span className="live-mark">LIVE</span>
            </>
          ) : null}
        </h1>
        <p className="lede">{lede}</p>
        <p className="quiet">{meta}</p>
        <CtaRow showDemo={showDemo} />
      </header>

      <div className="wrap">
        {beats ? <CaseBeats beats={beats} /> : null}
        {children}

        <div className="section-copy">
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {points && points.length > 0 ? (
          <ol className="case-points">
            {points.map((point) => (
              <li key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </li>
            ))}
          </ol>
        ) : null}

        {links ? <p className="close-links">{links}</p> : null}
      </div>
    </article>
  );
}
