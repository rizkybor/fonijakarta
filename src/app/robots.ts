import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://fonijakarta.web.id/sitemap.xml",
    host: "https://fonijakarta.web.id",
  };
}

