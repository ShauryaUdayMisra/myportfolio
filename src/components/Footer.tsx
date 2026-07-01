import { content } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border py-8 px-6 md:px-10 max-w-site mx-auto w-full"
      aria-label="Footer"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="font-display italic text-ink-3 text-lg">
          {content.meta.name}
        </span>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <span className="font-mono text-2xs text-ink-4 tracking-wider">
            {content.footer.note}
          </span>
          <span className="font-mono text-2xs text-ink-4 tracking-wider">
            © {year}
          </span>
          <a
            href={`mailto:${content.contact.email}`}
            className="font-mono text-2xs text-ink-4 tracking-wider hover:text-accent transition-colors duration-200"
          >
            {content.contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
