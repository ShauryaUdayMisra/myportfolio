"use client";

import { useEffect, useRef } from "react";
import CountUp from "./CountUp";
import SectionHeader from "./SectionHeader";
import { content } from "@/data/content";

type Venture = (typeof content.ventures)[number];

interface VentureProps {
  venture: Venture;
}

function VentureCase({ venture }: VentureProps) {
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = articleRef.current;
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
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const hasNameScript = "nameScript" in venture;
  const hasPartners =
    "partners" in venture &&
    Array.isArray(venture.partners) &&
    (venture.partners as string[]).length > 0;

  return (
    <article
      ref={articleRef}
      className="relative rounded-sm overflow-hidden"
      style={{ background: venture.accentDim }}
      aria-label={`${venture.name} case study`}
    >
      {/* Top accent rule */}
      <div
        className="h-px w-full"
        style={{
          background: `linear-gradient(to right, ${venture.accentColor}, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      <div className="p-6 md:p-10 lg:p-12">
        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="reveal flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-baseline gap-3 mb-1 flex-wrap">
              <h3
                className="font-display italic text-display text-ink"
                style={{ lineHeight: 1 }}
              >
                {venture.name}
              </h3>
              {hasNameScript && (venture as { nameScript?: string }).nameScript && (
                <span
                  className="font-display text-xl md:text-2xl"
                  style={{ color: venture.accentColor, opacity: 0.8 }}
                >
                  {(venture as { nameScript: string }).nameScript}
                </span>
              )}
            </div>
            {"nameMeaning" in venture &&
              (venture as { nameMeaning?: string }).nameMeaning && (
                <p className="font-mono text-xs text-ink-3 tracking-wider mb-2">
                  {(venture as { nameMeaning: string }).nameMeaning}
                </p>
              )}
            <p className="text-ink-2 text-small mt-2 max-w-sm leading-relaxed">
              {venture.tagline}
            </p>
          </div>

          {/* Meta */}
          <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
            <span
              className="chip"
              style={{ borderColor: venture.accentColor, color: venture.accentColor }}
            >
              {venture.status}
            </span>
            <span className="font-mono text-2xs text-ink-3 tracking-wider uppercase">
              {venture.role}
            </span>
            {"since" in venture && (venture as { since?: string }).since && (
              <span className="font-mono text-2xs text-ink-4 tracking-wider">
                Est. {(venture as { since: string }).since}
              </span>
            )}
            {"context" in venture && (venture as { context?: string }).context && (
              <span className="font-mono text-2xs text-ink-4 tracking-wider uppercase">
                {(venture as { context: string }).context}
              </span>
            )}
            {venture.url && (
              <a
                href={venture.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-2xs tracking-wider link-accent mt-1"
                style={{ color: venture.accentColor }}
                aria-label={`Visit ${venture.name} — opens in new tab`}
              >
                {new URL(venture.url).hostname.replace("www.", "")} ↗
              </a>
            )}
          </div>
        </div>

        {/* ── Metrics ────────────────────────────────────────────────── */}
        {venture.metrics.length > 0 && (
          <div
            className="reveal reveal-delay-1 grid gap-px mb-8 border border-border rounded-sm overflow-hidden"
            style={{
              gridTemplateColumns: `repeat(${venture.metrics.length}, 1fr)`,
            }}
          >
            {venture.metrics.map((m) => (
              <div
                key={m.label}
                className="p-5 md:p-6"
                style={{ background: "rgba(0,0,0,0.3)" }}
              >
                <div
                  className="metric-value"
                  style={{ color: venture.accentColor }}
                  aria-label={`${m.value}${m.suffix} ${m.label}`}
                >
                  <CountUp end={m.value} suffix={m.suffix} />
                </div>
                <p className="font-mono text-2xs text-ink-3 tracking-wider uppercase mt-1">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* ── Case study body ─────────────────────────────────────────── */}
        <div className="reveal reveal-delay-2 grid md:grid-cols-3 gap-6 md:gap-8">
          {(["what", "why", "how"] as const).map((key) => (
            <div key={key}>
              <p className="case-label">{key.toUpperCase()}</p>
              <p className="text-ink-2 text-small leading-relaxed">
                {venture[key]}
              </p>
            </div>
          ))}
        </div>

        {/* ── Partners ────────────────────────────────────────────────── */}
        {hasPartners && (
          <div className="reveal reveal-delay-3 mt-8 pt-8 border-t border-border">
            <p className="case-label mb-3">PARTNER COMPANIES</p>
            <div className="flex flex-wrap gap-2">
              {(venture as { partners: string[] }).partners.map((p) => (
                <span
                  key={p}
                  className="font-mono text-2xs text-ink-3 border border-border px-2.5 py-1"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Ventures() {
  return (
    <section
      id="ventures"
      className="py-section px-6 md:px-10 max-w-site mx-auto"
      aria-label="Ventures and projects"
    >
      <SectionHeader index="01" label="Ventures" />
      <div className="flex flex-col gap-8 md:gap-12">
        {content.ventures.map((venture) => (
          <VentureCase key={venture.id} venture={venture} />
        ))}
      </div>
    </section>
  );
}
