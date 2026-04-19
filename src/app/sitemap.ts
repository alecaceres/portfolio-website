import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const lastModified = new Date();

  return ["en", "es", "de"].map((locale) => ({
    url: `${base}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1.0,
  }));
}
