import { resume } from "@/lib/content";
import { site } from "@/lib/site";

export function resumeMarkdown(): string {
  const jobs = resume.jobs
    .map((job) => {
      const bullets = job.bullets.map((item) => `- ${item}`).join("\n");
      return `### ${job.title}\n\n${job.org} · ${job.dates} · ${job.meta}\n\n${bullets}`;
    })
    .join("\n\n");

  const skills = resume.skills
    .map((group) => `**${group.label}:** ${group.items}`)
    .join("\n\n");

  return `# ${site.name}

${site.locationLine} · ${site.authorization} · ${site.email} · ${site.linkedinLabel} · ${site.url}/contact

${resume.role}

${resume.scan}

## Summary

${resume.summary}

## Experience

${jobs}

## Skills

${skills}

## Education

${resume.education}
`;
}
