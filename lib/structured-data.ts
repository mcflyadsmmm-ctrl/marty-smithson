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
          description: "Black Clover. Reports to the CEO.",
        },
        {
          "@type": "Occupation",
          name: "Advertising Data Scientist",
          description: "Nutricost. Reported to the CMO.",
        },
        {
          "@type": "Occupation",
          name: "Founder and Data Analytics Consultant",
          description: "McFly Ads.",
        },
      ],
      knowsAbout: [
        "marketing mix modeling",
        "MMM",
        "Google Meridian",
        "incrementality",
        "geo holdout",
        "attribution",
        "MTA",
        "cash MER",
        "iROAS",
        "CAC",
        "LTV",
        "SQL",
        "Python",
        "warehouse",
        "Google Cloud Run",
        "experimentation",
        "executive BI",
        site.mcflyProduct,
      ],
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
