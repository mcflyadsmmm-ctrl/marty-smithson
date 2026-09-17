import type { ReactNode } from "react";
import { CtaRow } from "@/components/CtaRow";
import type { CasePoint } from "@/lib/content";

type CaseArticleProps = {
  title: string;
  live?: boolean;
  lede: string;
  meta: string;
  body: readonly string[];
  points?: readonly CasePoint[];
  children?: ReactNode;
  links?: ReactNode;
};

export function CaseArticle({
  title,
  live = false,
  lede,
  meta,
  body,
  points,
  children,
  links,
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
        <CtaRow />
      </header>

      <div className="wrap">
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

        {children}

        {links ? <p className="close-links">{links}</p> : null}
      </div>
    </article>
  );
}
