import type { MetadataRoute } from "next";

const SITE_URL = "https://central-do-concreto-br6r.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
