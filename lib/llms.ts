import { brands, credo, featured, gtmBridge, hero, methods, proof } from "@/lib/content";
import { site } from "@/lib/site";

export function llmsText(): string {
  const cases = featured
    .map((item) => `- [${item.title}](${site.url}${item.href}): ${item.role}`)
    .join("\n");

  const clients = brands
    .map((brand) =>
      brand.href ? `- [${brand.name}](${brand.href})` : `- ${brand.name}`,
    )
    .join("\n");

  return `# ${site.name}

> ${site.description}

${hero.line}

${hero.place}

${hero.school}

${site.spendHeadline}.

## Measurement

${proof.map((item) => `- ${item.label}. ${item.note}`).join("\n")}

${methods.body.join("\n\n")}

${methods.terms.map((term) => `- ${term.name}: ${term.note}`).join("\n")}

## GTM analytics

${gtmBridge.title}. ${gtmBridge.body}

Tools on that path: SQL, Snowflake, Python, dbt, BigQuery, Google Cloud Run, Oracle NetSuite.

## Credo

${credo.mark}. ${credo.line}

## Pages

- [Home](${site.url}/): ${hero.role}
- [Work](${site.url}/work): Black Clover, Nutricost, and ${site.mcflyProduct}.
- [Desks](${site.url}/work/desks): measurement desks, including Harbor Home Co SAMPLE.
- [Resume](${site.url}/resume): HTML resume and PDF packs.
- [Plain-text resume](${site.url}/resume.md): the same facts as markdown.
- [Contact](${site.url}/contact): ${site.email}

## Cases

${cases}

## Resume files

- [Full resume](${site.url}${site.resumes.full}): send this unless they asked for a lane.
- [Measurement](${site.url}${site.resumes.measurement}): mix models and incrementality.
- [Systems and analytics](${site.url}${site.resumes.systems}): the warehouse, the portal, and the BI work.

## McFly Ads clients

${clients}

## Product

- [${site.mcflyProduct}](${site.mcfly}): LIVE.
- [Harbor Home Co SAMPLE](${site.mcflyDemo}): Harbor Home Co SAMPLE — not a live client.
`;
}
