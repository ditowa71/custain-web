import type { Metadata } from "next";
import { SiteNav, SiteFooter } from "@/app/components/site-nav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Lifecycle Management – custain",
  description: "Customer Lifecycle Management: Kontaktstrategie, phasengerechte Maßnahmen und Implementierung. Beratung aus Köln.",
};

export default function CustomerLifecycleManagement() {
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
              <span>Customer Lifecycle Management</span>
            </nav>
            <span className="eyebrow">Leistung 02</span>
            <h1>Jede Phase der Kundenbeziehung aktiv gestalten.</h1>
            <p className="intro">
              Kunden verändern ihre Bedürfnisse, ihre Nutzungsintensität und ihren Wert, je nachdem wo sie in ihrer Beziehung zu Ihrem Unternehmen stehen. Customer Lifecycle Management bedeutet: diese Phasen kennen, Signale rechtzeitig erkennen und mit den richtigen Maßnahmen zur richtigen Zeit antworten.
            </p>
          </div>
        </section>

        <section className="service-section">
          <div className="wrap">
            <div className="service-section-head">
              <span className="eyebrow">Leistungsumfang</span>
              <h2>Was wir anbieten</h2>
            </div>
            <div className="scope-list">
              <div className="scope-item">
                <span className="scope-label">Lifecycle-Analyse</span>
                <span className="scope-desc">Aufnahme und Bewertung aller relevanten Kundenphasen: von der Aktivierung über die Entwicklung bis zur Verlängerung. Welche Signale zeigen Aktivität, Abwanderungsrisiko oder Wachstumspotenzial?</span>
              </div>
              <div className="scope-item">
                <span className="scope-label">Kontaktstrategie</span>
                <span className="scope-desc">Festlegen, wann welcher Kanal mit welchem Angebot angesprochen wird: für jeden Lebenszyklusabschnitt, abgestimmt auf Kundenwert und -verhalten.</span>
              </div>
              <div className="scope-item">
                <span className="scope-label">Maßnahmenkonzeption</span>
                <span className="scope-desc">Onboarding, Entwicklung, Verlängerung und Reaktivierung konzipieren und in operative Prozesse überführen. Mit klaren Verantwortlichkeiten und messbaren Zielen.</span>
              </div>
              <div className="scope-item">
                <span className="scope-label">Implementierung</span>
                <span className="scope-desc">Vom Konzept in die Umsetzung: Anforderungsmanagement, Dienstleisterkoordination, Qualitätssicherung und Begleitung des laufenden Betriebs.</span>
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
                <div className="ref-desc">Mehrjähriges Interimsmanagement CRM: Kundenbindungsstrategien über den gesamten Customer Lifecycle, Konzeption und Umsetzung von Kundenrückgewinnung, präventiver Kundenbindung, Kampagnenmanagement und Prozessoptimierung. Schwerpunkt Retention &amp; Loyalty mit Aufbau von Reporting-Dashboard und Forecasting-Systemen für die Churn-Steuerung.</div>
              </div>
              <div className="ref-item">
                <div>
                  <div className="ref-name">1&amp;1</div>
                  <div className="ref-branch">Telekommunikation · Karlsruhe</div>
                </div>
                <div className="ref-desc">Aufbau Bestandskundenmanagement für DSL und Mobile: Retention-Prozessoptimierung, Next-Best-Offer-Konzept, Weiterentwicklung Online-Shop für Bestandskunden, Optimierung des Online-Kündigungsprozesses und strukturierte IT-Anforderungsprozesse für den Bereich.</div>
              </div>
              <div className="ref-item">
                <div>
                  <div className="ref-name">Rheinenergie AG</div>
                  <div className="ref-branch">Energie · Köln</div>
                </div>
                <div className="ref-desc">Projektleitung Kundenbindung: Customer Journey für Tarifwechsel und Umzug analysiert und neu gestaltet, Kundenbindungskonzept für kritische Kontaktpunkte entwickelt.</div>
              </div>
            </div>
          </div>
        </section>

        <div className="service-cta">
          <div className="wrap">
            <span className="eyebrow">Nächster Schritt</span>
            <h2>Sprechen wir über Ihr Vorhaben.</h2>
            <p>Ob Sie einen Lifecycle-Ansatz neu aufbauen oder eine bestehende Struktur weiterentwickeln wollen: ein erstes Gespräch zeigt, wo der größte Hebel liegt.</p>
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
