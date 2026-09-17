import { resumeMarkdown } from "@/lib/resume-markdown";

export const dynamic = "force-static";

export function GET() {
  return new Response(resumeMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'attachment; filename="marty-smithson-resume.md"',
    },
  });
}
