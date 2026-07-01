"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { content } from "@/data/content";

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-section px-6 md:px-10 max-w-site mx-auto"
      aria-label="About"
    >
      <div className="rule mb-section-sm" aria-hidden="true" />
      <SectionHeader index="04" label="About" />

      <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-start">
        {/* Body text */}
        <div className="reveal max-w-prose">
          {/*
           * TODO: Replace this placeholder with your headshot.
           * 1. Add your photo to /public/headshot.jpg (or .png)
           * 2. Replace the <div> below with:
           *    <Image src="/headshot.jpg" alt="Shaurya" width={112} height={112}
           *           className="rounded-sm object-cover mb-8" />
           *    (import Image from "next/image" at the top of the file)
           */}
          <div
            className="w-24 h-24 md:w-28 md:h-28 rounded-sm border border-border mb-8 overflow-hidden flex items-center justify-center"
            style={{ background: "var(--surface-2)" }}
            aria-label="Headshot — photo coming soon"
            role="img"
          >
            <svg viewBox="0 0 112 112" className="w-full h-full" aria-hidden="true">
              <rect width="112" height="112" fill="var(--surface-2)" />
              <circle cx="56" cy="44" r="18" fill="var(--border-strong)" />
              <ellipse cx="56" cy="100" rx="30" ry="24" fill="var(--border-strong)" />
              <text x="56" y="70" textAnchor="middle" fontFamily="monospace"
                fontSize="8" fill="var(--ink-4)" letterSpacing="1">PHOTO</text>
            </svg>
          </div>

          <div className="flex flex-col gap-5">
            {content.about.paragraphs.map((para, i) => (
              <p
                key={i}
                className={`text-body leading-relaxed ${
                  i === 0 ? "text-ink" : "text-ink-2"
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Interests sidebar */}
        <div className="reveal reveal-delay-2 flex-shrink-0 md:min-w-[11rem]">
          <p className="case-label mb-4">INTERESTS</p>
          <ul className="flex flex-col gap-2 list-none" role="list">
            {content.about.interests.map((interest) => (
              <li
                key={interest}
                className="font-mono text-xs text-ink-3 flex items-center gap-2"
              >
                <span
                  className="inline-block w-1 h-1 rounded-full bg-accent flex-shrink-0"
                  aria-hidden="true"
                />
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
