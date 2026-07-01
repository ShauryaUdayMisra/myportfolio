"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { content } from "@/data/content";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;
    const els = container.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isPlaceholder = (href: string) =>
    href.startsWith("TODO_") || href === "/resume.pdf";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-section px-6 md:px-10 max-w-site mx-auto"
      aria-label="Contact"
    >
      <div className="rule mb-section-sm" aria-hidden="true" />
      <SectionHeader index="05" label="Contact" />

      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        {/* Email */}
        <div className="reveal">
          <p className="case-label mb-4">EMAIL</p>
          <a
            href={`mailto:${content.contact.email}`}
            className="font-display italic text-headline md:text-display text-ink hover:text-accent transition-colors duration-300 block"
            aria-label={`Email ${content.contact.email}`}
          >
            {content.contact.email}
          </a>
          <p className="text-ink-3 text-small mt-4 leading-relaxed">
            Open to conversations — university projects, collaborations, and anything interesting.
          </p>
        </div>

        {/* Links */}
        <div className="reveal reveal-delay-2">
          <p className="case-label mb-4">LINKS</p>
          <ul className="flex flex-col gap-3 list-none" role="list">
            {content.contact.links.map((link) => {
              const placeholder = isPlaceholder(link.href);
              return (
                <li key={link.label}>
                  {placeholder ? (
                    <span
                      className="flex items-center justify-between py-2.5 border-b border-border opacity-30 cursor-not-allowed"
                      aria-label={`${link.label} — TODO: add URL`}
                    >
                      <span className="font-mono text-xs text-ink-3 tracking-wider uppercase">
                        {link.label}
                      </span>
                      <span className="font-mono text-2xs text-ink-4 tracking-wider">
                        TODO
                      </span>
                    </span>
                  ) : (
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      download={link.download || undefined}
                      className="flex items-center justify-between py-2.5 border-b border-border hover:border-accent group transition-all duration-200"
                      aria-label={`${link.label}${link.external ? " — opens in new tab" : ""}${link.download ? " — download" : ""}`}
                    >
                      <span className="font-mono text-xs text-ink-2 tracking-wider uppercase group-hover:text-accent transition-colors duration-200">
                        {link.label}
                      </span>
                      <span className="font-mono text-2xs text-ink-4 group-hover:text-accent transition-colors duration-200">
                        {link.download ? "↓" : "↗"}
                      </span>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
