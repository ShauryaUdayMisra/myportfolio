"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { content } from "@/data/content";

export default function Writing() {
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

  return (
    <section
      id="writing"
      ref={sectionRef}
      className="py-section px-6 md:px-10 max-w-site mx-auto"
      aria-label="Writing"
    >
      <div className="rule mb-section-sm" aria-hidden="true" />
      <SectionHeader index="03" label="Writing" />

      <div className="grid md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
        {content.writing.map((piece) => (
          <article
            key={piece.id}
            className="reveal bg-surface p-7 md:p-8 flex flex-col justify-between gap-6 group"
            aria-label={piece.title}
          >
            <div>
              {/* Type label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-2xs tracking-widest uppercase text-ink-4">
                  {piece.type}
                </span>
                {"organisation" in piece && piece.organisation && (
                  <>
                    <span className="text-ink-4" aria-hidden="true">·</span>
                    <span className="font-mono text-2xs text-ink-4 tracking-wider">
                      {piece.organisation}
                    </span>
                  </>
                )}
              </div>

              {/* Title */}
              {piece.url && piece.url !== "TODO_SUBSTACK_URL" ? (
                <a
                  href={piece.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group-hover:text-accent transition-colors duration-200"
                  aria-label={`${piece.title} — opens in new tab`}
                >
                  <h3 className="font-display italic text-headline text-ink leading-tight mb-3">
                    {piece.title}
                  </h3>
                </a>
              ) : (
                <h3 className="font-display italic text-headline text-ink leading-tight mb-3">
                  {piece.title}
                </h3>
              )}

              <p className="text-ink-3 text-small leading-relaxed">
                {piece.description}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <span
                className="font-mono text-2xs tracking-wider uppercase"
                style={{
                  color:
                    piece.status === "Ongoing" ? "var(--accent)" : "var(--ink-3)",
                }}
              >
                {piece.status}
              </span>
              {piece.url && piece.url !== "TODO_SUBSTACK_URL" && (
                <a
                  href={piece.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-2xs text-ink-3 hover:text-accent transition-colors duration-200 tracking-wider"
                  aria-label={`Open ${piece.title}`}
                >
                  Read ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
