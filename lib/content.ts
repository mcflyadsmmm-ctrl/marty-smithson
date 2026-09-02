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
  line: "I run BI and performance marketing at Black Clover, and I report to the CEO.",
} as const;

export const homeParagraphs = [
  "When I got here the warehouse lived in Domo. I moved all of it onto Google Cloud Run, and we ended up about twenty thousand dollars a month cheaper without changing the work.",
  "I built a partner portal on Cloud Run for the people who needed the same numbers in the field. About fifty of them use it — executives, rep leads, and the reps. It pulls live NetSuite, gives each person the access they should have, and they can message each other. We put a hard limit on what it can cost.",
  "The quieter part is the books. Leadership has one wholesale number. When we look at cash, we look at what we sold against what we spent. Retail is store net. Fulfillment sits on its own so a partial order doesn’t get cleaned up into something prettier.",
] as const;

export const homeAfter =
  "I was at Nutricost before Black Clover. If you want that story, and McFly Ads, they’re on the work page.";

export const fleet = {
  title: "Black Clover",
  role: "Head of BI & Performance Marketing",
  reportsTo: "I report to the CEO.",
  lead: "The work I can talk about in public is the warehouse, the portal, and the books we use to decide.",
  sections: [
    {
      title: "The warehouse",
      body: "It was on Domo when I arrived, and it was costing us. I moved the whole thing onto Google Cloud Run. About twenty thousand a month came off the bill, and the work didn’t have to change.",
    },
    {
      title: "The portal",
      body: "The field needed somewhere to work from, so I built a partner portal on Cloud Run. About fifty people are on it — executives, the rep leads, and the reps. It uses live NetSuite, access depends on the role, they can message each other, and there’s a hard cap on cost.",
    },
    {
      title: "The books",
      body: "They’re separate on purpose. Leadership has one wholesale book, written by one person, and we lock it after we ship. For the mix I use cash — ledger sales against exact spend — and that’s what Google, Meta, and Microsoft get budget from. Retail is store net, with tax left out. Fulfillment has its own book so a partial shipment stays a partial shipment.",
    },
  ],
} as const;

export const workPage = {
  lead: "Most of what I want to show is Black Clover. Nutricost and McFly Ads are further down if you keep reading.",
  blackClover: {
    title: "Black Clover",
    role: "Head of BI & Performance Marketing. I report to the CEO.",
    body: "I moved the warehouse off Domo onto Cloud Run, built the partner portal, and I keep the books for wholesale, cash, retail, and fulfillment.",
    href: "/work/systems-fleet",
    more: "Here’s the longer write-up.",
  },
  nutricost: {
    title: "Nutricost",
    role: "Performance Marketing & Analytics Lead. I reported to the CMO.",
    href: "/work/nutricost",
    body: "I helped organize a data portfolio for thirteen sub-brands under the main brand, and I helped build the warehouse and the advertising data-science station where executives could see profit margins and COGS.",
  },
  mcfly: {
    title: "McFly Ads",
    role: "I started the company in 2020, and I’m CEO there.",
    href: "/work/mcfly",
    body: "I’ve spent those years doing marketing data science for ten brands.",
    more: "The brand names",
  },
} as const;

export const cases: CaseStudy[] = [
  {
    slug: "nutricost",
    brand: "Nutricost",
    role: "Performance Marketing & Analytics Lead",
    dates: "August 2024 — February 2025",
    reportsTo: "Reported to the CMO",
    lead: "I helped get a data portfolio in order, and helped build the place executives used to see margins.",
    body: [
      "I helped organize a data portfolio for thirteen unique sub-brands under the Nutricost main brand. I also helped build the full data warehouse and the advertising data-science station where executives could see profit margins and COGS.",
    ],
  },
  {
    slug: "mcfly",
    brand: "McFly Ads",
    role: "CEO",
    dates: "April 2020 — present",
    reportsTo: "I started the company",
    lead: "I started McFly Ads in 2020, and I’m CEO there.",
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
    note: "The usual one.",
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
    note: "The warehouse, the portal, and the BI work.",
  },
] as const;

export const resume = {
  role: "Head of Business Intelligence & Performance Marketing",
  scan: "Head of BI & Performance Marketing at Black Clover · reports to the CEO · UVU B.S. Data Science and Statistics",
  summary:
    "Head of Business Intelligence & Performance Marketing at Black Clover — I report to the CEO. I moved the full data warehouse off Domo onto Google Cloud Run (about $20K a month saved) and built a partner portal on Cloud Run for about 50 people. I allocate a seven-figure monthly paid mix across Google, Meta, and Microsoft against cash MER. Previously Performance Marketing & Analytics Lead at Nutricost, reporting to the CMO: I helped organize a data portfolio for 13 sub-brands and helped build the warehouse and advertising data-science station executives used for profit margins and COGS. CEO of McFly Ads since 2020.",
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
        "Helped organize a data portfolio for 13 unique sub-brands under the Nutricost main brand.",
        "Helped build the full data warehouse and the advertising data-science station where executives could see profit margins and COGS.",
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
