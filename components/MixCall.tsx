import Link from "next/link";
import { mixCall } from "@/lib/content";

type MixCallProps = {
  compact?: boolean;
  showLink?: boolean;
  asPageTitle?: boolean;
};

export function MixCall({
  compact = false,
  showLink = true,
  asPageTitle = false,
}: MixCallProps) {
  const TitleTag = asPageTitle ? "h1" : compact ? "h3" : "h2";

  return (
    <section className={compact ? "mix-call mix-call-compact" : "mix-call"} id="mix-call">
      <TitleTag>{mixCall.title}</TitleTag>
      <p className={compact ? "note" : "lede measure"}>{mixCall.lede}</p>
      <ol className="mix-steps">
        {mixCall.steps.map((step, index) => (
          <li key={step.title}>
            <p className="exp-idx num">0{index + 1}</p>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      {showLink ? (
        <p className="mt-block">
          <Link className="more" href="/evidence#mix-call">
            {mixCall.title} →
          </Link>
        </p>
      ) : null}
    </section>
  );
}
