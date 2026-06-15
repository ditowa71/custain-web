import { SiteNav, SiteFooter } from "./components/site-nav";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <Hero />
        <Services />
        <References />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="eyebrow">Customer Management · KI-Produkte</span>
            <h1>
              Kundenbeziehungen,<br />
              die tragen. KI, die<br />
              <span className="accent">mitdenkt</span>.
            </h1>
            <p className="lede">
              custain verbindet strategische Kundenmanagement-Beratung mit eigener KI-Produktentwicklung — für Unternehmen, die ihre Kundenbeziehungen messbar und nachhaltig verbessern wollen.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#kontakt">
                Gespräch vereinbaren <span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="#leistungen">
                Leistungen ansehen
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <svg className="hero-ring" viewBox="0 0 400 400" aria-hidden="true">
              <g fill="none" strokeWidth="20" transform="rotate(-90 200 200)">
                <circle cx="200" cy="200" r="150" stroke="var(--navy)"     strokeDasharray="216 727" strokeDashoffset="0" />
                <circle cx="200" cy="200" r="150" stroke="var(--navy-600)" strokeDasharray="216 727" strokeDashoffset="-236" />
                <circle cx="200" cy="200" r="150" stroke="#9CADC4"          strokeDasharray="216 727" strokeDashoffset="-471" />
                <circle cx="200" cy="200" r="150" stroke="var(--teal)"     strokeDasharray="216 727" strokeDashoffset="-707" />
              </g>
              <circle cx="200" cy="200" r="86" fill="none" stroke="var(--line)" strokeWidth="1.5" />
              <text x="200" y="194" textAnchor="middle" fontFamily="var(--font-mono), ui-monospace, monospace" fontSize="12" letterSpacing="2" fill="#828B98">LIFECYCLE</text>
              <text x="200" y="216" textAnchor="middle" fontFamily="var(--font-serif), Georgia, serif" fontSize="19" fill="#15263F">Kundenwert</text>
            </svg>
          </div>
        </div>
        <div className="trust">
          <span className="label">Erfahrung aus</span>
          <div className="industries">
            <span>Telekommunikation</span>
            <span>Medien</span>
            <span>Finanzen</span>
            <span>Energie</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="leistungen">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Leistungen</span>
          <h2>Zwei Disziplinen, ein Anspruch.</h2>
          <p>Strategische Beratung und gebaute Produkte greifen ineinander — von der Kundenanalyse bis zum eigenständigen KI-Werkzeug.</p>
        </div>
        <div className="cards">
          <article className="card">
            <span className="num">01 — Beratung</span>
            <h3>Kundenmanagement-Beratung</h3>
            <p className="desc">CRM-Strategie, Customer Lifecycle Management und Retention — fundiert analysiert, klar priorisiert, konsequent umgesetzt.</p>
            <ul>
              <li className="link-item"><a href="/leistungen/crm-strategie">CRM-Strategie &amp; Roadmap <span className="lnk-arrow">→</span></a></li>
              <li className="link-item"><a href="/leistungen/customer-lifecycle-management">Customer Lifecycle Management <span className="lnk-arrow">→</span></a></li>
              <li className="link-item"><a href="/leistungen/kundenbindung-retention">Kundenbindung &amp; Retention <span className="lnk-arrow">→</span></a></li>
              <li className="link-item"><a href="/leistungen/segmentierung-wertsteuerung">Datengetriebene Segmentierung &amp; Wertsteuerung <span className="lnk-arrow">→</span></a></li>
            </ul>
            <div className="spacer" />
            <div className="ambit">
              <div className="meta">Von der <strong>Analyse</strong> bis zur <strong>Umsetzung</strong> — an der Seite Ihres Teams.</div>
            </div>
          </article>
          <article className="card">
            <span className="num">02 — Produkt</span>
            <h3>KI-Produktentwicklung</h3>
            <p className="desc">Von der Idee zum eigenständigen KI-Produkt. Pragmatisch entwickelt, am Markt erprobt, mit klarem Nutzen.</p>
            <ul>
              <li>KI-Produktstrategie &amp; Konzeption</li>
              <li>Prototyping &amp; Entwicklung</li>
              <li>Markteinführung &amp; Skalierung</li>
            </ul>
            <div className="spacer" />
            <div className="ambit">
              <div className="meta">Aktuelles Produkt: <strong>Ambit</strong> — KI-Karrierecoach</div>
              <a className="link" href="https://ambit.career" target="_blank" rel="noopener noreferrer">
                ambit.career <span className="arrow">→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

const LOGOS = [
  { src: "/logos/unitymedia.png?v=4",         alt: "Unitymedia" },
  { src: "/logos/rheinenergie.png?v=4",        alt: "RheinEnergie" },
  { src: "/logos/1und1.svg?v=4",               alt: "1&1" },
  { src: "/logos/sky.png?v=4",                 alt: "Sky Deutschland" },
  { src: "/logos/concardis.png?v=4",           alt: "concardis",        large: true },
  { src: "/logos/aschendorff-medien.png?v=4",  alt: "Aschendorff Medien" },
  { src: "/logos/westfalen-ag.png?v=4",        alt: "Westfalen AG" },
  { src: "/logos/stadtwerke-norden.png?v=4",   alt: "Stadtwerke Norden" },
];

function References() {
  return (
    <section className="refs" id="referenzen">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Referenzen</span>
          <h2>Vertrauen aus vier Branchen.</h2>
          <p className="sub">Eine Auswahl von Unternehmen, mit denen custain im Kundenmanagement gearbeitet hat.</p>
        </div>
        <div className="logo-strip">
          {LOGOS.map((l) => (
            <div key={l.alt} className="logo-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.src} alt={l.alt} className={`logo-img${l.large ? " logo-img--large" : ""}`} />
            </div>
          ))}
        </div>
        <div className="refs-note">// Telekommunikation · Medien · Finanzen · Energie</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="ueber">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Über uns</span>
          <h2>Eine Beratung mit Haltung.</h2>
        </div>
        <div className="about-intro">
          <p>custain ist keine Agentur. Wir sind eine Beratung mit klarer Haltung: Lösungen, die zu Organisation, Daten und Kunden wirklich passen, und im Tagesgeschäft Bestand haben. Statt Standardpräsentationen entstehen konkrete Maßnahmen, die sich umsetzen lassen.</p>
          <p>Seit über zehn Jahren begleiten wir Unternehmen aus Telekommunikation, Medien, Finanzen und Energie bei der strategischen Führung ihrer Kundenbeziehungen. Aus dieser Erfahrung heraus entwickeln wir darüber hinaus eigene KI-Produkte: Ambit, der KI-Karrierecoach, ist das erste.</p>
        </div>
        <div className="about-founder-head">
          <span className="eyebrow">Gründer</span>
        </div>
        <div className="about-grid">
          <div className="portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/dirk-walter.jpg" alt="Dirk Walter, Gründer custain" className="portrait-img" />
          </div>
          <div className="about-body">
            <h2>Dirk Walter</h2>
            <div className="about-role">Gründer &amp; Inhaber · custain, Köln</div>
            <p>
              Dirk Walter berät seit der Gründung von custain im Jahr 2013 Unternehmen im Kundenmanagement und CRM. Er bringt über 25 Jahre Erfahrung in leitenden Positionen mit, unter anderem als Mitglied der Geschäftsleitung eines der größten deutschen Anbieter für regionale Werbung und Telefonauskunft, wo er den gesamten Bestandskundenbereich verantwortete.
            </p>
            <p>
              Ein konstanter Schwerpunkt seiner Arbeit: der Aufbau und die Weiterentwicklung von Kundenbindungsprogrammen, die tatsächlich funktionieren. Parallel dazu entsteht mit Ambit ein erstes eigenes KI-Produkt: ein Karrierecoach, der Bewerbern hilft, ihre Stärken klar zu formulieren und gezielt einzusetzen.
            </p>
            <div className="about-meta">
              <div className="item">
                <div className="k">Gegründet</div>
                <div className="v">2013</div>
              </div>
              <div className="item">
                <div className="k">Sitz</div>
                <div className="v">Köln</div>
              </div>
              <div className="item">
                <div className="k">Fokus</div>
                <div className="v">Customer Management &amp; KI</div>
              </div>
              <div className="item">
                <div className="k">Arbeitsweise</div>
                <div className="v">Hands-on, partnerschaftlich</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-left">
            <span className="eyebrow">Kontakt</span>
            <h2>Sprechen wir über Ihre Kundenbeziehungen.</h2>
            <p>Ob CRM-Strategie, Retention-Programm oder ein konkretes KI-Vorhaben: ein erstes Gespräch schafft Klarheit. Unverbindlich und direkt.</p>
            <a className="btn btn-primary" href="mailto:info@custain.de">
              Gespräch vereinbaren <span className="arrow">→</span>
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-row">
              <span className="k">Unternehmen</span>
              <span className="v">.custain<br />Customer Management Beratung<br />Inhaber: Dirk Walter</span>
            </div>
            <div className="contact-row">
              <span className="k">Adresse</span>
              <span className="v">Brüsseler Str. 92<br />50672 Köln</span>
            </div>
            <div className="contact-row">
              <span className="k">Mobil</span>
              <a className="v" href="tel:+4915116991601">+49 151 16991601</a>
            </div>
            <div className="contact-row">
              <span className="k">E-Mail</span>
              <a className="v" href="mailto:info@custain.de">info@custain.de</a>
            </div>
            <div className="contact-row">
              <span className="k">LinkedIn</span>
              <a className="v" href="https://www.linkedin.com/in/dirkthomaswalter/" target="_blank" rel="noopener noreferrer">
                Dirk Walter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

