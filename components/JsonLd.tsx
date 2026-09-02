import { site } from "@/lib/site";

const blackClover = {
  "@type": "Organization",
  "@id": `${site.url}/#org-black-clover`,
  name: "Black Clover",
};

const mcflyAds = {
  "@type": "Organization",
  "@id": `${site.url}/#org-mcfly-ads`,
  name: "McFly Ads",
};

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
      sameAs: [site.linkedin],
      nationality: { "@type": "Country", name: "United States" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Utah Valley University",
      },
      hasOccupation: [
        {
          "@type": "EmployeeRole",
          roleName: "Head of Business Intelligence & Performance Marketing",
          description:
            "W-2 at Black Clover. Reports to the Black Clover CEO. Not the Black Clover CEO.",
          startDate: "2025-02",
          worksFor: { "@id": `${site.url}/#org-black-clover` },
        },
        {
          "@type": "EmployeeRole",
          roleName: "Performance Marketing & Analytics Lead",
          description: "W-2 at Nutricost. Reported to the Nutricost CMO.",
          startDate: "2024-08",
          endDate: "2025-02",
        },
        {
          "@type": "EmployeeRole",
          roleName: "Chief Executive Officer",
          description: "CEO of McFly Ads only. Marketing data-science company. Concurrent with W-2 roles.",
          startDate: "2020-04",
          worksFor: { "@id": `${site.url}/#org-mcfly-ads` },
        },
      ],
      worksFor: [blackClover, mcflyAds],
      knowsAbout: [
        "marketing mix modeling",
        "GeoLift",
        "incrementality testing",
        "cash MER",
        "Robyn",
        "Meridian",
        "marketing data science",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "American Fork",
        addressRegion: "UT",
        addressCountry: "US",
      },
    },
    {
      ...blackClover,
      description:
        "Employer for Head of Business Intelligence & Performance Marketing. Marty Smithson reports to the CEO; he is not the Black Clover CEO.",
    },
    {
      ...mcflyAds,
      description:
        "Marketing data-science company. Marty Smithson is CEO of McFly Ads only.",
      founder: { "@id": `${site.url}/#person` },
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
