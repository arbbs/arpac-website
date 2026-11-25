import type { MetadataRoute } from "next";
import { listGuides } from "../lib/guides";
import { SERVICES } from "../lib/services";
import { SITE_URL } from "../lib/site";

export const revalidate = 600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const guides = await listGuides();
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.8 },
    ...SERVICES.map((s) => ({ url: `${SITE_URL}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${SITE_URL}/guides`, changeFrequency: "weekly", priority: 0.7 },
    ...guides.map((g) => ({ url: `${SITE_URL}/guides/${g.slug}`, lastModified: g.updated_at, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
