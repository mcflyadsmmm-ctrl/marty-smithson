import { site } from "@/lib/site";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      jobTitle: "Head of Business Intelligence & Performance Marketing",
      description: site.description,
      email: site.email,
      url: site.url,
      sameAs: [site.linkedin, site.mcfly],
      nationality: { "@type": "Country", name: "United States" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Utah Valley University" },
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Head of Business Intelligence & Performance Marketing",
          educationRequirements:
            "Bachelor of Science — Emphasis: Data Analytics and Statistics (Utah Valley University, May 2025)",
          occupationLocation: { "@type": "Organization", name: "Black Clover" },
        },
        {
          "@type": "Occupation",
          name: "Founder and Data Analytics Consultant",
          occupationLocation: { "@type": "Organization", name: "McFly Ads" },
        },
        {
          "@type": "Occupation",
          name: "Advertising Data Scientist",
          occupationLocation: { "@type": "Organization", name: "Nutricost" },
        },
      ],
      worksFor: [
        { "@type": "Organization", name: "Black Clover" },
        { "@type": "Organization", name: "Nutricost" },
        { "@type": "Organization", name: "McFly Ads" },
      ],
      knowsAbout: [
        "Marketing Analytics & Measurement Lead",
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
        site.mcflyProduct,
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "American Fork",
        addressRegion: "UT",
        addressCountry: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      description: site.description,
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: site.url,
      mainEntity: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${site.mcfly}/#app`,
      name: site.mcflyProduct,
      url: site.mcfly,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Shopify",
      creator: { "@id": `${site.url}/#person` },
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
