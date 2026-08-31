import type { MetadataRoute } from "next";

import { projectsData } from "./projects/projectsData";

const siteUrl = "https://siml-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date();
  const pages = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/resume", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  return [
    ...pages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified: updatedAt,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...projectsData.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
