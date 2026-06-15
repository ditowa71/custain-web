import type { Metadata } from "next";
import { SiteNav, SiteFooter } from "@/app/components/site-nav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CRM-Strategie & Roadmap – custain",
  description: "CRM-Strategie, Roadmap und Steuerung für Unternehmen, die ihre Kundenbeziehungen messbar verbessern wollen. Beratung aus Köln.",
};

export default function CRMStrategie() {
  return (
    <>
      <SiteNav subpage />
      <main>
        <section className="service-hero">
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">custain</Link>
              <span className="sep">/</span>
              <Link href="/#leistungen">Leistungen</Link>
              <span className="sep">/</span>
              <span>CRM-Strategie &amp; Roadmap</span>
            </nav>
            <span className="eyebrow">Leistung 01</span>
            <h1>Strategie, die im Tagesgeschäft trägt.</h1>
            <p className="intro">
              Eine CRM-Strategie ist mehr als ein Foliensatz. Sie beschreibt, welche Kunden priorisiert werden, über welche Kanäle sie angesprochen werden und wie Maßnahmen ineinandergreifen. custain entwickelt diese Strategie gemeinsam mit Ihrem Team: auf Basis Ihrer Daten, Ihrer Organisation und Ihrer Ziele.
            </p>
          </div>
        </section>

        <section className="service-section">
          <div className="wrap">
            <div className="service-section-head">
              <span className="eyebrow">Leistungsumfang</span>
              <h2>Was ich anbiete</h2>
            </div>
            <div className="scope-list">
              <div className="scope-item">
                <span className="scope-label">Bestandsaufnahme</span>
                <span className="scope-desc">CRM-Reifegrad, Datenqualität, Prozesse und Systemlandschaft analysieren. Das schafft eine realistische Ausgangsbasis, bevor Strategie entwickelt wird.</span>
              </div>
              <div className="scope-item">
                <span className="scope-label">Strategieentwicklung</span>
                <span className="scope-desc">Zielkunden definieren, Kontaktstrategie entwickeln, Maßnahmen nach Wirkung und Aufwand priorisieren. Zusammen mit Ihrem Team, nicht am grünen Tisch.</span>
              </div>
              <div className="scope-item">
                <span className="scope-label">Roadmap</span>
                <span className="scope-desc">Konkrete Schritte mit Verantwortlichkeiten und Meilensteinen festlegen: Quick Wins für frühe Wirksamkeit, strategische Initiativen für den mittelfristigen Aufbau.</span>
              </div>
              <div className="scope-item">
                <span className="scope-label">Steuerung</span>
                <span className="scope-desc">KPIs, Reporting-Strukturen und Review-Zyklen einrichten, damit Fortschritt sichtbar bleibt und Anpassungen rechtzeitig möglich sind.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="wrap">
            <div className="service-section-head">
              <span className="eyebrow">Referenzen</span>
              <h2>Ausgewählte Projekte</h2>
            </div>
            <div className="ref-list">
              <div className="ref-item">
                <div>
                  <div className="ref-name">concardis</div>
                  <div className="ref-branch">Finanzdienstleistungen · Eschborn</div>
                </div>
                <div className="ref-desc">Aufbau und Leitung des Bereichs Customer Base &amp; Churn Management: Strategie, Analyse, Kampagnenmanagement, Cross-/Upselling, Prävention und Retention im Small-Business-Segment. Teamaufbau und Recruiting inklusive.</div>
              </div>
              <div className="ref-item">
                <div>
                  <div className="ref-name">LaVita</div>
                  <div className="ref-branch">Direktvertrieb</div>
                </div>
                <div className="ref-desc">Moderation eines mehrtägigen CRM-Strategie-Workshops zur gemeinsamen Definition von Zielen, Inhalten, Prozessen und Systemanforderungen.</div>
              </div>
              <div className="ref-item">
                <div>
                  <div className="ref-name">Sky Deutschland</div>
                  <div className="ref-branch">Medien · Unterföhring</div>
                </div>
                <div className="ref-desc">Konzept und Capability-Plan für den Aufbau eines kanalübergreifenden Kampagnenmanagementsystems (UNICA/IBM): Kontaktstrategie, Leadgenerierungsprozesse und Zielsystem für den Sales.</div>
              </div>
            </div>
          </div>
        </section>

        <div className="service-cta">
          <div className="wrap">
            <span className="eyebrow">Nächster Schritt</span>
            <h2>Sprechen wir über Ihr Vorhaben.</h2>
            <p>Ob CRM-Strategie von Grund auf oder Weiterentwicklung einer bestehenden Struktur: ein erstes Gespräch schafft Klarheit über Ausgangslage und sinnvollen nächsten Schritt.</p>
            <a className="btn btn-primary" href="mailto:info@custain.de">
              Gespräch vereinbaren <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </main>
      <SiteFooter subpage />
    </>
  );
}
