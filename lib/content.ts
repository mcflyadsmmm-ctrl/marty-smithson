export type BrandCategory = "Trades" | "Professional" | "Product";

export type CaseSlug = "nutricost" | "mcfly";

export type CaseStudy = {
  slug: CaseSlug;
  brand: string;
  role: string;
  dates: string;
  reportsTo: string;
  headline: string;
  lead: string;
  body: string[];
};

export const hero = {
  name: "Marty Smithson",
  line: "I moved Black Clover’s warehouse off Domo onto Cloud Run, and built the partner portal the field uses.",
} as const;

export const homeStories = [
  {
    title: "The warehouse",
    body: "Domo was running the warehouse and the bill. I moved the full data warehouse onto Google Cloud Run. Same work. About $20K a month less.",
  },
  {
    title: "The partner portal",
    body: "About 50 people needed the same numbers as leadership — executives, rep leads, reps — without rewriting them. I built that portal on Cloud Run: live NetSuite, the right access for each role, messaging between them, inside a hard cost cap.",
  },
] as const;

export const homeNote =
  "Head of BI & Performance Marketing at Black Clover. I report to the CEO. Marketing is the domain I know; the work is the systems underneath it.";

export const fleet = {
  title: "What I built",
  place: "Black Clover",
  role: "Head of BI & Performance Marketing · I report to the CEO",
  dates: "February 2025 — present",
  lead: "I moved the warehouse off Domo onto Cloud Run and stood up a partner portal for about 50 people. Leadership gets one honest book per desk — wholesale, cash, retail, fulfillment — and can actually decide from it.",
  sections: [
    {
      title: "Warehouse off Domo",
      body: "The company was paying Domo to hold the warehouse. I moved the full data warehouse onto Google Cloud Run. The work stayed. The bill dropped about $20K a month. That is a verified number, not a modeled lift.",
    },
    {
      title: "Partner portal, ~50 people",
      body: "Executives, rep leads, and reps needed the same facts with different access. I built the portal on Cloud Run, live to NetSuite, with messaging between users and a hard cost cap at peak. They can read the number. They cannot quietly rewrite it.",
    },
    {
      title: "The books leadership uses",
      body: "Wholesale, cash MER, retail, and fulfillment each keep their own honest book. One person owns the number. We lock it after we ship. A bad reconcile does not go to the CEO. Store net sales do not treat tax as a KPI. Partials are told on their own fulfillment book.",
    },
    {
      title: "The mix, from the ledger",
      body: "Google, Meta, and Microsoft get budget from ledger sales against spend — cash MER — not from ad-platform ROAS. Below break-even, we cut. Marketing is the domain. The system is the job.",
    },
  ],
} as const;

export const workIndex = {
  lead: "Black Clover first. Nutricost and McFly Ads are shorter.",
  case: {
    href: "/work/systems-fleet",
    title: "Black Clover",
    role: "Head of BI & Performance Marketing · reports to the CEO",
    body: "Full warehouse off Domo onto Cloud Run — about $20K a month saved. Partner portal on Cloud Run for about 50 people. Honest books for wholesale, cash, retail, and fulfillment.",
  },
  also: [
    {
      href: "/work/nutricost",
      title: "Nutricost",
      role: "Performance Marketing & Analytics Lead · reported to the CMO",
      body: "Amazon, Google, Meta, and TikTok on one desk. Ketologic and Primaforce from $50 a day to $1,000 a day.",
    },
    {
      href: "/work/mcfly",
      title: "McFly Ads",
      role: "CEO · marketing data science since 2020",
      body: "My company. Ten named brands. The CEO title applies here only.",
    },
  ],
} as const;

export const cases: CaseStudy[] = [
  {
    slug: "nutricost",
    brand: "Nutricost",
    role: "Performance Marketing & Analytics Lead",
    dates: "August 2024 — February 2025 · 7 months",
    reportsTo: "Reported to the CMO",
    headline: "Four platforms. One CMO desk.",
    lead: "Each platform wanted credit for the same order. Last-click could not answer the mix.",
    body: [
      "I owned Amazon, Google, Meta, and TikTok for seven months and presented the mix to the CMO. Robyn on the book. GeoLift when two channels claimed the same order. The test was the budget call.",
      "Ketologic and Primaforce went from $50 a day to $1,000 a day. Multi-touch attribution, LTV, and cohorts in BigQuery, SQL, and R so contribution was visible past last-click.",
    ],
  },
  {
    slug: "mcfly",
    brand: "McFly Ads",
    role: "CEO",
    dates: "April 2020 — present",
    reportsTo: "Founder / CEO",
    headline: "Spend next to sales.",
    lead: "I started the company in 2020. Brands were buying ads. Each platform reported a win. Finance wanted a simpler answer: did this period’s spend clear contribution?",
    body: [
      "Six years of marketing data science for ten named brands — mix models, incrementality, executive dashboards, retail command centers, paid allocation. I present the work to operators.",
      "McFly Analytics is submitted to the Shopify App Store (listing pending). That is the lab, not the Black Clover job. The CEO title applies only here.",
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
    note: "The default. Same facts as the other two.",
  },
  {
    key: "measurement",
    href: "/resumes/Marty_Smithson_Resume_SCIENCE.pdf",
    title: "Measurement",
    note: "For mix-model and incrementality roles.",
  },
  {
    key: "systems",
    href: "/resumes/Marty_Smithson_Resume_OPERATOR.pdf",
    title: "Systems & analytics",
    note: "For BI, the warehouse, and the portal.",
  },
] as const;

export const resume = {
  role: "Head of Business Intelligence & Performance Marketing",
  scan: "Head of BI & Performance Marketing at Black Clover · reports to the CEO · UVU B.S. Data Science and Statistics",
  summary:
    "Head of Business Intelligence & Performance Marketing at Black Clover — I report to the CEO. I moved the full data warehouse off Domo onto Google Cloud Run (about $20K a month saved) and built a partner portal on Cloud Run for about 50 people. I allocate a seven-figure monthly paid mix across Google, Meta, and Microsoft against cash MER. Previously reported to the CMO at Nutricost across Amazon, Google, Meta, and TikTok, including Ketologic and Primaforce from $50/day to $1,000/day. CEO of McFly Ads since 2020.",
  jobs: [
    {
      title: "Head of Business Intelligence & Performance Marketing",
      org: "Black Clover USA",
      dates: "02/2025 - Present",
      meta: "Reports to the CEO.",
      bullets: [
        "Moved the full data warehouse off Domo onto Google Cloud Run. About $20K a month saved.",
        "Built a partner portal on Cloud Run for about 50 people — executives, rep leads, and reps. Live Oracle NetSuite, tiered access, messaging between users.",
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
        "Robyn MMM on Amazon, Google, Meta, and TikTok. GeoLift when those platforms claimed the same order. Presented results to the CMO.",
        "Scaled Ketologic and Primaforce from $50/day to $1,000/day. Owned a seven-figure monthly paid book for 7 months.",
        "Multi-touch attribution, LTV, and cohorts in BigQuery, SQL, and R. GA4 and Looker Studio for the weekly desk.",
      ],
    },
    {
      title: "CEO",
      org: "McFly Ads",
      dates: "04/2020 - Present",
      meta: "Marketing data-science company. Held alongside later roles. CEO title applies only here.",
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
