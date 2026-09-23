import type { MetadataRoute } from "next";
import { cases, resumePdfs } from "@/lib/content";
import { desks } from "@/lib/desks";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.revised);
  const paths = [
    "",
    "/work",
    "/work/desks",
    "/work/systems-fleet",
    "/resume",
    "/resume.md",
    "/contact",
    "/llms.txt",
    ...desks.map((desk) => `/work/desks/${desk.slug}`),
    ...cases.map((study) => `/work/${study.slug}`),
    ...resumePdfs.map((pdf) => pdf.href),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
  }));
}
