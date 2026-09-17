import { BrandRoster } from "@/components/BrandRoster";
import { CaseCards } from "@/components/CaseCards";
import { Credo } from "@/components/Credo";
import { CtaRow } from "@/components/CtaRow";
import { HarborFeature } from "@/components/desks/HarborFeature";
import { MethodNote } from "@/components/MethodNote";
import { ProofStrip } from "@/components/ProofStrip";
import { hero } from "@/lib/content";

export default function HomePage() {
  return (
    <article className="page">
      <header className="page-head page-head-hero wrap">
        <h1>{hero.name}</h1>
        <p className="lede">{hero.role}</p>
        <p className="quiet">
          {hero.line} {hero.place} {hero.school}
        </p>
      </header>

      <div className="wrap">
        <ProofStrip />
        <section className="section" aria-labelledby="clients-title">
          <p className="field">McFly Ads clients</p>
          <h2 id="clients-title">Named brands</h2>
          <p className="quiet section-copy">
            Consulting work since 2020. Public sites where they have one.
          </p>
          <BrandRoster wall />
        </section>
        <section className="section" aria-labelledby="work-title">
          <p className="field">Selected work</p>
          <h2 id="work-title">Black Clover, Nutricost, and the live desk</h2>
          <CaseCards />
        </section>
        <HarborFeature />
        <MethodNote />
        <Credo />
        <CtaRow />
      </div>
    </article>
  );
}
