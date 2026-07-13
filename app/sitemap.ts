import type { MetadataRoute } from "next";
import { news } from "./news/data";

const BASE_URL = "https://www.custain.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,                                             lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/leistungen/crm-strategie`,                    lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/leistungen/customer-lifecycle-management`,    lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/leistungen/kundenbindung-retention`,          lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/leistungen/segmentierung-wertsteuerung`,      lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/news`,                                         lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/impressum`,                                    lastModified, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE_URL}/datenschutz`,                                  lastModified, changeFrequency: "yearly",  priority: 0.2 },
  ];

  const newsPages: MetadataRoute.Sitemap = news.map((item) => ({
    url: `${BASE_URL}/news/${item.slug}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...newsPages];
}
