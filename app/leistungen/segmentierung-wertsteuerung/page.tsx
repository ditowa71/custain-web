import type { Metadata } from "next";
import { SiteNav, SiteFooter } from "@/app/components/site-nav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datengetriebene Segmentierung & Wertsteuerung – custain",
  description: "Kundensegmentierung, Customer Lifetime Value, Affinitätsscoring und Datenstandardisierung. Beratung aus Köln.",
};

export default function SegmentierungWertsteuerung() {
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
              <span>Segmentierung &amp; Wertsteuerung</span>
            </nav>
            <span className="eyebrow">Leistung 04</span>
            <h1>Nicht alle Kunden sind gleich. Die Maßnahmen sollten es auch nicht sein.</h1>
            <p className="intro">
              Welche Kunden bringen den größten Wert, welche das höchste Abwanderungsrisiko, welche das beste Entwicklungspotenzial? Die Antworten liegen in Ihren Daten, häufig aber nicht in aufbereiteter Form. custain hilft dabei, aus Bestands- und Transaktionsdaten belastbare Segmente und Steuerungslogiken zu entwickeln: für Kampagnen, Vertrieb und strategische Entscheidungen gleichermaßen.
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
                <span className="scope-label">Kundensegmentierung</span>
                <span className="scope-desc">Wert-, Risiko- und Potenzialcluster entwickeln. Als Grundlage für differenzierte Ansprache, priorisierte Maßnahmenplanung und gezielte Ressourcenallokation.</span>
              </div>
              <div className="scope-item">
                <span className="scope-label">Customer Lifetime Value</span>
                <span className="scope-desc">Modelle zur Kundenwertermittlung und -prognose aufbauen. Für bessere Steuerungsentscheidungen: welche Kunden verdienen welchen Aufwand?</span>
              </div>
              <div className="scope-item">
                <span className="scope-label">Affinitätsscoring</span>
                <span className="scope-desc">Kaufwahrscheinlichkeiten für Up- und Cross-Selling ermitteln und in Kampagnen einbinden. Höhere Trefferquote, geringerer Streuverlust.</span>
              </div>
              <div className="scope-item">
                <span className="scope-label">Datenstandardisierung</span>
                <span className="scope-desc">Datenqualität systematisch bewerten und verbessern: systemübergreifende Standardisierung, Datenanreicherung und Bereinigungskonzepte als Voraussetzung für belastbare Auswertungen.</span>
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
                  <div className="ref-name">Aschendorff Medien</div>
                  <div className="ref-branch">Medien · Münster</div>
                </div>
                <div className="ref-desc">Grobsegmentierung des Kundenbestands, Korrelationsanalyse im Kündigungsverhalten, Identifizierung kündigungsgefährdeter Kundengruppen. Analytische Grundlage für kundenbindende Maßnahmen im Bereich Telesales &amp; Retention.</div>
              </div>
              <div className="ref-item">
                <div>
                  <div className="ref-name">Unitymedia</div>
                  <div className="ref-branch">Telekommunikation · Köln</div>
                </div>
                <div className="ref-desc">Konzept- und Anforderungserstellung für Kundenanalysen mit Schwerpunkt auf Kündigungen und Kundenkontakten. Kundenbindungskonzepte nach Kundenlebenszyklus, Kundensegmentierung und Risikoanalyse-Implementierung.</div>
              </div>
              <div className="ref-item">
                <div>
                  <div className="ref-name">Stadtwerke Norden</div>
                  <div className="ref-branch">Energie</div>
                </div>
                <div className="ref-desc">CRM-Maturity-Check: Bestandsaufnahme der Rahmenbedingungen, Kundensegmentierung und Entwicklung zielgruppenorientierter Kundenbindungskonzepte nach Kundenlebenszyklus.</div>
              </div>
            </div>
          </div>
        </section>

        <div className="service-cta">
          <div className="wrap">
            <span className="eyebrow">Nächster Schritt</span>
            <h2>Sprechen wir über Ihr Vorhaben.</h2>
            <p>Ob Segmentierungsmodell, CLV-Aufbau oder Datenqualitäts-Assessment: ein erstes Gespräch zeigt, welcher Ansatz für Ihre Datenlage und Ihre Ziele sinnvoll ist.</p>
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
