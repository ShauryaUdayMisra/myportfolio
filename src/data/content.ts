// ─────────────────────────────────────────────────────────────────────────────
// CONTENT FILE — edit everything here; nothing else needs to change.
// Shaurya: look for TODO comments to fill in your details.
//
// Site structure: the homepage shows 5 clickable tiles, one per entry in
// `sections` below. Each tile opens its own page at /<slug>. To change what a
// page says, edit its `blocks`. Block kinds:
//   { kind: "text",    label, body }                     — a labelled paragraph
//   { kind: "metrics", items: [{ value, suffix, label }]}— animated big numbers
//   { kind: "list",    label, items: ["…"] }             — a simple tag list
//   { kind: "links",   label, items: [{ title, meta, description, url }] }
//   { kind: "roles",   label, items: [{ title, org, period, description }] }
// ─────────────────────────────────────────────────────────────────────────────

export type Metric = { value: number; suffix: string; label: string };

export type SectionBlock =
  | { kind: "text"; label: string; body: string }
  | { kind: "metrics"; items: Metric[] }
  | { kind: "list"; label: string; items: string[] }
  | {
      kind: "links";
      label: string;
      items: {
        title: string;
        meta: string;
        description: string;
        url: string | null;
      }[];
    }
  | {
      kind: "roles";
      label: string;
      items: {
        title: string;
        org: string;
        period: string;
        description: string;
      }[];
    };

export type Section = {
  slug: string;
  index: string;
  name: string;
  nameScript?: string;
  tagline: string;
  accent: string;
  accentDim: string;
  chips: string[];
  url: string | null;
  urlLabel?: string;
  // Homepage tile behaviour:
  // external: true  → the tile links straight to `url` (new tab), no inner page
  // showUrlOnTile   → the tile also shows `url` as its own small clickable link
  external?: boolean;
  showUrlOnTile?: boolean;
  blocks: SectionBlock[];
};

export const content = {
  meta: {
    name: "Shaurya Uday Misra",
    title: "Shaurya Uday Misra — Builder, Founder, IB '27",
    description:
      "Grade 11 IB Diploma student at Harrow International School Bengaluru. Founder of INTRN, Creator of Moro Agami, Editor-in-Chief of Harrow Herald.",
    // TODO: Update to your live Railway URL once deployed
    siteUrl: "https://shaurya.up.railway.app",
    // TODO: Replace /og-image.png with a real 1200×630 image in /public/
    ogImage: "/og-image.svg",
    email: "shauryauday1@gmail.com",
    accentColor: "#E0A83C",
  },

  home: {
    intro:
      "I grew up in Cuttack, Odisha, and I'm now in Grade 11 at Harrow Bengaluru. Most of what I work on comes back to one idea: the right opportunity shouldn't depend on knowing the right people. That's why I started INTRN, which places high school students in real internships at real companies, and why I'm building Moro Agami, a career guidance chatbot for students in rural Odisha who have no one to ask. At school I founded our first ever crypto club, I edit the Harrow Herald as Editor-in-Chief, and I'm Head of Boarding for the boys. The rest of that story is under More, and I write about crypto, fintech and money on my blog.",
    chips: ["IB '27", "Bengaluru", "Builder"],
  },

  sections: [
    // ── 01 · INTRN ──────────────────────────────────────────────────────────
    {
      slug: "intrn",
      index: "01",
      name: "INTRN",
      tagline:
        "Structured three-week online internships for high-school students.",
      accent: "#B46BFC",
      accentDim: "rgba(180,107,252,0.07)",
      chips: ["Founder", "Live", "2024 — present"],
      url: "https://intrn.xyz",
      urlLabel: "intrn.xyz",
      showUrlOnTile: true,
      blocks: [
        {
          // Stats mirror the "Platform Highlights" on intrn.xyz — keep in sync.
          kind: "metrics",
          items: [
            { value: 57, suffix: "", label: "students registered" },
            { value: 17, suffix: "", label: "companies partnered" },
            { value: 12, suffix: "", label: "internship opportunities" },
          ],
        },
        {
          kind: "text",
          label: "What",
          body: "INTRN places high-school students in three-week online internships at real companies — structured enough to be meaningful, short enough to fit around school.",
        },
        {
          kind: "text",
          label: "Why",
          body: "Most internship access runs through personal networks. If your parents don't know the right people, you rarely get a foot in the door. INTRN exists to change that.",
        },
        {
          kind: "text",
          label: "How",
          body: "Three-week cohorts matched by interest and availability, with clear deliverables from the company side. Students gain real work experience; companies get a vetted, motivated candidate at no long-term commitment.",
        },
        {
          kind: "list",
          label: "Partners",
          items: [
            "Bir Terraces",
            "Prelude Novel Ventures",
            "The Kebabsmith",
            "Chandrani Pearls",
            "Rural sports nonprofit",
          ],
        },
      ],
    },

    // ── 02 · Moro Agami ─────────────────────────────────────────────────────
    {
      slug: "moro-agami",
      index: "02",
      name: "Moro Agami",
      nameScript: "ମୋ ଭବିଷ୍ୟ",
      tagline:
        "AI vocational-guidance chatbot for rural Odisha — Odia, Hindi, and English.",
      accent: "#4A9D6F",
      accentDim: "rgba(74,157,111,0.07)",
      chips: ["Creator", "In Development", "IB CAS Project"],
      url: "https://moro-agami-production.up.railway.app",
      urlLabel: "Try it live",
      blocks: [
        {
          kind: "metrics",
          items: [{ value: 3, suffix: "", label: "languages" }],
        },
        {
          kind: "text",
          label: "What",
          body: "A trilingual chatbot (Odia primary, Hindi, English) that helps government-school and low-income students in Odisha navigate vocational and career decisions — questions most of them have no one to ask.",
        },
        {
          kind: "text",
          label: "Why",
          body: "Rural Odia students face a near-total scarcity of trustworthy career guidance. Most resources are English-first and assume urban contexts that don't apply to their lives.",
        },
        {
          kind: "text",
          label: "How",
          body: "Content is grounded in verified sources rather than freely generated — a deliberate constraint, given the limited accuracy of current LLMs on Odia language and regional context. The chatbot is a structured guide, not a hallucination engine.",
        },
      ],
    },

    // ── 03 · Crypto Club ────────────────────────────────────────────────────
    {
      slug: "crypto-club",
      index: "03",
      name: "Crypto Club",
      tagline:
        "The school's first ever crypto club. DeFi, NFTs, DAOs, and a token each student deploys themselves.",
      accent: "#E8A33D",
      accentDim: "rgba(232,163,61,0.07)",
      chips: ["Founder", "2024 — present"],
      url: null,
      blocks: [
        {
          kind: "text",
          label: "What",
          body: "Founded the Crypto & Bitcoin Club at Harrow International School Bengaluru, the school's first ever crypto club. A 12-week programme covering DeFi, NFTs, and DAOs.",
        },
        {
          kind: "text",
          label: "Why",
          body: "Most of my peers had heard of Bitcoin but not what's underneath it. Financial literacy for this generation has to include how digital money and open protocols actually work.",
        },
        {
          kind: "text",
          label: "The capstone",
          body: "Each student designs and deploys their own ERC-20 token — from tokenomics on paper to a live contract they can point to.",
        },
        {
          kind: "list",
          label: "What we cover",
          items: ["Bitcoin & money", "DeFi", "NFTs", "DAOs", "ERC-20 deployment"],
        },
        {
          kind: "links",
          label: "Follow along",
          items: [
            {
              title: "Here's what we've been doing",
              meta: "Notion",
              description:
                "Session notes, materials, and the token project, updated as the club goes.",
              // TODO: Make this page public in Notion (Share → Publish) or
              // visitors will hit a login wall; swap in the public URL if different.
              url: "https://www.notion.so/2972af5f29c58000ad8df99e834914fc",
            },
          ],
        },
      ],
    },

    // ── 04 · Blog ───────────────────────────────────────────────────────────
    {
      slug: "blog",
      index: "04",
      name: "Blog",
      tagline: "Writing on crypto, fintech, blockchain, and monetary systems.",
      accent: "#5B8DD9",
      accentDim: "rgba(91,141,217,0.07)",
      // The homepage Blog tile links straight here — no inner page.
      url: "https://substack.com/@thehandshake01",
      urlLabel: "The Handshake on Substack",
      external: true,
      chips: ["Writer", "Ongoing"],
      blocks: [],
    },

    // ── 05 · More ───────────────────────────────────────────────────────────
    {
      slug: "more",
      index: "05",
      name: "More",
      tagline:
        "Editor-in-Chief, Head of Boarding, and the rest of the story.",
      accent: "#E0A83C",
      accentDim: "rgba(224,168,60,0.07)",
      chips: ["Leadership", "About"],
      url: null,
      blocks: [
        {
          kind: "roles",
          label: "Roles",
          items: [
            {
              title: "Editor-in-Chief",
              org: "Harrow Herald",
              period: "2024 — present",
              description:
                "Leads the school magazine — editorial direction, commissioning, editing, and production.",
            },
            {
              title: "Head of Boarding (Boys)",
              org: "Harrow International School Bengaluru",
              period: "2024 — present",
              description:
                "An appointed leadership role within the school's boarding community.",
            },
          ],
        },
        {
          kind: "text",
          label: "About",
          body: "I grew up in Cuttack, Odisha, and since then I have lived in Bengaluru, Singapore and Connecticut. Moving that much gives you a global outlook, and it teaches you to adapt fast. If I had to name one strength it would be that: adapting quickly and finding opportunities where most people do not see them. The through-line across what I build is access. Better opportunities for students without the right connections (INTRN), better information for students who have never had a career counsellor (Moro Agami), and better financial literacy for peers who have heard of Bitcoin but not what's underneath it.",
        },
        {
          kind: "list",
          label: "Interests",
          items: [
            "Crypto & DeFi",
            "Fintech",
            "Quant Finance",
            "AI",
            "Startups",
            "Monetary Systems",
          ],
        },
        {
          kind: "links",
          label: "Selected writing",
          items: [
            {
              title: "Should We Fear a Cashless Society?",
              meta: "Essay · John Locke Institute",
              description:
                "An economics essay exploring the implications of moving toward a fully cashless monetary system.",
              // TODO: Add link if the essay is publicly available
              url: null,
            },
          ],
        },
      ],
    },
  ] satisfies Section[],

  contact: {
    email: "shauryauday1@gmail.com",
    links: [
      { label: "INTRN", href: "https://intrn.xyz", external: true, download: false },
      { label: "Substack", href: "https://substack.com/@thehandshake01", external: true, download: false },
      // TODO: Replace with your GitHub URL
      { label: "GitHub", href: "TODO_GITHUB_URL", external: true, download: false },
      // TODO: Replace with your LinkedIn URL
      { label: "LinkedIn", href: "TODO_LINKEDIN_URL", external: true, download: false },
      // TODO: Add resume.pdf to /public/resume.pdf, then this link goes live
      { label: "Resume ↓", href: "/resume.pdf", external: false, download: true },
    ],
  },

  footer: {
    note: "Built from Bengaluru.",
  },
};

export type SiteContent = typeof content;

// A link is "live" only once its TODO placeholder has been replaced.
export function isLiveUrl(url: string | null | undefined): url is string {
  return !!url && !url.startsWith("TODO_");
}
