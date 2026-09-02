export const site = {
  name: "Marty Smithson",
  title: "Marty Smithson — Head of BI & Performance Marketing",
  description:
    "Marketing measurement that finance will fund. Head of BI & Performance Marketing. MMM, GeoLift, cash MER. $30M+ media directed.",
  url: "https://marty-smithson.vercel.app",
  email: "martysmithson04@gmail.com",
  linkedin: "https://www.linkedin.com/in/marty-smithson",
  linkedinLabel: "linkedin.com/in/marty-smithson",
  phone: "801-717-0418",
  location: "American Fork, Utah",
  locationLine:
    "American Fork, Utah, United States · Salt Lake metro hybrid / US remote · EST overlap",
  authorization: "US citizen. No visa sponsorship required.",
  mcfly: "https://mcflyads.com",
  proof: {
    repo: "https://github.com/mcflyadsmmm-ctrl/marketing-measurement-proof",
    recast: "https://github.com/mcflyadsmmm-ctrl/marketing-measurement-proof/tree/main/00-recast-r-memo",
    geolift: "https://github.com/mcflyadsmmm-ctrl/marketing-measurement-proof/tree/main/01-geolift",
  },
  resumes: [
    {
      key: "MASTER",
      href: "/resumes/Marty_Smithson_Resume_MASTER.pdf",
      file: "Marty_Smithson_Resume_MASTER.pdf",
      label: "MASTER",
    },
    {
      key: "SCIENCE",
      href: "/resumes/Marty_Smithson_Resume_SCIENCE.pdf",
      file: "Marty_Smithson_Resume_SCIENCE.pdf",
      label: "SCIENCE",
    },
    {
      key: "OPERATOR",
      href: "/resumes/Marty_Smithson_Resume_OPERATOR.pdf",
      file: "Marty_Smithson_Resume_OPERATOR.pdf",
      label: "OPERATOR",
    },
  ],
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/evidence", label: "Evidence" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;
