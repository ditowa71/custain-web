import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteNav, SiteFooter } from "@/app/components/site-nav";
import { news, getNewsBySlug, categoryColors, type NewsCategory } from "../data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return {};
  return {
    title: `${item.title} – custain`,
    description: item.excerpt,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <SiteNav subpage />
      <main>
        <div className="news-detail">
          <div className="breadcrumb">
            <Link href="/">custain</Link>
            <span className="sep">/</span>
            <Link href="/news">News</Link>
            <span className="sep">/</span>
            <span>{item.category}</span>
          </div>

          <div className="news-detail-meta">
            <span
              className="news-cat"
              style={{ color: categoryColors[item.category as NewsCategory] }}
            >
              {item.category}
            </span>
            <span className="news-date">{item.date}</span>
          </div>

          <h1 className="news-detail-title">{item.title}</h1>

          {item.externalUrl && (
            <a
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="news-source-link"
            >
              Originalquelle ansehen ↗
            </a>
          )}

          <div className="news-body">
            {item.body}
          </div>

          <div className="news-back-row">
            <Link href="/news" className="legal-back">← Alle News</Link>
          </div>
        </div>
      </main>
      <SiteFooter subpage />
    </>
  );
}
