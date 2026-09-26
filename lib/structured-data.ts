import { brands, resumePdfs } from "@/lib/content";
import { site } from "@/lib/site";

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;

function documentUrl(path: string) {
  return `${site.url}${path}`;
}

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: site.name,
      url: site.url,
      description: site.description,
      inLanguage: "en-US",
      publisher: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      url: site.url,
      email: site.email,
      description: site.description,
      jobTitle: [
        "Marketing Analytics & Measurement Lead",
        "Head of BI & Performance Marketing",
        "Founder and Data Analytics Consultant",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "American Fork",
        addressRegion: "UT",
        addressCountry: "US",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Utah Valley University",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: site.education,
      },
      worksFor: [
        {
          "@type": "Organization",
          name: "Black Clover",
        },
        {
          "@type": "Organization",
          name: "McFly Ads",
        },
      ],
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Head of BI & Performance Marketing",
          description:
            "Black Clover. Reports to the CEO. Runs and reads Meridian MMM, sets geo holdouts and RCTs, and spends against cash MER. The executive read is the mix recommendation and the cut.",
        },
        {
          "@type": "Occupation",
          name: "Advertising Data Scientist",
          description:
            "Nutricost. Reported to the CMO. Organized a 13-sub-brand data portfolio and built the warehouse and advertising data-science station for margins and COGS. Read Robyn and ran GeoLift, which uses synthetic control (augmented synthetic control), then took the spend call to the CMO. MTA, LTV, and cohorts in BigQuery.",
        },
        {
          "@type": "Occupation",
          name: "Founder and Data Analytics Consultant",
          description:
            "McFly Ads consulting practice since 2020. Founder-owned delivery of marketing science: mix models, incrementality, and media measurement. Mcfly Analytics Shopify App is LIVE.",
        },
      ],
      knowsAbout: [...site.keywords, site.mcflyProduct],
      sameAs: [site.linkedin],
      subjectOf: [
        ...resumePdfs.map((pdf) => ({
          "@type": "DigitalDocument",
          name: `${site.name} — ${pdf.title}`,
          encodingFormat: "application/pdf",
          url: documentUrl(pdf.href),
        })),
        {
          "@type": "DigitalDocument",
          name: `${site.name} — plain-text resume`,
          encodingFormat: "text/markdown",
          url: documentUrl("/resume.md"),
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${site.mcfly}/#app`,
      name: site.mcflyProduct,
      url: site.mcfly,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Shopify",
      description: `${site.mcflyProduct} is LIVE at mcflyads.com.`,
      creator: { "@id": personId },
    },
  ],
};

export const profileGraph = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${site.url}/#profile`,
  url: site.url,
  name: site.title,
  description: site.description,
  dateModified: site.revised,
  inLanguage: "en-US",
  mainEntity: { "@id": personId },
  isPartOf: { "@id": websiteId },
};

export const clientListGraph = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "McFly Ads clients",
  numberOfItems: brands.length,
  itemListElement: brands.map((brand, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Organization",
      name: brand.name,
      ...(brand.href ? { url: brand.href } : {}),
    },
  })),
};

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
