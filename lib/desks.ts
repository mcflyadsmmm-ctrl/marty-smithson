export type DeskSlug = "mcfly" | "cash-mer" | "incrementality" | "nutricost";

export type DeskKind = "live" | "synthetic";

export type DeskMeta = {
  slug: DeskSlug;
  kind: DeskKind;
  field: string;
  title: string;
  role: string;
  blurb: string;
  href: string;
};

export const desks: DeskMeta[] = [
  {
    slug: "mcfly",
    kind: "live",
    field: "Live product",
    title: "Mcfly Analytics Shopify App",
    role: "Founder and Data Analytics Consultant, McFly Ads.",
    blurb: "The shipped Shopify desk. Open it.",
    href: "/work/desks/mcfly",
  },
  {
    slug: "cash-mer",
    kind: "synthetic",
    field: "Black Clover · synthetic book",
    title: "Cash MER",
    role: "Head of BI & Performance Marketing. I report to the CEO.",
    blurb: "Ledger sales over exact spend. Platform ROAS is not the budget.",
    href: "/work/desks/cash-mer",
  },
  {
    slug: "incrementality",
    kind: "synthetic",
    field: "Black Clover · synthetic book",
    title: "Incrementality",
    role: "Head of BI & Performance Marketing. I report to the CEO.",
    blurb: "Two channels claim the same sale. The holdout decides the call.",
    href: "/work/desks/incrementality",
  },
  {
    slug: "nutricost",
    kind: "synthetic",
    field: "Nutricost · synthetic book",
    title: "Margins and COGS",
    role: "Advertising Data Scientist. I reported to the CMO.",
    blurb: "Thirteen catalogs. One station for contribution past last-click.",
    href: "/work/desks/nutricost",
  },
];

export type CashMerWeek = {
  id: string;
  label: string;
  sales: number;
  google: number;
  meta: number;
  microsoft: number;
  platformSales: number;
  closed: boolean;
};

export const CASH_MER_BREAK_EVEN = 2.4;

export const cashMerWeeks: CashMerWeek[] = [
  {
    id: "w1",
    label: "W1",
    sales: 2_184_000,
    google: 310_000,
    meta: 340_000,
    microsoft: 162_000,
    platformSales: 3_102_000,
    closed: true,
  },
  {
    id: "w2",
    label: "W2",
    sales: 2_262_000,
    google: 328_000,
    meta: 351_000,
    microsoft: 168_000,
    platformSales: 3_248_000,
    closed: true,
  },
  {
    id: "w3",
    label: "W3",
    sales: 2_094_000,
    google: 301_000,
    meta: 362_000,
    microsoft: 171_000,
    platformSales: 3_186_000,
    closed: true,
  },
  {
    id: "w4",
    label: "W4",
    sales: 2_318_000,
    google: 336_000,
    meta: 348_000,
    microsoft: 159_000,
    platformSales: 3_410_000,
    closed: true,
  },
  {
    id: "w5",
    label: "W5",
    sales: 2_241_000,
    google: 319_000,
    meta: 355_000,
    microsoft: 174_000,
    platformSales: 3_274_000,
    closed: true,
  },
  {
    id: "w6",
    label: "W6",
    sales: 2_087_000,
    google: 294_000,
    meta: 371_000,
    microsoft: 181_000,
    platformSales: 3_221_000,
    closed: true,
  },
  {
    id: "w7",
    label: "W7",
    sales: 0,
    google: 0,
    meta: 0,
    microsoft: 0,
    platformSales: 0,
    closed: false,
  },
  {
    id: "w8",
    label: "W8",
    sales: 2_276_000,
    google: 322_000,
    meta: 339_000,
    microsoft: 166_000,
    platformSales: 3_198_000,
    closed: true,
  },
  {
    id: "w9",
    label: "W9",
    sales: 2_409_000,
    google: 348_000,
    meta: 344_000,
    microsoft: 158_000,
    platformSales: 3_462_000,
    closed: true,
  },
  {
    id: "w10",
    label: "W10",
    sales: 2_331_000,
    google: 331_000,
    meta: 360_000,
    microsoft: 170_000,
    platformSales: 3_388_000,
    closed: true,
  },
  {
    id: "w11",
    label: "W11",
    sales: 2_198_000,
    google: 308_000,
    meta: 366_000,
    microsoft: 177_000,
    platformSales: 3_251_000,
    closed: true,
  },
  {
    id: "w12",
    label: "W12",
    sales: 2_364_000,
    google: 341_000,
    meta: 352_000,
    microsoft: 164_000,
    platformSales: 3_429_000,
    closed: true,
  },
];

export type CashMerChannel = "google" | "meta" | "microsoft";

export const cashMerChannels: {
  id: CashMerChannel;
  label: string;
}[] = [
  { id: "google", label: "Google" },
  { id: "meta", label: "Meta" },
  { id: "microsoft", label: "Microsoft" },
];

export function weekSpend(week: CashMerWeek): number {
  return week.google + week.meta + week.microsoft;
}

export function cashMer(week: CashMerWeek): number | null {
  if (!week.closed) return null;
  const spend = weekSpend(week);
  if (spend === 0) return null;
  return week.sales / spend;
}

export function platformRoas(week: CashMerWeek): number | null {
  if (!week.closed) return null;
  const spend = weekSpend(week);
  if (spend === 0) return null;
  return week.platformSales / spend;
}

export type IncrementalityChannel = {
  id: CashMerChannel;
  label: string;
  claimed: number;
  incremental: number;
  holdouts: number;
  weeks: number;
};

export const incrementalityChannels: IncrementalityChannel[] = [
  {
    id: "google",
    label: "Google",
    claimed: 980_000,
    incremental: 710_000,
    holdouts: 14,
    weeks: 6,
  },
  {
    id: "meta",
    label: "Meta",
    claimed: 1_240_000,
    incremental: 640_000,
    holdouts: 18,
    weeks: 6,
  },
  {
    id: "microsoft",
    label: "Microsoft",
    claimed: 410_000,
    incremental: 180_000,
    holdouts: 11,
    weeks: 6,
  },
];

export type NutricostCatalog = {
  id: string;
  name: string;
  kind: string;
  sales: number;
  cogs: number;
  lastClick: number;
  blended: number;
};

export const nutricostCatalogs: NutricostCatalog[] = [
  { id: "c01", name: "Catalog 01", kind: "Capsules", sales: 412_000, cogs: 168_000, lastClick: 0.41, blended: 0.28 },
  { id: "c02", name: "Catalog 02", kind: "Powder", sales: 388_000, cogs: 151_000, lastClick: 0.36, blended: 0.31 },
  { id: "c03", name: "Catalog 03", kind: "Gummies", sales: 274_000, cogs: 129_000, lastClick: 0.22, blended: 0.18 },
  { id: "c04", name: "Catalog 04", kind: "Softgel", sales: 196_000, cogs: 81_000, lastClick: 0.18, blended: 0.14 },
  { id: "c05", name: "Catalog 05", kind: "Drink", sales: 241_000, cogs: 118_000, lastClick: 0.15, blended: 0.21 },
  { id: "c06", name: "Catalog 06", kind: "Capsules", sales: 329_000, cogs: 142_000, lastClick: 0.29, blended: 0.24 },
  { id: "c07", name: "Catalog 07", kind: "Powder", sales: 187_000, cogs: 74_000, lastClick: 0.11, blended: 0.16 },
  { id: "c08", name: "Catalog 08", kind: "Gummies", sales: 154_000, cogs: 79_000, lastClick: 0.09, blended: 0.12 },
  { id: "c09", name: "Catalog 09", kind: "Capsules", sales: 298_000, cogs: 121_000, lastClick: 0.24, blended: 0.19 },
  { id: "c10", name: "Catalog 10", kind: "Softgel", sales: 163_000, cogs: 66_000, lastClick: 0.08, blended: 0.11 },
  { id: "c11", name: "Catalog 11", kind: "Powder", sales: 221_000, cogs: 94_000, lastClick: 0.14, blended: 0.17 },
  { id: "c12", name: "Catalog 12", kind: "Drink", sales: 142_000, cogs: 71_000, lastClick: 0.07, blended: 0.09 },
  { id: "c13", name: "Catalog 13", kind: "Capsules", sales: 176_000, cogs: 73_000, lastClick: 0.1, blended: 0.13 },
];

export type McflyPeriod = "month" | "quarter" | "year";

export const mcflyPeek = {
  asOf: "Career peek",
  periods: {
    month: { sales: 54_920, lastYear: 49_110, orders: 808 },
    quarter: { sales: 161_400, lastYear: 148_220, orders: 2_374 },
    year: { sales: 492_180, lastYear: 451_060, orders: 7_216 },
  },
  typicalOrder: 68,
  returningDollars: 16_200,
  returningShare: 0.29,
  weekendShare: 0.22,
  daysToSecond: 21,
  ltv90: 119,
  spend: 16_400,
  breakEven: 2.2,
  margin: 0.45,
} as const;

export function mcflyRoas(): number {
  return mcflyPeek.periods.month.sales / mcflyPeek.spend;
}

export function catalogMargin(row: NutricostCatalog): number {
  return (row.sales - row.cogs) / row.sales;
}

export function deskBySlug(slug: string): DeskMeta | undefined {
  return desks.find((desk) => desk.slug === slug);
}

export function assertDeskSlug(slug: DeskSlug): DeskSlug {
  switch (slug) {
    case "mcfly":
    case "cash-mer":
    case "incrementality":
    case "nutricost":
      return slug;
    default: {
      const _never: never = slug;
      return _never;
    }
  }
}
