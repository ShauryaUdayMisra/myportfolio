interface SectionHeaderProps {
  index: string;
  label: string;
  className?: string;
}

export default function SectionHeader({ index, label, className = "" }: SectionHeaderProps) {
  return (
    <div className={`section-index mb-10 md:mb-14 ${className}`} aria-hidden="true">
      <span className="text-ink-4">{index}</span>
      <span className="text-ink-4 tracking-[0.2em]">—</span>
      <span className="tracking-[0.14em]">{label.toUpperCase()}</span>
    </div>
  );
}
