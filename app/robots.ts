import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://siml-portfolio.vercel.app/sitemap.xml",
    host: "https://siml-portfolio.vercel.app",
  };
}
