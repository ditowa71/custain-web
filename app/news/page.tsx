import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, SiteFooter } from "@/app/components/site-nav";
import { news, categoryColors, type NewsCategory } from "./data";

export const metadata: Metadata = {
  title: "News – custain",
  description: "Pressemitteilungen, Presse-Erwähnungen, Vorträge und Podcast-Auftritte von custain und Dirk Walter.",
};

export default function NewsPage() {
  return (
    <>
      <SiteNav subpage />
      <main>
        <div className="news-page">
          <div className="news-header">
            <Link href="/" className="legal-back">← Zurück</Link>
            <span className="eyebrow plain">News</span>
            <h1>Presse &amp; Auftritte</h1>
            <p className="news-intro">
              Pressemitteilungen, Presse-Erwähnungen, Vorträge und Podcast-Auftritte.
            </p>
          </div>

          <ul className="news-list">
            {news.map((item) => (
              <li key={item.slug} className="news-item">
                <Link href={`/news/${item.slug}`} className="news-item-inner">
                  <div className="news-item-meta">
                    <span
                      className="news-cat"
                      style={{ color: categoryColors[item.category as NewsCategory] }}
                    >
                      {item.category}
                    </span>
                    <span className="news-date">{item.date}</span>
                  </div>
                  <h2 className="news-title">{item.title}</h2>
                  <p className="news-excerpt">{item.excerpt}</p>
                  <span className="news-read">
                    {item.externalUrl ? "Zum Artikel ↗" : "Weiterlesen →"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter subpage />
    </>
  );
}
