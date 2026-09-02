export const site = {
  name: "Marty Smithson",
  title: "Marty Smithson — Head of BI & Performance Marketing",
  description:
    "Head of BI & Performance Marketing at Black Clover. I moved the warehouse off Domo onto Cloud Run and built the partner portal the field uses.",
  url: "https://marty-smithson.vercel.app",
  email: "martysmithson04@gmail.com",
  linkedin: "https://www.linkedin.com/in/marty-smithson",
  linkedinLabel: "linkedin.com/in/marty-smithson",
  phone: "801-717-0418",
  location: "American Fork, Utah",
  locationLine: "American Fork, Utah · Salt Lake hybrid / US remote · EST overlap",
  authorization: "US citizen. No visa sponsorship required.",
  mcfly: "https://mcflyads.com",
  resumes: {
    full: "/resumes/Marty_Smithson_Resume_MASTER.pdf",
    measurement: "/resumes/Marty_Smithson_Resume_SCIENCE.pdf",
    systems: "/resumes/Marty_Smithson_Resume_OPERATOR.pdf",
  },
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
] as const;
