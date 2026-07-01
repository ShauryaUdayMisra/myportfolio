"use client";

import { useEffect, useRef } from "react";
import { content } from "@/data/content";

function NetworkSVG() {
  return (
    <svg
      viewBox="0 0 220 160"
      className="network-svg-float w-full h-full"
      aria-hidden="true"
      fill="none"
    >
      {/* Edges */}
      <g stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.75">
        <line x1="22" y1="28" x2="108" y2="78" />
        <line x1="75" y1="12" x2="108" y2="78" />
        <line x1="148" y1="38" x2="108" y2="78" />
        <line x1="190" y1="18" x2="148" y2="38" />
        <line x1="75" y1="12" x2="190" y2="18" />
        <line x1="38" y1="95" x2="108" y2="78" />
        <line x1="165" y1="108" x2="108" y2="78" />
        <line x1="68" y1="140" x2="108" y2="78" />
        <line x1="138" y1="138" x2="108" y2="78" />
        <line x1="22" y1="28" x2="38" y2="95" strokeOpacity="0.09" />
        <line x1="38" y1="95" x2="68" y2="140" strokeOpacity="0.09" />
        <line x1="138" y1="138" x2="165" y2="108" strokeOpacity="0.09" />
        <line x1="190" y1="18" x2="165" y2="108" strokeOpacity="0.09" />
      </g>

      {/* Outer nodes */}
      <circle className="network-node" cx="22" cy="28" r="2.5" fill="currentColor" fillOpacity="0.5" />
      <circle className="network-node" cx="75" cy="12" r="2.5" fill="currentColor" fillOpacity="0.5" />
      <circle className="network-node" cx="148" cy="38" r="2.5" fill="currentColor" fillOpacity="0.5" />
      <circle className="network-node" cx="190" cy="18" r="2.5" fill="currentColor" fillOpacity="0.5" />
      <circle className="network-node" cx="38" cy="95" r="2.5" fill="currentColor" fillOpacity="0.5" />
      <circle className="network-node" cx="165" cy="108" r="2.5" fill="currentColor" fillOpacity="0.5" />
      <circle className="network-node" cx="68" cy="140" r="2.5" fill="currentColor" fillOpacity="0.5" />
      <circle className="network-node" cx="138" cy="138" r="2.5" fill="currentColor" fillOpacity="0.5" />

      {/* Central node — accent coloured */}
      <circle cx="108" cy="78" r="5" fill="#D4793A" fillOpacity="0.85" />
      <circle cx="108" cy="78" r="10" fill="#D4793A" fillOpacity="0.08" />
    </svg>
  );
}

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  // Subtle parallax on the name — kept lightweight
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${y * 0.12}px)`;
      el.style.opacity = `${Math.max(0, 1 - y / 500)}`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between dot-grid overflow-hidden"
      aria-label="Introduction"
    >
      {/* Very faint radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, rgba(13,11,9,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Top metadata bar ─────────────────────────────────────────── */}
      <div className="relative z-10 flex justify-end pt-20 md:pt-24 px-6 md:px-10 max-w-site mx-auto w-full">
        <dl
          className="grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-2 text-right"
          aria-label="Profile metadata"
        >
          {content.hero.metadata.map((item) => (
            <div key={item.label} className="flex flex-col items-end">
              <dt className="font-mono text-2xs tracking-widest uppercase text-ink-4">
                {item.label}
              </dt>
              <dd className="font-mono text-xs text-ink-3">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ── Name ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 px-4 md:px-8 max-w-site mx-auto w-full">
        <h1
          ref={nameRef}
          className="hero-name will-change-transform"
          style={{ willChange: "transform, opacity" }}
        >
          {content.meta.name}
        </h1>
      </div>

      {/* ── Rule ─────────────────────────────────────────────────────── */}
      <div className="rule-accent mx-4 md:mx-8 max-w-site" aria-hidden="true" />

      {/* ── Thesis + Network ─────────────────────────────────────────── */}
      <div className="relative z-10 px-6 md:px-10 pb-16 md:pb-20 max-w-site mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end">
          {/* Left: thesis + chips */}
          <div>
            <p className="text-ink-2 text-body-lg md:text-xl max-w-prose leading-relaxed mb-8 font-light">
              {content.hero.thesis}
            </p>
            <div className="flex flex-wrap gap-2" aria-label="Tags">
              {content.hero.chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right: network diagram */}
          <div
            className="hidden md:block w-44 h-32 text-ink opacity-60 flex-shrink-0"
            aria-hidden="true"
          >
            <NetworkSVG />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        aria-hidden="true"
      >
        <span className="font-mono text-2xs tracking-widest uppercase text-ink-3">
          scroll
        </span>
        <span className="block w-px h-8 bg-ink-3 animate-pulse" />
      </div>
    </section>
  );
}
