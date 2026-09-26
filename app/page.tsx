import { BrandRoster } from "@/components/BrandRoster";
import { CaseCards } from "@/components/CaseCards";
import { Credo } from "@/components/Credo";
import { CtaRow } from "@/components/CtaRow";
import { GtmBridge } from "@/components/GtmBridge";
import { HarborFeature } from "@/components/desks/HarborFeature";
import { MethodNote } from "@/components/MethodNote";
import { ProofStrip } from "@/components/ProofStrip";
import { clientWall, hero } from "@/lib/content";
import { jsonLd, profileGraph } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <article className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(profileGraph) }}
      />
      <header className="page-head page-head-hero wrap">
        <h1>{hero.name}</h1>
        <p className="lede">{hero.role}</p>
        <div className="hero-facts">
          <p>{hero.line}</p>
          <p>{hero.place}</p>
          <p>{hero.school}</p>
        </div>
        <CtaRow />
      </header>

      <div className="wrap">
        <ProofStrip />
        <section className="section" aria-labelledby="clients-title">
          <p className="field">{clientWall.field}</p>
          <h2 id="clients-title">{clientWall.title}</h2>
          <p className="quiet section-copy">{clientWall.body}</p>
          <BrandRoster wall />
        </section>
        <section className="section" aria-labelledby="work-title">
          <p className="field">Selected work</p>
          <h2 id="work-title">Black Clover, Nutricost, and the live desk</h2>
          <CaseCards />
        </section>
        <GtmBridge />
        <HarborFeature />
        <MethodNote />
        <Credo />
        <section className="section" aria-labelledby="contact-title">
          <h2 id="contact-title" className="field">
            Contact
          </h2>
          <CtaRow />
        </section>
      </div>
    </article>
  );
}
