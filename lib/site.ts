export const site = {
  name: "Marty Smithson",
  title: "Marty Smithson — Head of BI & Performance Marketing",
  description:
    "I run BI and performance marketing at Black Clover, and I report to the CEO. I moved the warehouse off Domo onto Cloud Run, held the stack to a cheap GCP class, and built isolated books for the CEO and the field.",
  url: "https://marty-smithson.vercel.app",
  email: "martysmithson04@gmail.com",
  linkedin: "https://www.linkedin.com/in/marty-smithson",
  linkedinLabel: "linkedin.com/in/marty-smithson",
  phone: "801-717-0418",
  location: "American Fork, Utah",
  locationLine: "American Fork, Utah. Salt Lake hybrid or US remote. EST overlap.",
  authorization: "US citizen. No visa sponsorship required.",
  mcfly: "https://mcflyads.com",
  education: "Utah Valley University, B.S. Data Science and Statistics",
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
