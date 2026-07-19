import Link from "next/link";
import { content, isLiveUrl, type Section } from "@/data/content";
import { posts, formatPostDate, postDescription, BLOG_ACCENT } from "@/data/posts";
import Footer from "@/components/Footer";

const sections: Section[] = content.sections;

export default function Home() {
  return (
    <>
      <main className="min-h-svh flex flex-col dot-grid">
        {/* ── Masthead ─────────────────────────────────────────────────── */}
        <header className="max-w-site mx-auto w-full px-6 md:px-10 pt-16 md:pt-24 pb-10 md:pb-14">
          <div className="animate-fade-up opacity-0">
            <h1 className="font-display italic font-light leading-none tracking-tight text-[clamp(3.5rem,9vw,8rem)]">
              {content.meta.name}
            </h1>
          </div>
          <div className="animate-fade-up opacity-0 mt-6" style={{ animationDelay: "0.1s" }}>
            <p className="text-ink-2 text-body-lg font-light leading-relaxed">
              {content.home.intro}
            </p>
            <div className="flex flex-wrap gap-2 mt-6" aria-label="Tags">
              {content.home.chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* ── The sections ─────────────────────────────────────────────── */}
        <nav
          className="max-w-site mx-auto w-full px-6 md:px-10 flex-1"
          aria-label="Site sections"
        >
          <ul className="list-none border-t border-border" role="list">
            {sections.map((section, i) => {
              const external = section.external && isLiveUrl(section.url);
              return (
                <li key={section.slug}>
                  <div
                    className="home-tile group animate-fade-up opacity-0"
                    style={
                      {
                        animationDelay: `${0.15 + i * 0.07}s`,
                        "--tile-accent": section.accent,
                      } as React.CSSProperties
                    }
                  >
                    {/* Stretched link — covers the whole tile */}
                    {external ? (
                      <a
                        href={section.url!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0"
                        aria-label={`${section.name} — ${section.urlLabel ?? section.url} (opens in new tab)`}
                      />
                    ) : (
                      <Link
                        href={`/${section.slug}`}
                        className="absolute inset-0"
                        aria-label={section.name}
                      />
                    )}

                    <span className="font-mono text-2xs tracking-widest text-ink-4 pt-2.5 md:pt-4">
                      {section.index}
                    </span>
                    <span className="min-w-0">
                      <span className="tile-name block font-display italic font-light leading-none tracking-tight text-[clamp(2rem,5.5vw,4.5rem)] transition-colors duration-300">
                        {section.name}
                      </span>
                      <span className="block mt-2 text-ink-3 text-small font-light max-w-prose leading-relaxed">
                        {section.tagline}
                      </span>
                      {section.showUrlOnTile && isLiveUrl(section.url) && (
                        <a
                          href={section.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-accent relative z-10 mt-3 font-mono text-2xs tracking-widest uppercase"
                          style={{ color: section.accent }}
                        >
                          {section.urlLabel ?? section.url} ↗
                        </a>
                      )}
                    </span>
                    <span
                      className="tile-arrow self-center font-display text-2xl md:text-3xl text-ink-4 transition-all duration-300"
                      aria-hidden="true"
                    >
                      {external ? "↗" : "→"}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Blog — The Handshake ─────────────────────────────────────── */}
        <section
          id="blog"
          aria-label="Blog"
          className="max-w-site mx-auto w-full px-6 md:px-10 pt-14 md:pt-20 pb-16 animate-fade-up opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          <div
            className="h-px"
            style={{
              background: `linear-gradient(to right, ${BLOG_ACCENT}, transparent 60%)`,
            }}
            aria-hidden="true"
          />
          <div className="mt-10 md:mt-12">
            <div className="mono-label" style={{ color: BLOG_ACCENT }}>
              Blog
            </div>
            <h2 className="font-display italic font-light leading-none tracking-tight text-[clamp(2rem,5.5vw,4.5rem)] mt-4">
              The Handshake
            </h2>
            <p className="text-ink-3 text-small font-light mt-3 max-w-prose">
              Crypto, fintech, blockchain, and monetary systems.
            </p>
          </div>
          <ul className="list-none divide-y divide-border border-y border-border mt-8" role="list">
            {posts.map((post) => (
              <li key={post.slug}>
                <a
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-6 group hover:bg-surface transition-colors duration-200 -mx-4 px-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
                    <span
                      className="font-semibold text-body-lg text-ink transition-colors duration-200 group-hover:text-[#5B8DD9]"
                    >
                      {post.title}
                    </span>
                    <span className="mono-label shrink-0">
                      {formatPostDate(post.date)}
                    </span>
                  </div>
                  {postDescription(post) && (
                    <p className="text-ink-3 text-small font-light leading-relaxed max-w-prose mt-2">
                      {postDescription(post)}
                    </p>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
