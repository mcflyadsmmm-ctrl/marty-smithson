import type { MetadataRoute } from "next";
import { cases } from "@/lib/content";
import { desks } from "@/lib/desks";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/work",
    "/work/desks",
    "/work/systems-fleet",
    "/resume",
    "/contact",
  ];
  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
    })),
    ...desks.map((desk) => ({
      url: `${site.url}/work/desks/${desk.slug}`,
      lastModified: now,
    })),
    ...cases.map((study) => ({
      url: `${site.url}/work/${study.slug}`,
      lastModified: now,
    })),
  ];
}
