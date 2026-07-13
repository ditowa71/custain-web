@AGENTS.md

## Projekt

custain.de — Marketing-Site für custain (Kundenmanagement-Beratung + KI-Produktentwicklung).

- **Repo**: eigenes GitHub-Repository
- **Deployment**: Vercel, eigenes Projekt (getrennt von Karriva)
- **Domain**: https://www.custain.de

## Deployment

Änderungen via `git push origin main` → Vercel deployed automatisch.

Kein separates Deployment-Fenster nötig — reine Marketing-Site, kein Backend, kein Stripe, kein Auth. Jederzeit deploybar.

## Struktur

- `app/page.tsx` — Startseite
- `app/leistungen/*` — Leistungsseiten (CRM, CLM, Retention, Segmentierung)
- `app/news/*` — News/Presse-Bereich, Artikel in `app/news/data.tsx`
- `app/sitemap.ts` — Sitemap für Google
- `app/robots.ts` — robots.txt

## Zusammenarbeit

- Dirk immer mit "du" ansprechen.
- Keine internen Links auf karriva.com — custain.de und Karriva sind getrennte Marken.
