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
      sameAs: [site.linkedin],
      nationality: { "@type": "Country", name: "United States" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Utah Valley University" },
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Head of Business Intelligence & Performance Marketing",
          experienceRequirements: "6 years of experience in marketing data science",
          educationRequirements: "Bachelor of Science, emphasis Data Science and Statistics",
          occupationLocation: { "@type": "Organization", name: "Black Clover" },
        },
        {
          "@type": "Occupation",
          name: "Chief Executive Officer",
          occupationLocation: { "@type": "Organization", name: "McFly Ads" },
        },
      ],
      worksFor: [
        { "@type": "Organization", name: "Black Clover" },
        { "@type": "Organization", name: "McFly Ads" },
      ],
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
