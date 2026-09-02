export type BrandCategory = "Trades" | "Professional" | "Product";

export type CaseSlug = "nutricost" | "mcfly";

export type CaseStudy = {
  slug: CaseSlug;
  brand: string;
  role: string;
  dates: string;
  reportsTo: string;
  lead: string;
  body: string[];
};

export const hero = {
  name: "Marty Smithson",
  line: "I’m Head of BI & Performance Marketing at Black Clover. I report to the CEO.",
} as const;

export const homeSections = [
  {
    title: "The warehouse",
    body: "When I started, Domo was running the warehouse. I moved the whole thing onto Google Cloud Run, which kept the same work in place and took about $20,000 a month off the bill.",
  },
  {
    title: "The partner portal",
    body: "I built a partner portal on Cloud Run for about fifty people — executives, rep leads, and the reps. It uses live NetSuite, gives people access based on their role, and has messaging between them. There’s a hard cap on what it costs.",
  },
  {
    title: "Wholesale, cash, retail, fulfillment",
    body: "Leadership has one wholesale book. Cash is sales against what we actually spent. Retail is store net, with tax left out. Fulfillment sits on its own, so a partial order shows up as a partial.",
  },
] as const;

export const homeAfter =
  "Before this I was at Nutricost. That’s on the work page, with McFly Ads.";

export const fleet = {
  title: "Black Clover",
  role: "Head of BI & Performance Marketing",
  reportsTo: "I report to the CEO.",
  lead: "I moved the warehouse off Domo onto Google Cloud Run and built a partner portal on the same stack for about fifty people. I also keep separate books for wholesale, cash, retail, and fulfillment.",
  sections: [
    {
      title: "Warehouse",
      body: "Domo was running the warehouse, and the bill was high. I moved the full data warehouse onto Google Cloud Run, which kept the same work in place and took about $20,000 a month off the bill.",
    },
    {
      title: "Partner portal",
      body: "About fifty people needed a place to work from — executives, rep leads, and reps. I built it on Cloud Run. It pulls live NetSuite, gives each role the right access, and has messaging between them, with a hard cap on cost.",
    },
    {
      title: "Wholesale",
      body: "Leadership has one wholesale book, and one person who writes it. We lock it after we ship so two systems don’t start telling different stories.",
    },
    {
      title: "Cash",
      body: "For the mix I use cash MER: ledger sales against exact spend. That’s the number Google, Meta, and Microsoft get budget from.",
    },
    {
      title: "Retail",
      body: "Retail is store net sales. We leave tax out of that number.",
    },
    {
      title: "Fulfillment",
      body: "Fulfillment has its own book. If something ships partial, that’s what the number says.",
    },
  ],
} as const;

export const workPage = {
  lead: "Black Clover is the main one. Nutricost and McFly Ads are shorter notes below.",
  blackClover: {
    title: "Black Clover",
    role: "Head of BI & Performance Marketing. I report to the CEO.",
    body: "I moved the warehouse off Domo onto Cloud Run, built the partner portal, and keep the books for wholesale, cash, retail, and fulfillment.",
    href: "/work/systems-fleet",
    more: "The longer version",
  },
  nutricost: {
    title: "Nutricost",
    role: "Performance Marketing & Analytics Lead. I reported to the CMO.",
    href: "/work/nutricost",
    body: "I helped organize the data for thirteen sub-brands under the Nutricost main brand. I also helped build the data warehouse and the advertising analysis station where executives could see profit margins and COGS. The paid work sat on Amazon, Google, Meta, and TikTok.",
  },
  mcfly: {
    title: "McFly Ads",
    role: "CEO. I started it in 2020.",
    href: "/work/mcfly",
    body: "That’s the one place I’m CEO. I’ve spent those years doing marketing data science for ten brands.",
    more: "The brands",
  },
} as const;

export const cases: CaseStudy[] = [
  {
    slug: "nutricost",
    brand: "Nutricost",
    role: "Performance Marketing & Analytics Lead",
    dates: "August 2024 — February 2025",
    reportsTo: "Reported to the CMO",
    lead: "I helped get the data in order for thirteen sub-brands, and helped build the warehouse executives used for margins.",
    body: [
      "I was Performance Marketing & Analytics Lead at Nutricost, and I reported to the CMO. I helped organize a portfolio of data for thirteen unique sub-brands under the Nutricost main brand.",
      "I also helped build the full data warehouse and the advertising data science analysis station where executives could see profit margins and COGS. The paid platforms were Amazon, Google, Meta, and TikTok.",
    ],
  },
  {
    slug: "mcfly",
    brand: "McFly Ads",
    role: "CEO",
    dates: "April 2020 — present",
    reportsTo: "Founder",
    lead: "I started the company in 2020. That’s the one place I’m CEO.",
    body: [
      "I’ve spent those years doing marketing data science for ten named brands — mix models, incrementality, dashboards, and paid allocation. I present that work to the people who run the companies.",
      "McFly Analytics is submitted to the Shopify App Store. The listing is still pending.",
    ],
  },
];

export const brands: {
  mark: string;
  name: string;
  category: BrandCategory;
}[] = [
  { mark: "MC", name: "Marksman Construction", category: "Trades" },
  { mark: "MS", name: "Malama Solar", category: "Trades" },
  { mark: "RP", name: "Royal Peak Lighting", category: "Trades" },
  { mark: "AG", name: "Arizona Gym Floors", category: "Trades" },
  { mark: "PA", name: "Pure Air Solutions", category: "Trades" },
  { mark: "PM", name: "Priority Mulching Services", category: "Trades" },
  { mark: "BB", name: "BatBridge Bookkeeping", category: "Professional" },
  { mark: "WB", name: "Whirly Board", category: "Product" },
  { mark: "SL", name: "Stretch Labs", category: "Product" },
  { mark: "KH", name: "Kin Home", category: "Product" },
];

export const resumePdfs = [
  {
    key: "full",
    href: "/resumes/Marty_Smithson_Resume_MASTER.pdf",
    title: "Full resume",
    note: "The whole thing.",
  },
  {
    key: "measurement",
    href: "/resumes/Marty_Smithson_Resume_SCIENCE.pdf",
    title: "Measurement",
    note: "Mix models and incrementality.",
  },
  {
    key: "systems",
    href: "/resumes/Marty_Smithson_Resume_OPERATOR.pdf",
    title: "Systems and analytics",
    note: "The warehouse, the portal, the BI work.",
  },
] as const;

export const resume = {
  role: "Head of Business Intelligence & Performance Marketing",
  scan: "Head of BI & Performance Marketing at Black Clover · reports to the CEO · UVU B.S. Data Science and Statistics",
  summary:
    "Head of Business Intelligence & Performance Marketing at Black Clover — I report to the CEO. I moved the full data warehouse off Domo onto Google Cloud Run (about $20K a month saved) and built a partner portal on Cloud Run for about 50 people. I allocate a seven-figure monthly paid mix across Google, Meta, and Microsoft against cash MER. Previously Performance Marketing & Analytics Lead at Nutricost, reporting to the CMO: I helped organize data for 13 sub-brands and helped build the warehouse and advertising analysis station executives used for profit margins and COGS. CEO of McFly Ads since 2020.",
  jobs: [
    {
      title: "Head of Business Intelligence & Performance Marketing",
      org: "Black Clover USA",
      dates: "02/2025 - Present",
      meta: "Reports to the CEO.",
      bullets: [
        "Moved the full data warehouse off Domo onto Google Cloud Run. About $20K a month saved.",
        "Built a partner portal on Cloud Run for about 50 people — executives, rep leads, and reps. Live Oracle NetSuite, role-based access, messaging between users, hard cost cap.",
        "Meridian MMM on Google, Meta, and Microsoft. GeoLift and RCTs when two channels claimed the same sale. Below cash MER break-even, we cut.",
        "Directed a seven-figure monthly paid mix against cash MER for the CEO. Platform ROAS was not the budget.",
        "Snowflake, dbt, and Airflow into Oracle NetSuite. R, SQL, and Python. BI in Looker, Domo, and Tableau.",
        "Led a social media manager, a graphic designer, and international advertising leads in Asia, the UK, Canada, and Australia.",
      ],
    },
    {
      title: "Performance Marketing & Analytics Lead",
      org: "Nutricost",
      dates: "08/2024 - 02/2025 (7 months)",
      meta: "Reported to the CMO.",
      bullets: [
        "Helped organize a portfolio of data for 13 unique sub-brands under the Nutricost main brand.",
        "Helped build the full data warehouse and the advertising data science analysis station where executives could see profit margins and COGS.",
        "Paid platforms: Amazon, Google, Meta, and TikTok.",
      ],
    },
    {
      title: "CEO",
      org: "McFly Ads",
      dates: "04/2020 - Present",
      meta: "I started the company in 2020.",
      bullets: [
        "6 years of marketing data science for 10 named brands: Robyn and Meridian, GeoLift, executive dashboards, retail command centers, and paid allocation.",
        "Named brands: Marksman Construction, Malama Solar, Royal Peak Lighting, Stretch Labs, Kin Home, BatBridge Bookkeeping, Whirly Board, Arizona Gym Floors, Pure Air Solutions, Priority Mulching Services.",
        "McFly Analytics submitted to the Shopify App Store (listing pending). mcflyads.com.",
      ],
    },
  ],
  skills: [
    {
      label: "Measurement",
      items:
        "marketing mix modeling (MMM), Robyn, Meridian, incrementality testing, GeoLift, multi-touch attribution, cash MER, budget allocation",
    },
    {
      label: "Data & BI",
      items:
        "SQL, Python, R, Snowflake, dbt, Airflow, BigQuery, Looker, Looker Studio, Domo, Tableau, GA4, Oracle NetSuite, Google Cloud Run",
    },
    {
      label: "Paid & commerce",
      items:
        "Google Ads, Meta Ads, Amazon Ads, TikTok Ads, Microsoft Ads, Shopify, performance marketing",
    },
  ],
  education:
    "Utah Valley University, Orem, Utah — Bachelor of Science, Data Science and Statistics emphasis.",
} as const;

export function caseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((item) => item.slug === slug);
}
