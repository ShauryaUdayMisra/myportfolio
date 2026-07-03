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
  blocks: SectionBlock[];
};

export const content = {
  meta: {
    // TODO: Add surname if you want full name shown (e.g. "Shaurya Misra")
    name: "Shaurya",
    title: "Shaurya — Builder, Founder, IB '27",
    description:
      "Grade 11 IB Diploma student at Harrow International School Bengaluru. Founder of INTRN, Creator of Moro Gami, Editor-in-Chief of Harrow Herald.",
    // TODO: Update to your live Railway URL once deployed
    siteUrl: "https://shaurya.up.railway.app",
    // TODO: Replace /og-image.png with a real 1200×630 image in /public/
    ogImage: "/og-image.svg",
    email: "shauryauday1@gmail.com",
    // Accent colour — this is a warm amber placeholder. TODO: pick your final colour.
    accentColor: "#D4793A",
  },

  home: {
    intro:
      "Building platforms that widen access — to internships, to career guidance, to financial literacy.",
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
      blocks: [
        {
          kind: "metrics",
          items: [
            { value: 47, suffix: "+", label: "students placed" },
            { value: 10, suffix: "+", label: "partner companies" },
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

    // ── 02 · Moro Gami ──────────────────────────────────────────────────────
    {
      slug: "moro-gami",
      index: "02",
      name: "Moro Gami",
      nameScript: "ମୋ ଭବିଷ୍ୟ",
      tagline:
        "AI vocational-guidance chatbot for rural Odisha — Odia, Hindi, and English.",
      accent: "#4A9D6F",
      accentDim: "rgba(74,157,111,0.07)",
      chips: ["Creator", "In Development", "IB CAS Project"],
      url: null,
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
        "The school's first crypto curriculum — DeFi, NFTs, DAOs, and a token each student deploys themselves.",
      accent: "#E8A33D",
      accentDim: "rgba(232,163,61,0.07)",
      chips: ["Founder", "2024 — present"],
      url: null,
      blocks: [
        {
          kind: "text",
          label: "What",
          body: "Founded the Crypto & Bitcoin Club at Harrow International School Bengaluru — the school's first crypto curriculum. A 12-week programme covering DeFi, NFTs, and DAOs.",
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
          label: "Curriculum",
          items: ["Bitcoin & money", "DeFi", "NFTs", "DAOs", "ERC-20 deployment"],
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
      // TODO: Replace with your actual Substack URL (also in contact.links below)
      url: "TODO_SUBSTACK_URL",
      urlLabel: "The Handshake on Substack",
      chips: ["Writer", "Ongoing"],
      blocks: [
        {
          kind: "text",
          label: "About",
          body: "I write The Handshake, a Substack on crypto, fintech, blockchain, and technology — trying to explain what's underneath the headlines. Probably thinking too much about monetary systems.",
        },
        {
          kind: "links",
          label: "Selected writing",
          items: [
            {
              title: "The Handshake",
              meta: "Substack · Ongoing",
              description:
                "Writing on crypto, fintech, blockchain, and technology.",
              // TODO: Replace with your actual Substack URL
              url: "TODO_SUBSTACK_URL",
            },
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

    // ── 05 · More ───────────────────────────────────────────────────────────
    {
      slug: "more",
      index: "05",
      name: "More",
      tagline:
        "Editor-in-Chief, Head of Boarding, and the rest of the story.",
      accent: "#D4793A",
      accentDim: "rgba(212,121,58,0.07)",
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
          // TODO: Replace the first sentence with 1–2 sentences in your own voice
          // about the Cuttack-to-Bengaluru journey or what shaped you.
          body: "From Cuttack, Odisha, to Bengaluru. The through-line across most of what I build is access — better opportunities for students without the right connections (INTRN), better information for students who've never had a career counsellor (Moro Gami), better financial literacy for peers who've heard of Bitcoin but not what's underneath it.",
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
      ],
    },
  ] satisfies Section[],

  contact: {
    email: "shauryauday1@gmail.com",
    links: [
      { label: "INTRN", href: "https://intrn.xyz", external: true, download: false },
      // TODO: Replace with actual Substack URL
      { label: "Substack", href: "TODO_SUBSTACK_URL", external: true, download: false },
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
