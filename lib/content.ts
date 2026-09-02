export type BrandCategory = "Trades" | "Professional" | "Product";

export type CaseSlug = "black-clover" | "nutricost" | "mcfly";

export type ProofStat = {
  figure: string;
  unit: string;
  line: string;
  meta: string;
};

export type CaseStudy = {
  slug: CaseSlug;
  index: string;
  brand: string;
  role: string;
  dates: string;
  datesShort: string;
  reportsTo: string;
  headline: string;
  kicker: string;
  stat: string;
  problem: string;
  approach: string;
  outcome: string;
  situation: string[];
  broken: string[];
  method: string[];
  ran: string[];
  next: string;
};

export const hero = {
  section: "01 / Signal",
  name: "Marty Smithson",
  pair: "Business intelligence × performance marketing",
  claim: "Marketing measurement that finance will fund.",
  lock: "I don't optimize for platform ROAS. I measure what actually happened to the business.",
} as const;

export const proofStats: ProofStat[] = [
  {
    figure: "06",
    unit: "Years",
    line: "of marketing data science",
    meta: "2020 — 2026",
  },
  {
    figure: "$30M+",
    unit: "Media",
    line: "directed",
    meta: "Career",
  },
  {
    figure: "$1M",
    unit: "Monthly",
    line: "mix",
    meta: "Black Clover · reports to CEO",
  },
  {
    figure: "$2M",
    unit: "Monthly",
    line: "mix",
    meta: "Nutricost · reports to CMO",
  },
  {
    figure: "$50 → $1,000",
    unit: "Per day",
    line: "Ketologic / Primaforce",
    meta: "Nutricost sub-brands",
  },
];

export const cases: CaseStudy[] = [
  {
    slug: "black-clover",
    index: "01",
    brand: "Black Clover",
    role: "Head of BI & Performance Marketing",
    dates: "02/2025 — Present",
    datesShort: "2025—Present",
    reportsTo: "Reports to CEO",
    headline: "Company analytics, then the mix.",
    kicker: "01 / Desk · Black Clover USA · 02/2025 – Present",
    stat: "$1M/month media mix",
    problem:
      "Platform ROAS told a cleaner story than cash. Spreadsheets lagged NetSuite. Sales and spend were not on one desk, so budget allocation was an argument instead of a MER call.",
    approach:
      "Cash MER as the mix KPI: orders from NetSuite against paid. Meridian MMM on the Google, Meta, and Microsoft mix. When two channels claimed the same sale, GeoLift geo-holdouts and RCTs — causal inference for the CEO, then the mix moved.",
    outcome:
      "Direct $1M/month paid for 18 months on a ~$45M year. Weekly allocation against cash MER. Below break-even, we cut. A 50-person sales portal is what ran in production — not a dashboard screenshot deck.",
    situation: [
      "Global apparel. ~$45M this year. Hundreds of employees. I run the company dashboards.",
      "Sales live in Oracle NetSuite. Paid lives in Google Ads, Meta Ads, and Microsoft Ads.",
      "Executives, rep leads, and a field of about fifty reps needed the same numbers with different access — that sales desk is not the company headcount.",
    ],
    broken: [
      "Platform ROAS told a cleaner story than cash. Spreadsheets lagged NetSuite.",
      "Sales and spend were not on one desk, so budget allocation was an argument instead of a MER call.",
    ],
    method: [
      "Cash MER as the mix KPI: orders from NetSuite against paid. Meridian MMM on the Google, Meta, and Microsoft mix.",
      "When two channels claimed the same sale, GeoLift geo-holdouts and RCTs — causal inference for the CEO, then the mix moved. Below cash MER break-even, we cut.",
      "GA4 for the site. Snowflake, dbt, and Airflow into Oracle NetSuite. BI in Looker, Domo, and Tableau. SQL, Python, and R. Google Cloud Run when the portal had to be an app, not a tile.",
    ],
    ran: [
      "Direct $1M/month paid for 18 months (Google, Meta, Microsoft) on a ~$45M year. Weekly budget allocation against cash MER.",
      "A 50-person sales portal built from scratch. Tiered access for executives, rep leads, and reps. NetSuite for live data and updates. CRM-like messaging between users.",
      "Player-coach: led a social media manager, a graphic designer, and international advertising leads in Asia, the United Kingdom, Canada, and Australia.",
      "The fifty people on the portal are sales-desk users, not a team of fifty reports, and not the hundreds of employees in the company.",
    ],
    next: "Mix against cash, not path credit. If a channel is below break-even on MER, it does not get a ROAS defense. Incrementality tests decide whether to scale, not the ad manager’s last-click report.",
  },
  {
    slug: "nutricost",
    index: "02",
    brand: "Nutricost",
    role: "Performance Marketing & Analytics Lead",
    dates: "08/2024 — 02/2025 · 7 months",
    datesShort: "2024—2025",
    reportsTo: "Reports to CMO",
    headline: "$2M/month, four platforms.",
    kicker: "02 / Desk · Nutricost · 08/2024 – 02/2025",
    stat: "$2M/month media",
    problem:
      "Each platform wanted credit for the same order. Last-click and in-app ROAS could not answer mix. Executive stakeholders needed contribution, LTV, and cohorts — and a test when two channels claimed the same lift.",
    approach:
      "Robyn MMM on Amazon, Google, Meta, and TikTok. Multi-touch attribution, LTV, and cohorts in BigQuery, SQL, and R. GeoLift incrementality when Amazon, TikTok, and Meta claimed the same order — the test was the budget call, not last-click.",
    outcome:
      "Owned $2M/month paid for 7 months. Mix across four platforms plus Ketologic and Primaforce ($50 → $1,000/day). Dashboards so the weekly CMO meeting started from one desk.",
    situation: [
      "Supplement brand with a large paid book: Amazon Ads, Google Ads, Meta Ads, TikTok Ads.",
      "Sub-brands Ketologic and Primaforce sat in the same portfolio.",
    ],
    broken: [
      "Each platform wanted credit for the same order. Last-click and in-app ROAS could not answer mix.",
      "Executive stakeholders needed contribution, LTV, and cohorts — and a test when two channels claimed the same lift.",
    ],
    method: [
      "Multi-touch attribution, LTV, and cohorts in BigQuery, SQL, and R.",
      "Robyn MMM on the four-platform book. GA4 and Looker Studio for the weekly CMO desk.",
      "GeoLift incrementality when Amazon, TikTok, and Meta claimed the same order — the test was the budget call, not last-click.",
    ],
    ran: [
      "Owned $2M/month paid for 7 months. Mix across four platforms plus Ketologic and Primaforce ($50 → $1,000/day).",
      "Dashboards for executive stakeholders so the weekly meeting started from one desk.",
    ],
    next: "Cut or scale from GeoLift and cash MER, not from the platform that shouted loudest. Larger monthly spend than Black Clover; CMO reporting, four platforms, Robyn on the mix.",
  },
  {
    slug: "mcfly",
    index: "03",
    brand: "McFly Ads",
    role: "CEO · marketing data science",
    dates: "04/2020 — Present",
    datesShort: "2020—Present",
    reportsTo: "Founder / CEO",
    headline: "The gap was spend next to sales.",
    kicker: "03 / Desk · McFly Ads · 04/2020 – Present",
    stat: "10 named brands",
    problem:
      "Brands were buying Google, Meta, and the rest. Each platform reported a win. Shopify (or a ledger) held sales after returns. Finance asked a simpler question: did this period’s spend clear contribution?",
    approach:
      "A marketing data-science company since 2020: Robyn and Meridian MMMs, GeoLift and causal inference, custom $10K data-science executive dashboards in Looker and Tableau, retail store command centers, and paid allocation.",
    outcome:
      "Six years. Ten named brands. Complete public roster — no invented ROAS. McFly Analytics submitted to the Shopify App Store (listing pending). Harbor Home on the live demo is SAMPLE, not a client.",
    situation: [
      "A marketing data-science company since 2020 — six years. W-2 roles held concurrently — the company did not pause.",
      "Brands were buying Google, Meta, and the rest. Each platform reported a win. Shopify (or a ledger) held sales after returns.",
      "Finance asked a simpler question: did this period’s spend clear contribution — and what is LTV from the store’s own orders, not from a pixel?",
    ],
    broken: [
      "Pixels and path credit. Agency decks. No break-even from margin. No honest LTV from the Shopify API.",
      "Operators — trades, solar, lighting, bookkeeping, product brands, and retail floors — did not need another attribution religion. They needed spend beside cash, and a desk executives would actually open.",
    ],
    method: [
      "I was sure enough in the analytics that I cold-outreached lead-gen companies and offered to pay their ads myself — commission only if I closed. It worked. They started paying the ads and paying me.",
      "Robyn and Meridian MMMs, GeoLift and causal inference, custom $10K data-science executive dashboards in Looker and Tableau, retail store command centers, paid allocation, workflow automation, and BI (Looker, Domo, Tableau, Looker Studio).",
      "Shopify store builds happened; they are not the offer. The offer is the desk. Research agents and reporting loops sit behind the work. They are how it ships — not a job title.",
    ],
    ran: [
      "6 years of marketing data science for 10 named brands. Presented analyses to brand operators.",
      "McFly Analytics submitted to the Shopify App Store (listing pending): cash MER and Shopify-API LTV. The lab, not the job.",
      "Sample Harbor Home Co on the live demo is not a client. Same math already run for companies, now a product stores can turn on.",
    ],
    next: "One allocation call per period: above or below break-even on cash. Then mix. Then, if needed, incrementality. The app is the productized version of the $10K desks and command centers — not a demo pretending to be a listed app.",
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

export const origin = {
  lead: "I bet on myself.",
  copy: "I was sure enough in the analytics that I cold-outreached lead-gen companies and offered to pay their ads myself — commission only if I closed. It worked. They started paying the ads and paying me.",
  note: "Research agents and reporting loops sit behind the work. They are how it ships — not a job title.",
} as const;

export const methodSteps = [
  "Data",
  "Warehouse",
  "Model",
  "Experiment",
  "Decision",
  "Budget",
] as const;

export const methodPillars = [
  {
    title: "Cash MER",
    body: "Cash MER is sales (after returns, from the ledger) ÷ ad spend. Break-even is 1 ÷ contribution margin. Platform ROAS is a channel report. It is not the allocation.",
  },
  {
    title: "Bayesian MMM",
    body: "Marketing mix models I have built — Robyn and Bayesian Meridian, and mix work in SQL, Python, and R — how much each channel is pulling, with diminishing returns. The model is a tool. The budget is the job.",
  },
  {
    title: "GeoLift",
    body: "Incrementality testing — GeoLift, geo-holdouts, and RCTs — when the question is causal inference, not path credit. I do not publish a fake lift percentage. The artifact is the budget that moved.",
  },
] as const;

export const methodSystems = [
  "50-person sales portal at Black Clover. Live Oracle NetSuite, tiered access, CRM-like messaging.",
  "McFly Ads since 2020. Robyn and Meridian. GeoLift. $10K executive dashboards. Retail command centers. Ten named brands. McFly Analytics submitted to the Shopify App Store. Harbor Home is SAMPLE, not a client.",
] as const;

export const stack = [
  { name: "MMM", detail: "Robyn and Bayesian Meridian." },
  { name: "MER", detail: "Cash sales after returns ÷ spend." },
  { name: "GeoLift", detail: "Causal holdouts, not path credit." },
  { name: "SQL", detail: "The warehouse language." },
  { name: "Python", detail: "Cleaning, models, pipelines." },
  { name: "R", detail: "EDA and statistical work." },
  { name: "Snowflake", detail: "Warehouse." },
  { name: "BigQuery", detail: "Warehouse." },
  { name: "Budget", detail: "The job after the model." },
  { name: "Looker", detail: "The executive desk." },
  { name: "Meridian", detail: "Bayesian MMM." },
  { name: "Causal", detail: "Inference, not last-click." },
] as const;

export const evidenceItems = [
  {
    index: "01",
    title: "Six years on the desk",
    body: "McFly Ads since 04/2020. Current W-2: Head of BI & Performance Marketing at Black Clover, 02/2025–Present.",
  },
  {
    index: "02",
    title: "R, SQL, and Python on the same desks",
    body: "R for cleaning and exploratory analysis at Black Clover and Nutricost, with SQL and Python on those same books.",
  },
  {
    index: "03",
    title: "The test is the budget call",
    body: "GeoLift geo-holdouts, geo-testing, and RCTs when two channels claimed the same sale. Incrementality decides whether the mix moves.",
  },
  {
    index: "04",
    title: "Same numbers for operators and the room",
    body: "I present the mix to the Black Clover CEO and the Nutricost CMO. At McFly Ads, to brand operators.",
  },
  {
    index: "05",
    title: "Utah Valley University",
    body: "Bachelor of Science. Coursework in information systems, data analytics, statistics, and digital marketing. Orem, Utah.",
  },
  {
    index: "06",
    title: "Meridian on the live mix",
    body: "Bayesian MMM in Meridian on the Google, Meta, and Microsoft mix at Black Clover.",
  },
  {
    index: "07",
    title: "The books I ran",
    body: "$1M/month Black Clover mix, $2M/month Nutricost, $30M+ media directed. Cash MER, not platform ROAS.",
  },
  {
    index: "08",
    title: "Where I work from",
    body: "American Fork, Utah, United States. US remote. EST overlap.",
  },
  {
    index: "09",
    title: "Concurrent seats",
    body: "6 years in marketing data science (04/2020–Present). McFly Ads CEO held with the Black Clover and Nutricost W-2 roles — the company did not pause.",
  },
  {
    index: "10",
    title: "Work authorization",
    body: "US citizen. No visa sponsorship required.",
  },
] as const;

export const resume = {
  role: "Head of Business Intelligence & Performance Marketing",
  scan: "6 years of experience · $1M/month mix · $2M/month Nutricost · $30M+ media directed · Meridian, Robyn, GeoLift, R",
  summary:
    "Head of Business Intelligence & Performance Marketing at Black Clover (~$45M this year). 6 years of experience in marketing data science. I report to the CEO and own the $1M/month paid mix. Bayesian MMM in Meridian. GeoLift incrementality. Cash MER, not platform ROAS. Previously $2M/month at Nutricost (Robyn, R, BigQuery). $30M+ media directed.",
  jobs: [
    {
      title: "Head of Business Intelligence & Performance Marketing",
      org: "Black Clover USA",
      dates: "02/2025 - Present",
      meta: "W-2. Reports to the CEO. ~$45M this year. Hundreds of employees. Global. $1M/month mix for 18 months.",
      bullets: [
        "Bayesian statistical modeling: Meridian MMM on Google, Meta, and Microsoft. GeoLift geo-holdouts, geo-testing, and RCTs when two channels claimed the same sale — experimental methods and causal inference. Below cash MER break-even, we cut.",
        "Allocated $1M/month paid mix for 18 months across Google Ads, Meta Ads, and Microsoft Ads against cash MER for the CEO. Platform ROAS was not the budget.",
        "Built a 50-person sales portal from scratch for executives, rep leads, and reps — the sales desk, not company headcount. Live Oracle NetSuite, tiered access, CRM-style messaging.",
        "Finance desk: Snowflake warehouse, dbt models, and Airflow jobs into Oracle NetSuite. R for data cleaning and exploratory analysis, plus SQL and Python. BI in Looker, Domo, and Tableau.",
        "Led 1 social media manager, 1 graphic designer, and international advertising leads in Asia, the UK, Canada, and Australia.",
      ],
    },
    {
      title: "Performance Marketing & Analytics Lead",
      org: "Nutricost",
      dates: "08/2024 - 02/2025 (7 months)",
      meta: "W-2. Reported to the CMO.",
      bullets: [
        "Robyn MMM on Amazon, Google, Meta, and TikTok. GeoLift incrementality when those platforms claimed the same order. Presented results to the CMO. The test was the budget call — not last-click.",
        "Scaled Ketologic and Primaforce from $50/day to $1,000/day. Owned $2M/month paid for 7 months across the four platforms.",
        "Multi-touch attribution, LTV, and cohorts in BigQuery, SQL, and R so the CMO could see contribution beyond last-click. GA4 and Looker Studio for the weekly desk.",
      ],
    },
    {
      title: "CEO",
      org: "McFly Ads",
      dates: "04/2020 - Present",
      meta: "Marketing data-science company. 6 years of experience in this seat. W-2 roles held concurrently — the company did not pause.",
      bullets: [
        "6 years of marketing data science for 10 named brands: Robyn and Meridian MMMs, GeoLift, causal inference, $10K data-science executive dashboards in Looker and Tableau, retail command centers, and paid allocation. Presented analyses to brand operators.",
        "Named brands: Marksman Construction, Malama Solar, Royal Peak Lighting, Stretch Labs, Kin Home, BatBridge Bookkeeping, Whirly Board, Arizona Gym Floors, Pure Air Solutions, Priority Mulching Services.",
        "McFly Analytics submitted to the Shopify App Store (listing pending): cash MER and Shopify-API LTV. The lab, not the job. mcflyads.com.",
      ],
    },
  ],
  skills: [
    {
      label: "Measurement",
      items:
        "marketing mix modeling (MMM), Robyn, Meridian, Bayesian statistical modeling, incrementality testing, experimental methods, causal inference, GeoLift, multi-touch attribution (MTA), MER, marketing efficiency ratio, budget allocation, marketing data science",
    },
    {
      label: "Data & BI",
      items:
        "SQL, Python, R, Snowflake, dbt, Airflow, BigQuery, Looker, Looker Studio, Domo, Tableau, GA4, Oracle NetSuite",
    },
    {
      label: "Paid & commerce",
      items:
        "Google Ads, Meta Ads, Amazon Ads, TikTok Ads, Microsoft Ads, Shopify, performance marketing, paid media",
    },
    {
      label: "Leadership",
      items:
        "executive stakeholders, measurement consulting, international paid (Asia, UK, Canada, Australia)",
    },
  ],
  education:
    "Utah Valley University, Orem, Utah — Bachelor of Science. Coursework in information systems, data analytics, statistics, and digital marketing.",
} as const;

export function caseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((item) => item.slug === slug);
}
