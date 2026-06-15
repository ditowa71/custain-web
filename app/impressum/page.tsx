import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, SiteFooter } from "@/app/components/site-nav";

export const metadata: Metadata = {
  title: "Impressum – custain",
};

export default function Impressum() {
  return (
    <>
      <SiteNav subpage />
      <main>
        <div className="legal-page">
          <Link href="/" className="legal-back">← Zurück</Link>
          <h1>Impressum</h1>
          <p className="legal-date">Angaben gemäß § 5 TMG</p>

          <div className="legal-section">
            <h2>Verantwortlich</h2>
            <p>
              Dirk Walter<br />
              custain, Customer Management Beratung<br />
              Brüsseler Str. 92<br />
              50672 Köln
            </p>
          </div>

          <div className="legal-section">
            <h2>Kontakt</h2>
            <p>
              Mobil: <a href="tel:+4915116991601">+49 151 16991601</a><br />
              E-Mail: <a href="mailto:info@custain.de">info@custain.de</a>
            </p>
          </div>

          <div className="legal-section">
            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 296 218 548
            </p>
          </div>

          <div className="legal-section">
            <h2>Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV</h2>
            <p>Dirk Walter, Anschrift wie oben</p>
          </div>

          <div className="legal-section">
            <h2>Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann keine Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
            <p>
              Für externe Links übernehme ich keine Haftung. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Auf die aktuelle und zukünftige Gestaltung der verlinkten Seiten habe ich keinen Einfluss.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter subpage />
    </>
  );
}
