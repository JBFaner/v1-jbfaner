interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <p
        style={{ color: "var(--accent-light)", fontFamily: "var(--font-jetbrains)" }}
        className="text-sm font-medium tracking-widest uppercase mb-2"
      >
        {number} &mdash; {title}
      </p>
      <div className="flex items-center gap-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
          {title}
        </h2>
        <div
          className="hidden sm:block flex-1 h-px"
          style={{ background: "var(--border)" }}
        />
      </div>
      {subtitle && (
        <p className="mt-3 text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
