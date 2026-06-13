import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Leistungen />
        <UeberDirk />
        <Referenzen />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-[var(--navy)] tracking-wide text-lg">custain</span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--muted)]">
          <a href="#leistungen" className="hover:text-[var(--navy)] transition-colors">Leistungen</a>
          <a href="#ueber-uns" className="hover:text-[var(--navy)] transition-colors">Über uns</a>
          <a href="#referenzen" className="hover:text-[var(--navy)] transition-colors">Referenzen</a>
          <a href="#kontakt" className="bg-[var(--teal)] text-white px-4 py-2 rounded hover:opacity-90 transition-opacity">Kontakt</a>
        </nav>
        <a href="#kontakt" className="md:hidden text-sm bg-[var(--teal)] text-white px-4 py-2 rounded">Kontakt</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-[var(--navy)] text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[var(--teal-light)] text-sm font-medium tracking-widest uppercase mb-4">
          Nachhaltig · Kunden · Binden
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-2xl">
          Kundenbindung und KI-Lösungen für moderne Unternehmen
        </h1>
        <p className="text-slate-300 text-lg max-w-xl leading-relaxed mb-10">
          custain unterstützt Unternehmen dabei, Kundenbeziehungen langfristig zu gestalten und mit KI-basierten Produkten neue Potenziale zu erschliessen.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#leistungen" className="bg-[var(--teal)] text-white px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity">
            Leistungen ansehen
          </a>
          <a href="#kontakt" className="border border-white/30 text-white px-6 py-3 rounded font-medium hover:bg-white/10 transition-colors">
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}

const leistungen = [
  {
    title: "KI-Lösungen entwickeln",
    highlight: true,
    text: "Entwicklung KI-gestützter Produkte und Tools: von der Konzeption bis zur Marktreife. Beispiel: Ambit, ein KI-Karrierecoach, der Fach- und Führungskräfte bei Bewerbung, CV-Analyse und Interview-Vorbereitung unterstützt.",
    link: { href: "https://ambit.career", label: "Ambit entdecken" },
  },
  {
    title: "Kundenmanagement-Strategie",
    text: "Entwicklung und Umsetzung von CRM- und Customer-Lifecycle-Strategien. Vom Onboarding bis zur Rückgewinnung: strukturierte Ansätze, die Kundenpotenziale konsequent ausschöpfen.",
  },
  {
    title: "Analyse und Segmentierung",
    text: "Kundendaten sinnvoll nutzen: Segmentierungsmodelle, Churn-Prävention, Kundenwertanalyse. Grundlage für zielgerichtete Massnahmen statt Giesskannenprinzip.",
  },
  {
    title: "Kontaktstrategie und CX",
    text: "Entwicklung von Kontaktstrategien entlang der Customer Journey. Richtiger Kanal, richtiger Zeitpunkt, richtige Botschaft, für bessere Kundenerlebnisse und höhere Effizienz.",
  },
];

function Leistungen() {
  return (
    <section id="leistungen" className="py-24 px-6 bg-[var(--sand)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--navy)] mb-2">Leistungen</h2>
        <p className="text-[var(--muted)] mb-12 text-lg">Strategie, Beratung und KI, aus einer Hand.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {leistungen.map((l) => (
            <div
              key={l.title}
              className={`rounded-xl p-7 flex flex-col gap-3 ${
                l.highlight
                  ? "bg-[var(--navy)] text-white"
                  : "bg-white border border-slate-100"
              }`}
            >
              <h3 className={`font-semibold text-lg ${l.highlight ? "text-white" : "text-[var(--navy)]"}`}>
                {l.title}
              </h3>
              <p className={`text-sm leading-relaxed ${l.highlight ? "text-slate-300" : "text-[var(--muted)]"}`}>
                {l.text}
              </p>
              {l.link && (
                <a
                  href={l.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm text-[var(--teal-light)] font-medium hover:underline"
                >
                  {l.link.label} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UeberDirk() {
  return (
    <section id="ueber-uns" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[var(--navy)] mb-2">Dirk Walter</h2>
            <p className="text-[var(--muted)] text-sm uppercase tracking-widest mb-6 font-medium">Gründer und Inhaber</p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Über 25 Jahre Erfahrung in leitenden Positionen im Kundenmanagement, bei Telekommunikationsanbietern, Internet Service Providern und Anbietern digitaler Dienste.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Zuletzt verantwortete Dirk Walter als Mitglied der Geschäftsleitung den Bestandskundenbereich beim zweitgrößten deutschen Anbieter für regionale Werbung und Telefonauskunft.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Seit der Gründung von custain unterstützt er Unternehmen dabei, Kundenpotenziale systematisch zu erschliessen, und entwickelt mit Ambit eine eigene KI-Lösung für den Karrieremarkt.
            </p>
            <a
              href="https://www.linkedin.com/in/dirk-walter-custain/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--teal)] font-medium hover:underline"
            >
              LinkedIn-Profil ansehen →
            </a>
          </div>
          <div className="space-y-4">
            <div className="bg-[var(--sand)] rounded-xl p-6">
              <p className="text-sm font-semibold text-[var(--navy)] mb-3">Schwerpunkte</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Customer Relationship Management (CRM)</li>
                <li>Customer Lifecycle Management</li>
                <li>Kunden- und Kampagnenmanagement</li>
                <li>Kundenbindung und -rückgewinnung</li>
                <li>KI-Produktentwicklung</li>
              </ul>
            </div>
            <div className="bg-[var(--sand)] rounded-xl p-6">
              <p className="text-sm font-semibold text-[var(--navy)] mb-3">Branchen</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Telekommunikation</li>
                <li>Medien und Publishing</li>
                <li>Payment und Finance</li>
                <li>Energieversorgung</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const referenzen = ["Unitymedia", "1&1", "Sky Deutschland", "concardis", "Westfalen AG", "Stadtwerke Norden"];

function Referenzen() {
  return (
    <section id="referenzen" className="py-24 px-6 bg-[var(--sand)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--navy)] mb-2">Erfahrungen und Referenzen</h2>
        <p className="text-[var(--muted)] text-lg mb-12">
          Projekte in Telekommunikation, Medien, Payment und Energie, seit 2013.
        </p>
        <div className="flex flex-wrap gap-3 mb-12">
          {referenzen.map((r) => (
            <span
              key={r}
              className="bg-white border border-slate-200 text-[var(--navy)] text-sm font-medium px-5 py-2.5 rounded-full"
            >
              {r}
            </span>
          ))}
        </div>
        <blockquote className="border-l-4 border-[var(--teal)] pl-6 text-slate-500 italic max-w-xl">
          "Niemand weiss mehr über Ihre Kunden als Sie. Nutzen Sie diesen Wettbewerbsvorteil."
        </blockquote>
      </div>
    </section>
  );
}

function Kontakt() {
  return (
    <section id="kontakt" className="py-24 px-6 bg-[var(--navy)] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
        <p className="text-slate-300 text-lg mb-10 max-w-lg">
          Interesse an einer Zusammenarbeit oder einem unverbindlichen Gespräch? Melden Sie sich direkt.
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="mailto:dirk.walter@custain.de"
            className="text-[var(--teal-light)] font-medium text-lg hover:underline"
          >
            dirk.walter@custain.de
          </a>
          <a
            href="https://www.linkedin.com/in/dirk-walter-custain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            LinkedIn: linkedin.com/in/dirk-walter-custain →
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--navy)] border-t border-white/10 py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <span>© {new Date().getFullYear()} custain, Dirk Walter, Köln</span>
        <div className="flex gap-6">
          <Link href="/impressum" className="hover:text-slate-300 transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-slate-300 transition-colors">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
