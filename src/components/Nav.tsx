"use client";

import { useEffect, useState } from "react";
import { content } from "@/data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-scrolled" : ""
        }`}
      >
        <nav
          className="max-w-site mx-auto px-6 md:px-10 h-14 flex items-center justify-between"
          aria-label="Primary navigation"
        >
          {/* Logo / name */}
          <a
            href="#top"
            className="font-display italic text-ink text-lg leading-none tracking-tight hover:text-accent transition-colors duration-200"
            aria-label="Shaurya — back to top"
          >
            {content.meta.name}
          </a>

          {/* Desktop nav */}
          <ul
            className="hidden md:flex items-center gap-7 list-none"
            role="list"
          >
            {content.nav.sections.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-2xs tracking-widest uppercase text-ink-3 hover:text-ink transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={content.nav.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-2xs tracking-widest uppercase border border-border-strong text-ink-2 hover:border-accent hover:text-accent transition-all duration-200 px-3 py-1.5"
                aria-label={`${content.nav.cta.label} — opens in new tab`}
              >
                {content.nav.cta.label} ↗
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-5 bg-ink-2 transition-all duration-200 origin-center ${
                menuOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink-2 transition-all duration-200 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink-2 transition-all duration-200 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col justify-center px-8 md:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <ul className="flex flex-col gap-6 list-none" role="list">
          {content.nav.sections.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="font-display italic text-4xl text-ink hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href={content.nav.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="font-mono text-xs tracking-widest uppercase text-accent"
            >
              {content.nav.cta.label} ↗
            </a>
          </li>
        </ul>
        <div className="mt-12 rule" />
        <p className="font-mono text-2xs text-ink-4 tracking-wider mt-4 uppercase">
          {content.meta.email}
        </p>
      </div>
    </>
  );
}
