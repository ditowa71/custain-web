import Link from "next/link";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--navy)] mb-8 inline-block">
          ← Zurück
        </Link>
        <h1 className="text-3xl font-bold text-[var(--navy)] mb-8">Impressum</h1>
        <div className="prose text-slate-600 space-y-4 text-sm leading-relaxed">
          <p>
            <strong className="text-[var(--navy)]">Angaben gemäss § 5 TMG</strong><br />
            Dirk Walter<br />
            custain<br />
            Köln
          </p>
          <p>
            <strong className="text-[var(--navy)]">Kontakt</strong><br />
            E-Mail: dirk.walter@custain.de
          </p>
          <p className="text-[var(--muted)] italic">Vollständige Adresse wird vor Launch ergänzt.</p>
        </div>
      </div>
    </div>
  );
}
