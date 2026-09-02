export type BrandCategory = "Trades" | "Professional" | "Product";

export type CaseSlug = "nutricost" | "mcfly";

export type LaneId = "wholesale" | "portal" | "cash" | "retail" | "fulfillment";

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

export const homeTease = {
  paragraphs: [
    "When I got here the warehouse lived in Domo. I moved it onto Google Cloud Run — Cloud Run, BigQuery, and the Apps Script jobs a shop like this actually runs on — and about twenty thousand a month came off the bill. The new stack had to stay in a cheap GCP class, around thirty dollars.",
    "I built a partner portal on that same stack for about fifty people in the field. Executives, rep leads, and the reps. Live NetSuite. Each role sees a different slice. They can message each other. They cannot rewrite the number.",
    "Wholesale, cash, retail, and fulfillment each keep their own book. One writer. Isolated identity. If two lanes can quietly disagree, leadership is deciding on theater.",
  ],
  more: "The architecture, the Domo move, and the portal identity model.",
  href: "/work/systems-fleet",
} as const;

export const homeAfter =
  "I was at Nutricost before this. I organized the data portfolio for thirteen unique sub-brands, and I built the full data warehouse and the advertising data-science station executives used for profit margins and COGS. McFly Ads is the company I started in 2020.";

export type FleetLane = {
  id: LaneId;
  title: string;
  short: string;
  body: string[];
};

export const fleet = {
  title: "Black Clover",
  role: "Head of BI & Performance Marketing",
  reportsTo: "I report to the CEO.",
  dates: "February 2025 — present",
  lead: "I moved the warehouse off Domo and built the isolated books the CEO and the field both use.",
  open: [
    "The resume can say Cloud Run and a partner portal. What it cannot show is how the company actually decides: five books that are not allowed to borrow from each other, a field of about fifty people who can read a number they cannot rewrite, and a warehouse that had to leave a vendor bill without landing on another one.",
  ],
  shift: {
    title: "Domo to Cloud Run",
    lead: "The warehouse was in Domo when I arrived. One vendor held the tables and the dashboards, and the bill did not match the work.",
    before: {
      label: "Then",
      title: "Domo",
      points: [
        "The full data warehouse sat on a BI vendor.",
        "The work and the invoice had come apart.",
      ],
    },
    after: {
      label: "Now",
      title: "Cloud Run",
      points: [
        "Same warehouse work, on Google Cloud Run.",
        "Apps Script and BigQuery around it.",
        "GCP class held around thirty dollars.",
        "About twenty thousand a month off the bill.",
      ],
    },
    note: "I did not change the work to make the move look good. The constraint was the envelope: a cheap GCP class, not a second vendor.",
  },
  mapCaption: "Five isolated books. Sources do not write the fact. Neither does the field.",
  sources: ["Oracle NetSuite", "Google, Meta, Microsoft", "Retail POS", "Fulfillment"],
  lanes: [
    {
      id: "wholesale",
      title: "Wholesale decision net",
      short: "Exec wholesale",
      body: [
        "Leadership gets one wholesale number. One person writes it. After we ship, we lock it. A second system is not allowed to edit the same fact — if it can, you do not have a book. You have an argument.",
        "Identity stays isolated from the partner portal. A rep cannot drift the number the CEO is looking at. That is the whole point of a decision net: the exec book and the field book can agree, but they cannot share a writer.",
      ],
    },
    {
      id: "portal",
      title: "Partner portal",
      short: "Field portal",
      body: [
        "About fifty people needed the same facts without a copy they could rewrite. I built the portal on Cloud Run. It pulls live Oracle NetSuite. Executives, rep leads, and reps each get the slice their role is allowed to see, and they can message each other.",
        "The portal never owns the fact. It can display the number. It cannot become a second writer. That rule is what keeps a fifty-person field from quietly inventing a second company.",
      ],
    },
    {
      id: "cash",
      title: "Cash MER",
      short: "Cash MER",
      body: [
        "When we look at the mix we look at cash: ledger sales against exact spend. Google, Meta, and Microsoft get budget from that. Platform ROAS is not the budget.",
        "If we cannot close sales to spend, the mix does not move. Fail-closed. Below break-even, we cut. Meridian sits on the Google, Meta, and Microsoft mix. When two channels claim the same sale, GeoLift or an RCT decides — not the ad manager.",
      ],
    },
    {
      id: "retail",
      title: "Retail POS",
      short: "Retail POS",
      body: [
        "Store net sales only. Tax is not a KPI. The retail book does not borrow wholesale or paid numbers to look healthier, and it does not get folded into the exec wholesale number just because a store had a good week.",
      ],
    },
    {
      id: "fulfillment",
      title: "Fulfillment",
      short: "Fulfillment",
      body: [
        "One customer story. A partial shipment stays a partial shipment. Fulfillment is told on its own book so operations cannot get cleaned up into wholesale, and wholesale cannot pretend a partial is a complete order.",
      ],
    },
  ] as const satisfies readonly FleetLane[],
  identities: {
    title: "Who sees what",
    lead: "About fifty people on Cloud Run. Three roles. One live NetSuite. Nobody in this picture writes the fact.",
    roles: [
      {
        title: "Executive",
        sees: "The company book.",
        rule: "Can read. Cannot rewrite.",
      },
      {
        title: "Rep lead",
        sees: "The team.",
        rule: "Can read. Cannot rewrite.",
      },
      {
        title: "Rep",
        sees: "Their own book.",
        rule: "Can read. Cannot rewrite.",
      },
    ],
    note: "Messaging sits between them. Access is the role. The writer lives on the wholesale desk, not in the portal.",
  },
  constraints: {
    title: "What made it hard",
    lead: "The interesting part is not that a portal exists. It is what the portal was not allowed to become.",
    items: [
      {
        title: "Identity isolation",
        body: "The exec wholesale book and the field portal do not share a writer. Agreeing is allowed. Drifting is not.",
      },
      {
        title: "One writer",
        body: "Each lane has one owner. We freeze it after we ship. Dual-write is how two dashboards start telling two companies.",
      },
      {
        title: "The GCP envelope",
        body: "Cloud Run, BigQuery, Apps Script. The class had to stay around thirty dollars. A warehouse move that trades Domo for another fat bill is not a move.",
      },
    ],
  },
  mix: {
    title: "The mix sits on this",
    body: "I allocate a seven-figure monthly paid book across Google, Meta, and Microsoft against cash MER, for the CEO. The systems work is why that call is possible. Without isolated books, mix is a meeting.",
  },
} as const;

export const workPage = {
  lead: "Most of what I want to show is Black Clover. Nutricost and McFly Ads are further down.",
  blackClover: {
    title: "Black Clover",
    role: "Head of BI & Performance Marketing. I report to the CEO.",
    body: "Warehouse off Domo onto Cloud Run — about twenty thousand a month cheaper, held to a GCP class around thirty dollars. Partner portal for about fifty people. Five isolated books: wholesale, the field, cash MER, retail, and fulfillment.",
    href: "/work/systems-fleet",
    more: "Architecture, the move, and the identity model.",
  },
  nutricost: {
    title: "Nutricost",
    role: "Performance Marketing & Analytics Lead. I reported to the CMO.",
    href: "/work/nutricost",
    body: "I organized the data portfolio for thirteen unique sub-brands under the main brand. I built the full data warehouse, and I built the advertising data-science station where executives could see profit margins and COGS.",
    more: "The Nutricost note.",
  },
  mcfly: {
    title: "McFly Ads",
    role: "I started the company in 2020, and I’m CEO there.",
    href: "/work/mcfly",
    body: "I’ve spent those years doing marketing data science for ten brands.",
    more: "The brand names.",
  },
} as const;

export const cases: CaseStudy[] = [
  {
    slug: "nutricost",
    brand: "Nutricost",
    role: "Performance Marketing & Analytics Lead",
    dates: "August 2024 — February 2025",
    reportsTo: "Reported to the CMO",
    lead: "Thirteen sub-brands. One CMO desk for margins and COGS.",
    body: [
      "I organized the data portfolio for thirteen unique sub-brands under the Nutricost main brand. The job was to get those books to sit together so a CMO desk could see the portfolio, not thirteen separate stories.",
      "I built the full data warehouse. I built the advertising data-science station where executives could see profit margins and COGS.",
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
    "Head of Business Intelligence & Performance Marketing at Black Clover — I report to the CEO. I moved the full data warehouse off Domo onto Google Cloud Run (about $20K a month saved) and built a partner portal on Cloud Run for about 50 people. I allocate a seven-figure monthly paid mix across Google, Meta, and Microsoft against cash MER. Previously Performance Marketing & Analytics Lead at Nutricost, reporting to the CMO: I organized a data portfolio for 13 unique sub-brands and built the full warehouse and advertising data-science station executives used for profit margins and COGS. CEO of McFly Ads since 2020.",
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
        "Organized a data portfolio for 13 unique sub-brands under the Nutricost main brand.",
        "Built the full data warehouse and the advertising data-science station where executives could see profit margins and COGS.",
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

export function laneHref(id: LaneId, prefix = ""): string {
  switch (id) {
    case "wholesale":
      return `${prefix}#wholesale`;
    case "portal":
      return `${prefix}#portal`;
    case "cash":
      return `${prefix}#cash`;
    case "retail":
      return `${prefix}#retail`;
    case "fulfillment":
      return `${prefix}#fulfillment`;
    default: {
      const _never: never = id;
      return _never;
    }
  }
}
