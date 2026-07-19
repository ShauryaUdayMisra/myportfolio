// Blog posts imported from The Handshake (odysseyunhashed.substack.com).
// posts.json is generated — regenerate with: node scripts/import-substack.mjs
import postsJson from "./posts.json";

export type Post = {
  slug: string;
  title: string;
  subtitle: string | null;
  date: string; // ISO
  substackUrl: string;
  bodyHtml: string;
};

export const BLOG_ACCENT = "#5B8DD9";

export const posts: Post[] = (postsJson as Post[])
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date));

// UTC so the rendered date never shifts a day with the build machine's timezone.
export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function readingMinutes(bodyHtml: string): number {
  const words = bodyHtml.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
