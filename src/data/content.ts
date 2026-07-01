// ─────────────────────────────────────────────────────────────────────────────
// CONTENT FILE — edit everything here; nothing else needs to change.
// Shaurya: look for TODO comments to fill in your details.
// ─────────────────────────────────────────────────────────────────────────────

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
    // Replace #D4793A across globals.css and here once decided.
    accentColor: "#D4793A",
  },

  nav: {
    sections: [
      { label: "Ventures", href: "#ventures" },
      { label: "Leadership", href: "#leadership" },
      { label: "Writing", href: "#writing" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "INTRN", href: "https://intrn.xyz" },
  },

  hero: {
    thesis:
      "Building platforms that widen access — to internships, to career guidance, to financial literacy.",
    chips: ["IB '27", "Bengaluru", "Builder"],
    metadata: [
      { label: "SCHOOL", value: "Harrow Int'l Bengaluru" },
      { label: "PROGRAMME", value: "IB Diploma · Grade 11" },
      { label: "COHORT", value: "Class of 2027" },
      { label: "ORIGIN", value: "Cuttack, Odisha" },
    ],
  },

  ventures: [
    {
      id: "intrn",
      index: "01",
      name: "INTRN",
      url: "https://intrn.xyz",
      tagline:
        "Structured three-week online internships for high-school students.",
      // INTRN's own accent — do not change this one
      accentColor: "#B46BFC",
      accentDim: "rgba(180,107,252,0.07)",
      status: "Live",
      role: "Founder",
      since: "2024",
      metrics: [
        { value: 47, suffix: "+", label: "students placed" },
        { value: 10, suffix: "+", label: "partner companies" },
      ],
      what: "INTRN places high-school students in three-week online internships at real companies — structured enough to be meaningful, short enough to fit around school.",
      why: "Most internship access runs through personal networks. If your parents don't know the right people, you rarely get a foot in the door. INTRN exists to change that.",
      how: "Three-week cohorts matched by interest and availability, with clear deliverables from the company side. Students gain real work experience; companies get a vetted, motivated candidate at no long-term commitment.",
      partners: [
        "Bir Terraces",
        "Prelude Novel Ventures",
        "The Kebabsmith",
        "Chandrani Pearls",
        "Rural sports nonprofit",
      ],
    },
    {
      id: "moro-gami",
      index: "02",
      name: "Moro Gami",
      nameScript: "ମୋ ଭବିଷ୍ୟ",
      nameMeaning: '"my future"',
      url: null as string | null,
      tagline:
        "AI vocational-guidance chatbot for rural Odisha — Odia, Hindi, and English.",
      accentColor: "#4A9D6F",
      accentDim: "rgba(74,157,111,0.07)",
      status: "In Development",
      role: "Creator",
      context: "IB CAS Project",
      metrics: [
        { value: 3, suffix: "", label: "languages" },
      ],
      what: "A trilingual chatbot (Odia primary, Hindi, English) that helps government-school and low-income students in Odisha navigate vocational and career decisions — questions most of them have no one to ask.",
      why: "Rural Odia students face a near-total scarcity of trustworthy career guidance. Most resources are English-first and assume urban contexts that don't apply to their lives.",
      how: "Content is grounded in verified sources rather than freely generated — a deliberate constraint, given the limited accuracy of current LLMs on Odia language and regional context. The chatbot is a structured guide, not a hallucination engine.",
      partners: [] as string[],
    },
  ],

  leadership: [
    {
      id: "crypto-club",
      index: "01",
      title: "Founder",
      org: "Crypto & Bitcoin Club",
      school: "Harrow International School Bengaluru",
      isFirst: true,
      description:
        "Founded the school's first crypto curriculum — a 12-week programme covering DeFi, NFTs, and DAOs. Culminating project: each student designs and deploys their own ERC-20 token.",
      period: "2024 — present",
    },
    {
      id: "harrow-herald",
      index: "02",
      title: "Editor-in-Chief",
      org: "Harrow Herald",
      school: "Harrow International School Bengaluru",
      isFirst: false,
      description:
        "Leads the school magazine — editorial direction, commissioning, editing, and production.",
      period: "2024 — present",
    },
    {
      id: "boarding",
      index: "03",
      title: "Head of Boarding (Boys)",
      org: "Harrow International School Bengaluru",
      school: "Harrow International School Bengaluru",
      isFirst: false,
      description:
        "An appointed leadership role within the school's boarding community.",
      period: "2024 — present",
    },
  ],

  writing: [
    {
      id: "handshake",
      title: "The Handshake",
      type: "Substack",
      description:
        "Writing on crypto, fintech, blockchain, and technology.",
      // TODO: Replace with your actual Substack URL
      url: "TODO_SUBSTACK_URL" as string | null,
      status: "Ongoing",
    },
    {
      id: "jli-essay",
      title: "Should We Fear a Cashless Society?",
      type: "Essay — Economics",
      organisation: "John Locke Institute",
      description:
        "An economics essay exploring the implications of moving toward a fully cashless monetary system.",
      // TODO: Add link if the essay is publicly available
      url: null as string | null,
      status: "Published",
    },
  ],

  about: {
    // TODO: Replace the first paragraph with 1–2 sentences in your own voice
    // about the Cuttack-to-Bengaluru journey or what shaped you.
    paragraphs: [
      "From Cuttack, Odisha, to Bengaluru. TODO: Add 1–2 sentences in your own words about the journey — what it felt like, what it taught you, or what drove the move.",
      "The through-line across most of what I build is access. Better opportunities for students without the right connections (INTRN), better information for students who've never had a career counsellor (Moro Gami), better financial literacy for peers who've heard of Bitcoin but not what's underneath it.",
      "Interested in crypto, fintech, quant finance, AI, and early-stage startups. Probably thinking too much about monetary systems.",
    ],
    interests: [
      "Crypto & DeFi",
      "Fintech",
      "Quant Finance",
      "AI",
      "Startups",
      "Monetary Systems",
    ],
  },

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
