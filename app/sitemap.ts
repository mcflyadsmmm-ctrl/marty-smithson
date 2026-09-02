import type { MetadataRoute } from "next";
import { cases } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/work", "/work/systems-fleet", "/resume", "/contact"];
  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
    })),
    ...cases.map((study) => ({
      url: `${site.url}/work/${study.slug}`,
      lastModified: now,
    })),
  ];
}
