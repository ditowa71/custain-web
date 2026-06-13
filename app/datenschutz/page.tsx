import Link from "next/link";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--navy)] mb-8 inline-block">
          ← Zurück
        </Link>
        <h1 className="text-3xl font-bold text-[var(--navy)] mb-2">Datenschutzerklärung</h1>
        <p className="text-[var(--muted)] text-sm mb-10">Stand: Juni 2026</p>

        <div className="text-slate-600 space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="font-semibold text-[var(--navy)] mb-2">1. Verantwortlicher</h2>
            <p>
              Dirk Walter<br />
              custain, Customer Management Beratung<br />
              Brüsseler Str. 92<br />
              50672 Köln<br />
              E-Mail: info@custain.de
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--navy)] mb-2">2. Erhobene Daten und Zweck</h2>
            <p className="mb-3">
              Diese Website erhebt keine personenbezogenen Daten über Formulare oder Nutzerkonten. Es werden keine Tracking-Tools, Analyse-Dienste oder Cookies eingesetzt.
            </p>
            <p>
              Beim Aufruf der Website werden durch den Hosting-Anbieter technisch notwendige Server-Logs erfasst. Diese enthalten IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene URL sowie den verwendeten Browser. Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung und Sicherheit der Website). Die Logs werden nach spätestens 30 Tagen gelöscht.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--navy)] mb-2">3. Hosting</h2>
            <p>
              Diese Website wird gehostet bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Bei jedem Seitenaufruf werden Server-Logs an Vercel übermittelt. Die Datenübertragung in die USA erfolgt auf Grundlage von Standardvertragsklauseln gemäss Art. 46 Abs. 2 lit. c DSGVO. Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[var(--teal)] hover:underline">vercel.com/legal/privacy-policy</a>.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--navy)] mb-2">4. Kontaktaufnahme per E-Mail</h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (E-Mail-Adresse, Nachrichteninhalt) zur Bearbeitung Ihrer Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden nicht an Dritte weitergegeben und gelöscht, sobald der Zweck der Speicherung entfällt.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--navy)] mb-2">5. Ihre Rechte</h2>
            <p className="mb-2">Sie haben das Recht auf:</p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich an: info@custain.de
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[var(--navy)] mb-2">6. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestr. 2–4, 40213 Düsseldorf, <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-[var(--teal)] hover:underline">ldi.nrw.de</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
