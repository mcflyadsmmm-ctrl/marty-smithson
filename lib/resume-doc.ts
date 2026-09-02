import { resume } from "@/lib/content";
import { site } from "@/lib/site";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function resumeDocHtml(): string {
  const jobs = resume.jobs
    .map((job) => {
      const bullets = job.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
      return `<h2>${escapeHtml(job.title)}</h2><p><strong>${escapeHtml(job.org)}</strong> · ${escapeHtml(job.dates)} · ${escapeHtml(job.meta)}</p><ul>${bullets}</ul>`;
    })
    .join("");

  const skills = resume.skills
    .map((group) => `<p><strong>${escapeHtml(group.label)}:</strong> ${escapeHtml(group.items)}</p>`)
    .join("");

  return `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(site.name)} — Resume</title>
</head>
<body>
<h1>${escapeHtml(site.name)}</h1>
<p>${escapeHtml(site.locationLine)} · ${escapeHtml(site.authorization)} · ${escapeHtml(site.email)} · ${escapeHtml(site.linkedinLabel)} · ${escapeHtml(site.url)}/contact · ${escapeHtml(site.phone)}</p>
<h2>${escapeHtml(resume.role)}</h2>
<p>${escapeHtml(resume.scan)}</p>
<h2>Summary</h2>
<p>${escapeHtml(resume.summary)}</p>
${jobs}
<h2>Skills</h2>
${skills}
<h2>Education</h2>
<p>${escapeHtml(resume.education)}</p>
</body>
</html>`;
}
