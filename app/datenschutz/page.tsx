import Link from "next/link";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--navy)] mb-8 inline-block">
          ← Zurück
        </Link>
        <h1 className="text-3xl font-bold text-[var(--navy)] mb-8">Datenschutzerklärung</h1>
        <div className="text-slate-600 space-y-6 text-sm leading-relaxed">
          <p>
            <strong className="text-[var(--navy)]">Verantwortlicher</strong><br />
            Dirk Walter, custain, Köln<br />
            E-Mail: dirk.walter@custain.de
          </p>
          <p>
            Diese Website erhebt keine personenbezogenen Daten und verwendet keine Cookies oder Tracking-Tools.
          </p>
          <p className="text-[var(--muted)] italic">Vollständige Datenschutzerklärung wird vor Launch ergänzt.</p>
        </div>
      </div>
    </div>
  );
}
