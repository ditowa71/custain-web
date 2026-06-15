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

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

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
        <a className="brand" href="#top" aria-label="custain Startseite">
          <RingMark className="ring-mark" />
          <span className="wordmark">cust<span className="ai">ai</span>n</span>
        </a>
        <nav className={`nav-links${open ? " open" : ""}`} id="nav-links" aria-label="Hauptnavigation">
          <a href="#leistungen" onClick={closeMenu}>Leistungen</a>
          <a href="#referenzen" onClick={closeMenu}>Referenzen</a>
          <a href="#ueber" onClick={closeMenu}>Über uns</a>
          <a href="#kontakt" onClick={closeMenu}>Kontakt</a>
        </nav>
        <div className="nav-right">
          <a className="nav-cta" href="#kontakt">Gespräch vereinbaren</a>
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

export function WordmarkBrand() {
  return (
    <a className="brand" href="#top">
      <RingMark className="ring-mark" />
      <span className="wordmark">cust<span className="ai">ai</span>n</span>
    </a>
  );
}
