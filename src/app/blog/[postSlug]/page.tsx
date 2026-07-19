import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { content } from "@/data/content";
import {
  posts,
  formatPostDate,
  readingMinutes,
  BLOG_ACCENT,
} from "@/data/posts";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return posts.map((post) => ({ postSlug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}): Promise<Metadata> {
  const { postSlug } = await params;
  const post = posts.find((p) => p.slug === postSlug);
  if (!post) return {};
  return {
    title: `${post.title} — ${content.meta.name}`,
    description:
      post.subtitle ?? `A post from The Handshake, ${content.meta.name}'s blog.`,
  };
}

function PostNav({ currentSlug }: { currentSlug: string }) {
  const i = posts.findIndex((p) => p.slug === currentSlug);
  const newer = i > 0 ? posts[i - 1] : null;
  const older = i < posts.length - 1 ? posts[i + 1] : null;
  if (!newer && !older) return null;
  return (
    <nav
      className="flex justify-between gap-6 border-t border-border pt-8 pb-12"
      aria-label="More posts"
    >
      {older ? (
        <Link
          href={`/blog/${older.slug}`}
          className="link-accent font-mono text-2xs tracking-widest uppercase text-ink-3 hover:text-ink transition-colors duration-200 min-w-0 truncate"
        >
          ← {older.title}
        </Link>
      ) : (
        <span />
      )}
      {newer && (
        <Link
          href={`/blog/${newer.slug}`}
          className="link-accent font-mono text-2xs tracking-widest uppercase text-ink-3 hover:text-ink transition-colors duration-200 min-w-0 truncate text-right"
        >
          {newer.title} →
        </Link>
      )}
    </nav>
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}) {
  const { postSlug } = await params;
  const post = posts.find((p) => p.slug === postSlug);
  if (!post) notFound();

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
            <div className="mono-label" style={{ color: BLOG_ACCENT }}>
              The Handshake
            </div>
            <h1 className="font-display font-light leading-[1.05] tracking-tight text-[clamp(2.25rem,5.5vw,4.25rem)] mt-6 max-w-4xl">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-ink-2 text-body-lg font-light leading-relaxed max-w-prose mt-4">
                {post.subtitle}
              </p>
            )}
            <div className="font-mono text-2xs tracking-widest uppercase text-ink-3 mt-6">
              {formatPostDate(post.date)} · {readingMinutes(post.bodyHtml)} min
              read
            </div>
          </div>
        </header>

        {/* ── Accent rule ──────────────────────────────────────────────── */}
        <div
          className="h-px mt-12 md:mt-16"
          style={{
            background: `linear-gradient(to right, ${BLOG_ACCENT}, transparent 60%)`,
          }}
          aria-hidden="true"
        />

        {/* ── Post body ────────────────────────────────────────────────── */}
        <article
          className="post-body max-w-prose py-12 md:py-16 animate-fade-up opacity-0"
          style={{ animationDelay: "0.15s" }}
          dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
        />

        {/* ── Substack CTA ─────────────────────────────────────────────── */}
        <div className="pb-12 md:pb-16">
          <a
            href={post.substackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-2xs tracking-widest uppercase border rounded-[2px] px-5 py-3 transition-colors duration-200 hover:bg-surface"
            style={{ borderColor: BLOG_ACCENT, color: BLOG_ACCENT }}
          >
            Read on Substack ↗
          </a>
          <p className="text-ink-4 text-2xs mt-3">
            Like, comment, or subscribe on the original post.
          </p>
        </div>

        <PostNav currentSlug={post.slug} />
      </main>
      <Footer />
    </>
  );
}
