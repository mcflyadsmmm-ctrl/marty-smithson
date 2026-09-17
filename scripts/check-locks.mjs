import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();

const CLIENTS = [
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
];

const PDF_MD5 = {
  "public/resumes/Marty_Smithson_Resume_MASTER.pdf":
    "28e46f6afed043de3a84d2937412a201",
  "public/resumes/Marty_Smithson_Resume_SCIENCE.pdf":
    "bf39d5feeef7d6631e8e907b905fea4d",
  "public/resumes/Marty_Smithson_Resume_OPERATOR.pdf":
    "c074515643580a7e077087d0c55a6b28",
};

const REQUIRED = [
  "Marketing analytics and measurement.",
  "Mcfly Analytics Shopify App",
  "Founder and Data Analytics Consultant",
  "Advertising Data Scientist",
  "Bachelor of Science — Emphasis: Data Analytics and Statistics (Utah Valley University, May 2025)",
  "$25M+ in career-managed ad spend",
  "https://mcflyads.com",
  "https://mcflyads.com/demo",
  "Harbor Home Co",
  "Open live SAMPLE desk",
  "martysmithson04@gmail.com",
  "linkedin.com/in/marty-smithson",
];

const BANNED = [
  "I build the systems behind better decisions",
  "systems behind better decisions",
  "listing pending",
  "Performance Marketing & Analytics Lead",
  "Data Science and Statistics",
  "CEO of McFly",
  "McFly Ads as CEO",
  "as CEO —",
  "$30M",
  "$30M+",
  "Northline",
  "BI for the call",
  "not the main story",
  "not the main seat",
  "sample-disclaimer",
];

const DEAD_ARCHITECTURE = [
  "components/FleetMap.tsx",
  "components/CaseNav.tsx",
  "components/BooksMatrix.tsx",
  "components/ProofRail.tsx",
  "components/ShiftCompare.tsx",
  "components/CostStrip.tsx",
  "components/LaneGrid.tsx",
  "components/PortalRoles.tsx",
];

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const rel = relative(root, full);
    if (statSync(full).isDirectory()) {
      walk(full, files);
    } else if (/\.(ts|tsx|mjs|js)$/.test(entry)) {
      files.push(rel);
    }
  }
  return files;
}

const surfaces = [
  ...walk(join(root, "app")),
  ...walk(join(root, "components")),
  ...walk(join(root, "lib")),
];

const blob = surfaces
  .map((file) => readFileSync(join(root, file), "utf8"))
  .join("\n");

const content = readFileSync(join(root, "lib/content.ts"), "utf8");
const site = readFileSync(join(root, "lib/site.ts"), "utf8");
const home = readFileSync(join(root, "app/page.tsx"), "utf8");
const resumePage = readFileSync(join(root, "app/resume/page.tsx"), "utf8");

for (const needle of REQUIRED) {
  assert.match(blob, new RegExp(escapeRegExp(needle)), `missing required: ${needle}`);
}

for (const name of CLIENTS) {
  assert.match(content, new RegExp(escapeRegExp(name)), `missing client: ${name}`);
  assert.match(home, /BrandRoster/, "homepage must render the client wall");
assert.match(home, /DeskShelf/, "homepage must lead with openable desks");
assert.match(home, /HarborFeature/, "homepage must feature the live SAMPLE desk");
}

assert.match(content, /role: "Marketing analytics and measurement\."/);
assert.match(content, /Directed \$25M\+ in career-managed ad spend/);
assert.doesNotMatch(content, /\$30M/);
assert.match(site, /mcflyProduct: "Mcfly Analytics Shopify App"/);
assert.match(site, /mcflyTitle: "Founder and Data Analytics Consultant"/);
assert.match(site, /mcflyDemo: "https:\/\/mcflyads.com\/demo"/);
assert.match(site, /spendHeadline: "\$25M\+ in career-managed ad spend"/);

assert.match(content, /title: "Advertising Data Scientist"/);
assert.match(content, /title: "Founder and Data Analytics Consultant"/);
assert.match(
  content,
  /Bachelor of Science — Emphasis: Data Analytics and Statistics \(Utah Valley University, May 2025\)/,
);
assert.doesNotMatch(content, /listing pending/i);
assert.doesNotMatch(content, /CEO of McFly/);
assert.doesNotMatch(resumePage, /listing pending/i);

const spendHits = blob.match(/\$25M\+/g) ?? [];
assert.ok(
  spendHits.length >= 1 && spendHits.length <= 8,
  `$25M+ should be the one spend headline, found ${spendHits.length}`,
);

for (const phrase of BANNED) {
  assert.doesNotMatch(
    blob,
    new RegExp(escapeRegExp(phrase), "i"),
    `banned phrase on a user-facing surface: ${phrase}`,
  );
}

for (const file of DEAD_ARCHITECTURE) {
  assert.equal(existsSync(join(root, file)), false, `architecture leftover still present: ${file}`);
}

assert.doesNotMatch(content, /Five isolated books/);
assert.doesNotMatch(content, /Who sees what/);
assert.doesNotMatch(home, /I build the systems/);

for (const [file, expected] of Object.entries(PDF_MD5)) {
  const bytes = readFileSync(join(root, file));
  const actual = createHash("md5").update(bytes).digest("hex");
  assert.equal(actual, expected, `resume PDF MD5 drift: ${file}`);
}

assert.equal(CLIENTS.length, 10, "exactly ten named clients");

const deskSource = readFileSync(join(root, "lib/desks.ts"), "utf8");
assert.match(deskSource, /slug: "mcfly"/);
assert.match(deskSource, /slug: "cash-mer"/);
assert.match(deskSource, /slug: "incrementality"/);
assert.match(deskSource, /slug: "nutricost"/);
assert.match(deskSource, /kind: "synthetic"/);
assert.match(deskSource, /Advertising Data Scientist/);
assert.match(deskSource, /Harbor Home Co/);
assert.match(deskSource, /82_068/);
assert.match(deskSource, /23_414/);

console.log("locks ok");

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
