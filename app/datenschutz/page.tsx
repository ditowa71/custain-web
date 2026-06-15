import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, SiteFooter } from "@/app/components/site-nav";

export const metadata: Metadata = {
  title: "Datenschutz – custain",
};

export default function Datenschutz() {
  return (
    <>
      <SiteNav subpage />
      <main>
        <div className="legal-page">
          <Link href="/" className="legal-back">← Zurück</Link>
          <h1>Datenschutzerklärung</h1>
          <p className="legal-date">Stand: Juni 2026</p>

          <div className="legal-section">
            <h2>1. Verantwortlicher</h2>
            <p>
              Dirk Walter<br />
              custain, Customer Management Beratung<br />
              Brüsseler Str. 92<br />
              50672 Köln<br />
              E-Mail: <a href="mailto:info@custain.de">info@custain.de</a>
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Erhobene Daten und Zweck</h2>
            <p>
              Diese Website erhebt keine personenbezogenen Daten über Formulare oder Nutzerkonten. Es werden keine Tracking-Tools, Analyse-Dienste oder Cookies eingesetzt.
            </p>
            <p>
              Beim Aufruf der Website werden durch den Hosting-Anbieter technisch notwendige Server-Logs erfasst. Diese enthalten IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene URL sowie den verwendeten Browser. Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung und Sicherheit der Website). Die Logs werden nach spätestens 30 Tagen gelöscht.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Hosting</h2>
            <p>
              Diese Website wird gehostet bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Bei jedem Seitenaufruf werden Server-Logs an Vercel übermittelt. Die Datenübertragung in die USA erfolgt auf Grundlage von Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO. Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a>.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Kontaktaufnahme per E-Mail</h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (E-Mail-Adresse, Nachrichteninhalt) zur Bearbeitung Ihrer Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden nicht an Dritte weitergegeben und gelöscht, sobald der Zweck der Speicherung entfällt.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Ihre Rechte</h2>
            <p>Sie haben das Recht auf:</p>
            <ul>
              <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
            <p>Zur Ausübung Ihrer Rechte wenden Sie sich an: <a href="mailto:info@custain.de">info@custain.de</a></p>
          </div>

          <div className="legal-section">
            <h2>6. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestr. 2–4, 40213 Düsseldorf, <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">ldi.nrw.de</a>.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter subpage />
    </>
  );
}
