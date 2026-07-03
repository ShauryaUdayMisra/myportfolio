import { content, isLiveUrl } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = content.contact.links.filter((link) => isLiveUrl(link.href));

  return (
    <footer
      className="border-t border-border py-8 px-6 md:px-10 max-w-site mx-auto w-full"
      aria-label="Footer"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <a
          href={`mailto:${content.contact.email}`}
          className="font-mono text-2xs text-ink-3 tracking-wider hover:text-accent transition-colors duration-200"
        >
          {content.contact.email}
        </a>

        <ul className="flex flex-wrap items-center gap-5 list-none" role="list">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                {...(link.download ? { download: true } : {})}
                className="font-mono text-2xs text-ink-4 tracking-wider uppercase hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-4 mt-6">
        <span className="font-mono text-2xs text-ink-4 tracking-wider">
          {content.footer.note}
        </span>
        <span className="font-mono text-2xs text-ink-4 tracking-wider">
          © {year} {content.meta.name}
        </span>
      </div>
    </footer>
  );
}
