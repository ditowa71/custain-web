import type { Metadata } from "next";
import { SiteNav, SiteFooter } from "@/app/components/site-nav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kundenbindung & Retention – custain",
  description: "Churn-Analyse, Retention-Konzepte, Beschwerdemanagement und Kundenrückgewinnung. Beratung aus Köln.",
};

export default function KundenbindungRetention() {
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
              <span>Kundenbindung &amp; Retention</span>
            </nav>
            <span className="eyebrow">Leistung 03</span>
            <h1>Kunden halten, bevor sie kündigen.</h1>
            <p className="intro">
              Wer erst dann reagiert, wenn der Kündigungswunsch eingeht, hat oft schon verloren. Nachhaltige Retention beginnt früher: mit dem Erkennen von Risikosignalen, dem gezielten Aktivieren von Bindungsmaßnahmen und einem Beschwerdemanagement, das Vertrauen zurückgewinnt statt nur Prozesse abzuarbeiten.
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
                <span className="scope-label">Churn-Analyse</span>
                <span className="scope-desc">Kündigungsrisiken identifizieren, gefährdete Segmente priorisieren. Auf Basis von Verhaltensdaten, Kundenprofilen und Korrelationsanalysen im Kündigungsverhalten.</span>
              </div>
              <div className="scope-item">
                <span className="scope-label">Retention-Konzepte</span>
                <span className="scope-desc">Präventive Maßnahmen, passende Angebote und geeignete Kanäle entwickeln. Mit Blick auf Kundenwert, Reaktionswahrscheinlichkeit und operativen Aufwand.</span>
              </div>
              <div className="scope-item">
                <span className="scope-label">Beschwerdemanagement</span>
                <span className="scope-desc">Kundenwertorientiertes Handling, das Vertrauen zurückgewinnt. Eskalationspfade, Entscheidungslogiken und Prozessoptimierung für reaktive und präventive Situationen.</span>
              </div>
              <div className="scope-item">
                <span className="scope-label">Kundenrückgewinnung</span>
                <span className="scope-desc">Strategie und operative Umsetzung für abgewanderte Kunden: Zielgruppen, Kanäle, Angebote, Timing und Erfolgsmessung.</span>
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
                  <div className="ref-name">Unitymedia</div>
                  <div className="ref-branch">Telekommunikation · Köln</div>
                </div>
                <div className="ref-desc">Projektleitung Retention &amp; Loyalty: Aufbau eines Reporting-Dashboards zur Steuerung von Kündigungseingängen und Churn, Entwicklung von Forecasting-Systemen, Zielvorgaben und Budgetprozess. Zuvor Neuausrichtung des Bereichs Telesales &amp; Retention mit Fokus auf Digitalisierung, Vertriebsfokussierung und Effizienzsteigerung.</div>
              </div>
              <div className="ref-item">
                <div>
                  <div className="ref-name">Rheinenergie AG</div>
                  <div className="ref-branch">Energie · Köln</div>
                </div>
                <div className="ref-desc">Projektleitung Kundenbindung mit Schwerpunkt auf den kritischen Customer Journeys Tarifwechsel und Umzug. Entwicklung eines strukturierten Kundenbindungskonzepts für diese Kontaktpunkte.</div>
              </div>
              <div className="ref-item">
                <div>
                  <div className="ref-name">concardis</div>
                  <div className="ref-branch">Finanzdienstleistungen · Eschborn</div>
                </div>
                <div className="ref-desc">Planung und Umsetzung von Churn-Initiativen sowie Aufbau einer Kampagnen-Roadmap zur Zielerreichung im Small-Business-Segment. Prevention- und Retention-Steuerung als Teil des Bereichsaufbaus.</div>
              </div>
            </div>
          </div>
        </section>

        <div className="service-cta">
          <div className="wrap">
            <span className="eyebrow">Nächster Schritt</span>
            <h2>Sprechen wir über Ihr Vorhaben.</h2>
            <p>Ob Sie Ihre Churn-Rate senken, ein Retention-Programm aufbauen oder die Rückgewinnung professionalisieren wollen: ein erstes Gespräch zeigt, wo man sinnvoll ansetzt.</p>
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
