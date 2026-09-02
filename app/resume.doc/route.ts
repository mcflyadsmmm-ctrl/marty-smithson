import { resumeDocHtml } from "@/lib/resume-doc";

export function GET() {
  return new Response(resumeDocHtml(), {
    headers: {
      "Content-Type": "application/msword; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Marty-Smithson-Resume.doc"',
    },
  });
}
