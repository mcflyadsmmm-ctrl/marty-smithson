export type BrandCategory = "Trades" | "Professional" | "Product";

export type CaseSlug = "nutricost" | "mcfly";

export type CasePoint = {
  title: string;
  body: string;
};

export type CaseBeat = {
  problem: string;
  method: string;
  decision: string;
  outcome: string;
};

export type CaseStudy = {
  slug: CaseSlug;
  brand: string;
  role: string;
  dates: string;
  reportsTo: string;
  lead: string;
  body: string[];
  points: CasePoint[];
  beats?: CaseBeat;
  live?: boolean;
};

export const CLIENT_NAMES = [
  "Marksman Construction",
  "Malama Solar",
  "Royal Peak Lighting",
  "Stretch Labs",
  "Kin Home",
  "BatBridge Bookkeeping",
  "Whirly Board",
  "Arizona Gym Floors",
  "Pure Air Solutions",
  "Priority Mulching Services",
] as const;

export const hero = {
  name: "Marty Smithson",
  role: "Marketing Analytics & Measurement Lead — Meridian MMM, incrementality, cash MER, executive BI — $25M+ paid mix.",
  line: "Head of BI & Performance Marketing at Black Clover. I report to the CEO. Founder and Data Analytics Consultant, McFly Ads.",
  place: "American Fork, Utah. Central Utah or US remote.",
  school:
    "Bachelor of Science — Emphasis: Data Analytics and Statistics (Utah Valley University, May 2025).",
} as const;

export const proof = [
  {
    label: "$25M+ spend",
    note: "Career-managed paid mix on Google, Meta, and Microsoft.",
  },
  {
    label: "Meridian MMM",
    note: "I run Google Meridian, read it, and recommend the mix.",
  },
  {
    label: "Incrementality",
    note: "Geo holdout, GeoLift (synthetic control, augmented synthetic control), or RCT. Test-and-learn decides keep or cut.",
  },
  {
    label: "Cash MER",
    note: "Versus platform ROAS. Ledger sales over exact spend.",
  },
] as const;

export const methods = {
  title: "How the desk reads",
  body: [
    "The marketing science on this desk is marketing mix modeling (MMM) in Google Meridian. I run it on ledger sales and exact spend, read the model, and recommend the mix. Incrementality is a geo holdout, an RCT, or GeoLift when two channels claim the same sale. GeoLift uses synthetic control (augmented synthetic control). Test-and-learn returns incremental ROAS (iROAS). Platform ROAS stays the platform's number.",
    "Attribution and multi-touch attribution (MTA) explain the path. They sit next to cash MER, CAC, and LTV. MTA is the path, the mix model is the mix, and the experiment is the cut. Marketing data science is that desk, and decision science is the call after it: which dollar caused the sale, and which dollar stays. The warehouse work is SQL and Python on Cloud Run. Experimentation is how a cut gets made.",
    "Google, Meta, and Microsoft each score their own conversions. That channel setup is what platform ROAS can say. The executive read is cash, the mix the model recommends, and the cut the test supports. SQL, Snowflake, Python, R, Looker, and Tableau are how the desk is built and shown.",
  ],
  terms: [
    {
      name: "Marketing science",
      note: "Run Google Meridian, read it, recommend the mix. The same media measurement in the McFly Ads consulting practice.",
    },
    {
      name: "Test-and-learn",
      note: "Geo holdout, GeoLift (synthetic control), or RCT. The decision is keep or cut.",
    },
    {
      name: "Synthetic control",
      note: "GeoLift uses synthetic control (augmented synthetic control).",
    },
    {
      name: "Attribution",
      note: "MTA for the path, beside cash MER, CAC, and LTV. iROAS when the test decides.",
    },
    {
      name: "Stack",
      note: "SQL, Snowflake, Python, R, Looker, and Tableau, in the work itself.",
    },
    {
      name: "GTM analytics",
      note: "Warehouse to the executive and partner portal. SQL and Snowflake.",
    },
    {
      name: "Marketing data science",
      note: "Nutricost for the CMO. Decision science on contribution past last-click.",
    },
  ],
} as const;

export const gtmBridge = {
  field: "GTM analytics",
  title: "From the warehouse to the partner desk",
  body: "At Black Clover I moved the warehouse off Domo onto Google Cloud Run. The same numbers feed an executive and partner portal for about fifty people — executives, rep leads, and reps — with live Oracle NetSuite and role-based access. SQL and Snowflake sit under that path. That path is how GTM analytics shows up on this seat: the measurement number, then the desk leadership and partners open.",
} as const;

export const clientWall = {
  field: "McFly Ads clients",
  title: "Named brands",
  body: "Consulting since 2020. I do marketing science for these brands: mix models, incrementality, and media measurement. Public sites where they have one.",
} as const;

export const credo = {
  mark: "platform ≠ incremental ≠ cash",
  line: "Platform ROAS is not the incrementality test. The test is not cash MER. The CEO spends against cash.",
} as const;

export const featured = [
  {
    key: "black-clover",
    title: "Black Clover",
    role: "Head of BI & Performance Marketing. I report to the CEO.",
    line: "Cash MER, Meridian mix models, and incrementality on Google, Meta, and Microsoft. I moved the warehouse off Domo onto Cloud Run so the number finance recognizes is the number we spend against.",
    href: "/work/systems-fleet",
    desk: "/work/desks/cash-mer",
    more: "Read the case",
    beats: {
      problem:
        "Platform ROAS was treated as the budget. Finance and marketing did not share one sales number.",
      method:
        "Marketing science for the CEO. I run Google Meridian MMM on cash sales and exact spend, read it, and recommend the mix. A geo holdout, GeoLift (synthetic control, augmented synthetic control), or an RCT when two channels claim the same sale.",
      decision:
        "Below cash MER break-even, we cut. Meridian sets the mix. The holdout decides incrementality. That is the spend story I put in front of the CEO.",
      outcome:
        "The CEO spends against one cash MER desk. About $20K a month left the Domo bill. A Cloud Run partner portal for about fifty people sits under that seat.",
    },
  },
  {
    key: "nutricost",
    title: "Nutricost",
    role: "Advertising Data Scientist. I reported to the CMO.",
    line: "I organized the data portfolio for thirteen unique sub-brands, and I built the warehouse and the advertising data-science station executives used for margins and COGS.",
    href: "/work/nutricost",
    desk: "/work/desks/nutricost",
    more: "Read the case",
    beats: {
      problem:
        "Thirteen catalogs. No single place an executive could see contribution past last-click.",
      method:
        "I organized the thirteen-sub-brand data portfolio. I built the warehouse and the advertising data-science station. MTA, LTV, and cohorts in BigQuery. I read Robyn for the mix and ran GeoLift (synthetic control, augmented synthetic control) when platforms claimed the same order.",
      decision:
        "The causal check went to the CMO as the spend call. Contribution past last-click was the weekly read.",
      outcome:
        "Executives could see profit margins and COGS on one station. Organized and built. I did not inherit a finished desk.",
    },
  },
  {
    key: "mcfly",
    title: "Mcfly Analytics Shopify App",
    role: "LIVE desk. Founder and Data Analytics Consultant, McFly Ads.",
    line: "Open the live SAMPLE desk at mcflyads.com/demo. Since 2020 I have run marketing data science for the ten named brands on this page.",
    href: "/work/mcfly",
    desk: "/work/desks/mcfly",
    more: "Harbor SAMPLE",
    live: true,
    beats: {
      problem:
        "A shop already has Shopify orders. Most desks still want an ad-network login before they show sales, spend, and LTV.",
      method:
        "Read the order book. Typical order, returning dollars, days to second, LTV. Spend is optional. Cash MER when you add it. No pixels. No path credit.",
      decision:
        "Open the live SAMPLE at mcflyads.com/demo. Harbor Home Co SAMPLE — not a live client.",
      outcome:
        "Mcfly Analytics Shopify App is LIVE at mcflyads.com. McFly Ads is the consulting practice: marketing science and media measurement for the ten named brands. The title is Founder and Data Analytics Consultant.",
    },
  },
] as const;

export const fleet = {
  title: "Black Clover",
  role: "Head of BI & Performance Marketing",
  reportsTo: "I report to the CEO.",
  dates: "February 2025 to present",
  lead: "I run measurement for the CEO: cash MER, mix models, and incrementality. The warehouse left Domo for Cloud Run so that desk could keep one number.",
  beats: featured[0].beats,
  body: [
    "The job is the number the CEO spends against. Cash MER is the control — ledger sales over exact spend on Google, Meta, and Microsoft. I run Google Meridian on that cash and that spend, read the model, and recommend the mix. When two channels claim the same sale I set a geo holdout, GeoLift, or an RCT. GeoLift uses synthetic control (augmented synthetic control). Test-and-learn ends as a decision: keep or cut. Below break-even, we cut. Platform ROAS is not the budget.",
    "The executive read is a spend story: cash in, exact spend, the mix the model recommends, and the cut the test supports. Google, Meta, and Microsoft each score their own conversions, and that channel setup is what platform ROAS can say. I choose the measurement for the question: Meridian for the mix, a holdout or RCT for incrementality, attribution and MTA for the path. SQL, Snowflake, Python, and R sit under the model. Looker and Tableau are how a desk gets seen. I lead the measurement myself, and I lead a social media manager, a graphic designer, and international advertising leads.",
    "The warehouse was in Domo when I arrived. I moved it to Google Cloud Run. Same work. About $20K a month left the bill. I also built a partner portal on Cloud Run for about fifty people — executives, rep leads, and reps — live Oracle NetSuite, role-based access, messaging between users. SQL and Snowflake sit under that path. That warehouse-to-portal path is the GTM analytics on this seat. The cost and the portal are on the resume. They support the measurement seat.",
  ],
  points: [
    {
      title: "Cash MER",
      body: "Ledger sales against exact spend. Google, Meta, and Microsoft. Fail-closed. Below break-even, we cut.",
    },
    {
      title: "Mix models",
      body: "I run Meridian on ledger sales and exact spend, read it, and put the mix recommendation in front of the CEO.",
    },
    {
      title: "Incrementality",
      body: "I set a geo holdout, GeoLift (synthetic control, augmented synthetic control), or an RCT when two channels claim the same sale. Test-and-learn decides keep or cut.",
    },
    {
      title: "Which measurement",
      body: "Meridian for the mix. A holdout or RCT for incrementality. Attribution for the path. Platform ROAS stays the platform's claim.",
    },
    {
      title: "Warehouse move",
      body: "Full data warehouse off Domo onto Google Cloud Run. About $20K a month saved. Apps Script and BigQuery around it.",
    },
    {
      title: "Partner portal",
      body: "Cloud Run desk for about fifty people. Live NetSuite. They can read the number they are allowed to see. They cannot rewrite it.",
    },
  ],
} as const;

export const workPage = {
  lead: "Desks first. Black Clover, Nutricost, and Mcfly Analytics Shopify App.",
} as const;

export const cases: CaseStudy[] = [
  {
    slug: "nutricost",
    brand: "Nutricost",
    role: "Advertising Data Scientist",
    dates: "August 2024 to February 2025",
    reportsTo: "Reported to the CMO",
    lead: "Advertising Data Scientist. I reported to the CMO and ran one desk for margins and COGS.",
    beats: featured[1].beats,
    body: [
      "I organized the data portfolio for thirteen unique sub-brands under the Nutricost main brand. That was the job on day one — one company, thirteen catalogs, and no single place an executive could see contribution.",
      "I built the full data warehouse. I built the advertising data-science station where executives could see profit margins and COGS. Organized and built. I did not inherit a finished desk.",
      "The weekly read was marketing data science for the CMO: contribution past last-click, multi-touch attribution, LTV, and cohorts in BigQuery, with GA4 and Looker Studio on the same view. SQL and R did that work. When two platforms claimed the same order I read Robyn for the mix and ran GeoLift. GeoLift uses synthetic control (augmented synthetic control). I took that spend call to the CMO. That causal check is the decision science on the seat.",
    ],
    points: [
      {
        title: "Thirteen sub-brands",
        body: "I organized the data portfolio under the Nutricost main brand so the CMO desk had one map.",
      },
      {
        title: "Warehouse",
        body: "I built the full data warehouse the advertising work sat on.",
      },
      {
        title: "Ads station",
        body: "I built the analysis station executives used for profit margins and COGS.",
      },
      {
        title: "Contribution",
        body: "MTA, LTV, and cohorts in BigQuery. SQL and R. GA4 and Looker Studio.",
      },
      {
        title: "Causal check",
        body: "I read Robyn for the mix and ran GeoLift (synthetic control, augmented synthetic control) when platforms claimed the same order. The spend call went to the CMO.",
      },
    ],
  },
  {
    slug: "mcfly",
    brand: "Mcfly Analytics Shopify App",
    role: "Founder and Data Analytics Consultant, McFly Ads",
    dates: "April 2020 to present",
    reportsTo: "Personal project and consulting practice",
    lead: "Mcfly Analytics Shopify App is LIVE at mcflyads.com.",
    live: true,
    beats: featured[2].beats,
    body: [
      "The product is live. Install it. It reads the Shopify orders a shop already has and shows typical order, returning dollars, time to a second purchase, and LTV. Add spend when you want sales divided by spend. There is no ad-network login.",
      "I built Mcfly Analytics Shopify App as a personal project next to the full-time seats. The consulting practice is McFly Ads. The title there is Founder and Data Analytics Consultant — since 2020. I own the delivery: the measurement plan, the read for the brand, and the product.",
      "The public SAMPLE desk is Harbor Home Co at mcflyads.com/demo. The consulting work is marketing science for ten named brands: media measurement, mix models, incrementality, dashboards, and paid allocation. The names are on this page.",
    ],
    points: [
      {
        title: "LIVE product",
        body: "Mcfly Analytics Shopify App is live at mcflyads.com. Shopify Admin install. Cash MER when you add spend. LTV from the order history.",
      },
      {
        title: "Consulting title",
        body: "Founder and Data Analytics Consultant at McFly Ads. I own the measurement plan and the read. The product name and the consulting practice are not the same thing.",
      },
      {
        title: "Ten named brands",
        body: "Marksman Construction, Malama Solar, Royal Peak Lighting, Stretch Labs, Kin Home, BatBridge Bookkeeping, Whirly Board, Arizona Gym Floors, Pure Air Solutions, Priority Mulching Services.",
      },
    ],
  },
];

export const brands: {
  mark: string;
  name: (typeof CLIENT_NAMES)[number];
  category: BrandCategory;
  href?: string;
  logo?: string;
}[] = [
  { mark: "MC", name: "Marksman Construction", category: "Trades" },
  {
    mark: "MS",
    name: "Malama Solar",
    category: "Trades",
    href: "https://malamasolar.com",
    logo: "/brands/malama-solar.png",
  },
  {
    mark: "RP",
    name: "Royal Peak Lighting",
    category: "Trades",
    href: "https://royalpeaklighting.com",
    logo: "/brands/royal-peak-lighting.jpg",
  },
  { mark: "SL", name: "Stretch Labs", category: "Product" },
  {
    mark: "KH",
    name: "Kin Home",
    category: "Product",
    href: "https://www.kinhome.com",
    logo: "/brands/kin-home.png",
  },
  {
    mark: "BB",
    name: "BatBridge Bookkeeping",
    category: "Professional",
    href: "https://batbridgeas.com",
    logo: "/brands/batbridge-bookkeeping.png",
  },
  {
    mark: "WB",
    name: "Whirly Board",
    category: "Product",
    href: "https://whirlyboard.com",
    logo: "/brands/whirly-board.png",
  },
  {
    mark: "AG",
    name: "Arizona Gym Floors",
    category: "Trades",
    href: "https://azgymfloors.com",
    logo: "/brands/arizona-gym-floors.png",
  },
  {
    mark: "PA",
    name: "Pure Air Solutions",
    category: "Trades",
    href: "https://pureairsolutionsaz.com",
    logo: "/brands/pure-air-solutions.jpg",
  },
  { mark: "PM", name: "Priority Mulching Services", category: "Trades" },
];

export const resumePdfs = [
  {
    key: "full",
    href: "/resumes/Marty_Smithson_Resume_MASTER.pdf",
    title: "Full resume",
    note: "The usual one.",
    use: "Send this unless they asked for a lane.",
  },
  {
    key: "measurement",
    href: "/resumes/Marty_Smithson_Resume_SCIENCE.pdf",
    title: "Measurement",
    note: "Mix models and incrementality.",
    use: "When the ask is mix models and incrementality.",
  },
  {
    key: "systems",
    href: "/resumes/Marty_Smithson_Resume_OPERATOR.pdf",
    title: "Systems and analytics",
    note: "The warehouse, the portal, and the BI work.",
    use: "When the ask is the warehouse, the portal, and the BI work.",
  },
] as const;

export const resume = {
  role: "Head of Business Intelligence & Performance Marketing",
  scan: "Head of BI & Performance Marketing at Black Clover · reports to the CEO · Bachelor of Science — Emphasis: Data Analytics and Statistics (Utah Valley University, May 2025)",
  summary:
    "Head of Business Intelligence & Performance Marketing at Black Clover — I report to the CEO. Directed $25M+ in career-managed ad spend. I moved the full data warehouse off Domo onto Google Cloud Run (about $20K a month saved) and built a partner portal on Cloud Run for about 50 people. I allocate a seven-figure monthly paid mix across Google, Meta, and Microsoft against cash MER. Previously Advertising Data Scientist at Nutricost, reporting to the CMO: I organized a data portfolio for 13 unique sub-brands and built the full warehouse and advertising data-science station executives used for profit margins and COGS. Founder and Data Analytics Consultant at McFly Ads since 2020. Mcfly Analytics Shopify App is LIVE at mcflyads.com.",
  jobs: [
    {
      title: "Head of Business Intelligence & Performance Marketing",
      org: "Black Clover USA",
      dates: "02/2025 - Present",
      meta: "Reports to the CEO.",
      bullets: [
        "Moved the full data warehouse off Domo onto Google Cloud Run. About $20K a month saved.",
        "Built a partner portal on Cloud Run for about 50 people — executives, rep leads, and reps. Live Oracle NetSuite, role-based access, messaging between users, hard cost cap.",
        "Meridian MMM on Google, Meta, and Microsoft: read the model, then the mix recommendation to the CEO. GeoLift (synthetic control, augmented synthetic control) and RCTs when two channels claimed the same sale. Below cash MER break-even, we cut.",
        "Directed a seven-figure monthly paid mix against cash MER for the CEO. Platform ROAS was not the budget.",
        "Snowflake, dbt, and Airflow into Oracle NetSuite. R, SQL, and Python. BI in Looker, Domo, and Tableau.",
        "Led a social media manager, a graphic designer, and international advertising leads in Asia, the UK, Canada, and Australia.",
      ],
    },
    {
      title: "Advertising Data Scientist",
      org: "Nutricost",
      dates: "08/2024 - 02/2025 (7 months)",
      meta: "Reported to the CMO.",
      bullets: [
        "Organized a data portfolio for 13 unique sub-brands under the Nutricost main brand.",
        "Built the full data warehouse and the advertising data-science station where executives could see profit margins and COGS.",
        "Read Robyn for the mix and ran GeoLift (synthetic control, augmented synthetic control) when platforms claimed the same order. Took that spend call to the CMO. MTA, LTV, and cohorts in BigQuery with SQL and R.",
      ],
    },
    {
      title: "Founder and Data Analytics Consultant",
      org: "McFly Ads",
      dates: "04/2020 - Present",
      meta: "Consulting practice. I started the company in 2020.",
      bullets: [
        "Mcfly Analytics Shopify App is LIVE at mcflyads.com. Personal project I run next to the full-time seats.",
        "6 years of marketing data science for 10 named brands: media measurement, Robyn and Meridian, GeoLift (synthetic control, augmented synthetic control), executive dashboards, retail command centers, and paid allocation.",
        "Named brands: Marksman Construction, Malama Solar, Royal Peak Lighting, Stretch Labs, Kin Home, BatBridge Bookkeeping, Whirly Board, Arizona Gym Floors, Pure Air Solutions, Priority Mulching Services.",
      ],
    },
  ],
  skills: [
    {
      label: "Measurement",
      items:
        "media measurement, marketing mix modeling (MMM), Robyn, Meridian, incrementality testing, GeoLift, synthetic control, augmented synthetic control, test-and-learn, multi-touch attribution, cash MER, budget allocation",
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
    "Bachelor of Science — Emphasis: Data Analytics and Statistics (Utah Valley University, May 2025)",
} as const;

export function caseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((item) => item.slug === slug);
}
