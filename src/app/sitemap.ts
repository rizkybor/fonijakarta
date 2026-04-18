import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

const SITE_URL = "https://fonijakarta.web.id";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/berita`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/events`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/maps`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/keanggotaan`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/profil`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms-of-service`, changeFrequency: "yearly", priority: 0.2 },
  ];

  try {
    const { data, error } = await supabase
      .from("berita")
      .select("slug, published_at, created_at")
      .order("published_at", { ascending: false })
      .limit(500);

    if (error) return staticRoutes;

    const beritaRoutes: MetadataRoute.Sitemap = (data || []).map((row) => ({
      url: `${SITE_URL}/berita/${row.slug}`,
      lastModified: row.published_at || row.created_at || undefined,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    return [...staticRoutes, ...beritaRoutes];
  } catch {
    return staticRoutes;
  }
}

