"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function RingMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--navy)" strokeWidth="11"
        strokeDasharray="48 12" strokeDashoffset="-3"
        transform="rotate(-90 50 50)" opacity="0.9" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--teal)" strokeWidth="11"
        strokeDasharray="48 191" strokeDashoffset="-3"
        transform="rotate(-90 50 50)" />
    </svg>
  );
}

export function SiteNav({ subpage = false }: { subpage?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const b = subpage ? "/" : "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site${scrolled ? " scrolled" : ""}`} ref={headerRef}>
      <div className="wrap nav">
        <a className="brand" href={subpage ? "/" : "#top"} aria-label="custain Startseite">
          <RingMark className="ring-mark" />
          <span className="wordmark">cust<span className="ai">ai</span>n</span>
        </a>
        <nav className={`nav-links${open ? " open" : ""}`} id="nav-links" aria-label="Hauptnavigation">
          <a href={`${b}#leistungen`} onClick={closeMenu}>Leistungen</a>
          <a href={`${b}#referenzen`} onClick={closeMenu}>Referenzen</a>
          <a href={`${b}#ueber`} onClick={closeMenu}>Über uns</a>
          <a href={`${b}#kontakt`} onClick={closeMenu}>Kontakt</a>
        </nav>
        <div className="nav-right">
          <a className="nav-cta" href={`${b}#kontakt`}>Gespräch vereinbaren</a>
          <button
            className={`nav-toggle${open ? " open" : ""}`}
            aria-label="Menü"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}

export function WordmarkBrand({ subpage = false }: { subpage?: boolean }) {
  return (
    <a className="brand" href={subpage ? "/" : "#top"}>
      <RingMark className="ring-mark" />
      <span className="wordmark">cust<span className="ai">ai</span>n</span>
    </a>
  );
}

export function SiteFooter({ subpage = false }: { subpage?: boolean }) {
  const b = subpage ? "/" : "";
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <WordmarkBrand subpage={subpage} />
            <p className="foot-tag">Customer Management Beratung &amp; KI-Produktentwicklung. Köln.</p>
          </div>
          <div className="foot-nav">
            <div className="foot-col">
              <div className="h">Navigation</div>
              <a href={`${b}#leistungen`}>Leistungen</a>
              <a href={`${b}#referenzen`}>Referenzen</a>
              <a href={`${b}#ueber`}>Über uns</a>
              <a href={`${b}#kontakt`}>Kontakt</a>
            </div>
            <div className="foot-col">
              <div className="h">Produkt</div>
              <a href="https://ambit.career" target="_blank" rel="noopener noreferrer">Ambit ↗</a>
            </div>
            <div className="foot-col">
              <div className="h">Kontakt</div>
              <a href="mailto:info@custain.de">info@custain.de</a>
              <a href="https://www.linkedin.com/in/dirkthomaswalter/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} custain · Dirk Walter</span>
          <div className="legal">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
