import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { content, isLiveUrl, type Section, type SectionBlock } from "@/data/content";
import CountUp from "@/components/CountUp";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return content.sections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const section = content.sections.find((s) => s.slug === slug);
  if (!section) return {};
  return {
    title: `${section.name} — ${content.meta.name}`,
    description: section.tagline,
  };
}

function Block({ block, accent }: { block: SectionBlock; accent: string }) {
  switch (block.kind) {
    case "metrics":
      return (
        <div className="flex flex-wrap gap-x-16 gap-y-8">
          {block.items.map((metric) => (
            <div key={metric.label}>
              <div className="metric-value" style={{ color: accent }}>
                <CountUp end={metric.value} suffix={metric.suffix} />
              </div>
              <div className="mono-label mt-2">{metric.label}</div>
            </div>
          ))}
        </div>
      );

    case "text":
      return (
        <div>
          <div className="case-label">{block.label}</div>
          <p className="text-ink-2 text-body-lg font-light leading-relaxed max-w-prose">
            {block.body}
          </p>
        </div>
      );

    case "list":
      return (
        <div>
          <div className="case-label">{block.label}</div>
          <ul className="flex flex-wrap gap-2 list-none" role="list">
            {block.items.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case "links":
      return (
        <div>
          <div className="case-label">{block.label}</div>
          <ul className="list-none divide-y divide-border border-y border-border" role="list">
            {block.items.map((item) => {
              const inner = (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <span className="font-display italic text-headline text-ink">
                      {item.title}
                      {isLiveUrl(item.url) && (
                        <span className="text-ink-4 text-lg ml-2" aria-hidden="true">
                          ↗
                        </span>
                      )}
                    </span>
                    <span className="mono-label">{item.meta}</span>
                  </div>
                  <p className="text-ink-3 text-small font-light leading-relaxed max-w-prose mt-2">
                    {item.description}
                  </p>
                </>
              );
              return (
                <li key={item.title}>
                  {isLiveUrl(item.url) ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-6 group hover:bg-surface transition-colors duration-200 -mx-4 px-4"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="block py-6">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      );

    case "roles":
      return (
        <div>
          <div className="case-label">{block.label}</div>
          <ul className="list-none divide-y divide-border border-y border-border" role="list">
            {block.items.map((role) => (
              <li key={role.title} className="py-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="font-display italic text-headline text-ink">
                    {role.title}
                  </span>
                  <span className="mono-label">{role.period}</span>
                </div>
                <div className="text-ink-2 text-small mt-1">{role.org}</div>
                <p className="text-ink-3 text-small font-light leading-relaxed max-w-prose mt-2">
                  {role.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

function SectionNav({ current }: { current: Section }) {
  // External sections (e.g. Blog → Substack) have no inner page to link to.
  const pages = content.sections.filter((s) => !s.external);
  const i = pages.findIndex((s) => s.slug === current.slug);
  const prev = pages[(i - 1 + pages.length) % pages.length];
  const next = pages[(i + 1) % pages.length];
  return (
    <nav
      className="flex justify-between gap-4 border-t border-border pt-8 mt-section-sm"
      aria-label="Section navigation"
    >
      <Link
        href={`/${prev.slug}`}
        className="link-accent font-mono text-2xs tracking-widest uppercase text-ink-3 hover:text-ink transition-colors duration-200"
      >
        ← {prev.name}
      </Link>
      <Link
        href={`/${next.slug}`}
        className="link-accent font-mono text-2xs tracking-widest uppercase text-ink-3 hover:text-ink transition-colors duration-200"
      >
        {next.name} →
      </Link>
    </nav>
  );
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = content.sections.find((s) => s.slug === slug);
  if (!section) notFound();
  // External sections live elsewhere — send direct visitors straight there.
  if (section.external && isLiveUrl(section.url)) redirect(section.url);

  return (
    <>
      <main className="max-w-site mx-auto w-full px-6 md:px-10 min-h-svh flex flex-col">
        {/* ── Header ───────────────────────────────────────────────────── */}
        <header className="pt-10 md:pt-14">
          <Link
            href="/"
            className="link-accent font-mono text-2xs tracking-widest uppercase text-ink-3 hover:text-ink transition-colors duration-200"
          >
            ← {content.meta.name}
          </Link>

          <div className="mt-12 md:mt-16 animate-fade-up opacity-0">
            <div className="section-index" style={{ color: section.accent }}>
              {section.index} / 05
            </div>
            <h1 className="font-display italic font-light leading-none tracking-tight text-[clamp(3rem,8vw,7rem)] mt-6">
              {section.name}
              {section.nameScript && (
                <span className="block text-headline text-ink-3 not-italic font-sans mt-3">
                  {section.nameScript} — “my future”
                </span>
              )}
            </h1>
            <p className="text-ink-2 text-body-lg font-light leading-relaxed max-w-prose mt-6">
              {section.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-6">
              {section.chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
              {isLiveUrl(section.url) && (
                <a
                  href={section.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip transition-colors duration-200"
                  style={{ borderColor: section.accent, color: section.accent }}
                >
                  {section.urlLabel ?? section.url} ↗
                </a>
              )}
            </div>
          </div>
        </header>

        {/* ── Accent rule ──────────────────────────────────────────────── */}
        <div
          className="h-px mt-12 md:mt-16"
          style={{
            background: `linear-gradient(to right, ${section.accent}, transparent 60%)`,
          }}
          aria-hidden="true"
        />

        {/* ── Content blocks ───────────────────────────────────────────── */}
        <div
          className="flex-1 flex flex-col gap-12 md:gap-16 py-12 md:py-16 animate-fade-up opacity-0"
          style={{ animationDelay: "0.15s" }}
        >
          {section.blocks.map((block, i) => (
            <Block key={i} block={block} accent={section.accent} />
          ))}
        </div>

        <SectionNav current={section} />
      </main>
      <Footer />
    </>
  );
}
