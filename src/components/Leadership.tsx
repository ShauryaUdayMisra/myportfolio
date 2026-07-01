"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { content } from "@/data/content";

export default function Leadership() {
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
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="py-section px-6 md:px-10 max-w-site mx-auto"
      aria-label="Leadership and community"
    >
      {/* Divider rule */}
      <div className="rule mb-section-sm" aria-hidden="true" />

      <SectionHeader index="02" label="Leadership & Community" />

      <div className="flex flex-col">
        {content.leadership.map((item, i) => (
          <article
            key={item.id}
            className={[
              "reveal flex flex-col md:grid md:grid-cols-[auto_1fr_auto] md:gap-10 border-b border-border py-7 md:py-8 group",
              i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : "",
            ].join(" ")}
            aria-label={`${item.title}, ${item.org}`}
          >
            {/* Index */}
            <div className="flex-shrink-0 mb-2 md:mb-0">
              <span className="font-mono text-2xs tracking-widest text-ink-4">
                {item.index}
              </span>
            </div>

            {/* Body */}
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                {item.isFirst && (
                  <span className="font-mono text-2xs tracking-wider uppercase text-accent border border-accent px-1.5 py-0.5 self-center">
                    Founded
                  </span>
                )}
                <h3 className="font-display italic text-headline text-ink group-hover:text-accent transition-colors duration-200">
                  {item.title}
                </h3>
                <span className="font-mono text-xs text-ink-3">·</span>
                <span className="text-ink-2 text-small">{item.org}</span>
              </div>
              <p className="text-ink-3 text-small leading-relaxed max-w-prose">
                {item.description}
              </p>
            </div>

            {/* Period */}
            <div className="flex-shrink-0 mt-3 md:mt-0 md:text-right">
              <span className="font-mono text-2xs text-ink-4 tracking-wider">
                {item.period}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
