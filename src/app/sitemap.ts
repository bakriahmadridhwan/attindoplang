import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ppattindoplangpwr.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://ppattindoplangpwr.vercel.app/profil",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ppattindoplangpwr.vercel.app/informasi",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://ppattindoplangpwr.vercel.app/kegiatan",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
  ];
}
