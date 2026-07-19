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

// Short blurbs for posts that have no Substack subtitle. Authored here, keyed
// by slug, because posts.json is generated and must not be hand-edited.
const fallbackDescriptions: Record<string, string> = {
  "i-started-a-crypto-club-at-school":
    "A street vendor in Cuttack squinting at a failed UPI payment, how money quietly changed under everyone's feet, and why I pushed to start the school's first ever crypto club.",
  "i-called-it-an-odyssey-it-was-always":
    "Three years of this blog, from a clumsy first post at 13 to the question underneath everything I build: how do two strangers decide to trust each other?",
  "understanding-bitcoin-does-the-world":
    "A long-form research essay on Bitcoin, fiat money, and whether the world economy actually needs a new financial system.",
  "attention-is-the-new-currency":
    "On the attention economy: how every scroll and click is engineered to consume our time, and why attention now works like money.",
  "should-i-be-held-responsible-for":
    "An essay written for a competition on whether we really choose our beliefs, and whether we can be held morally responsible for them.",
  "the-streets-of-puri":
    "A descriptive piece on the streets around the Jagannath temple in Puri and the lives, pilgrims, and quiet routines that pass through them.",
  "a-tab-with-internet-access-can-change":
    "What I saw distributing tablets to underprivileged kids with Project Slate, and how internet access can help break the cycle of poverty.",
};

export function postDescription(post: Post): string | null {
  return post.subtitle ?? fallbackDescriptions[post.slug] ?? null;
}

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
