export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <p
        className="text-sm"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}
      >
        Designed &amp; Built by{" "}
        <a
          href="https://github.com/JBFaner"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:underline underline-offset-4"
          style={{ color: "var(--accent-light)" }}
        >
          John Benedict Faner
        </a>{" "}
        · {new Date().getFullYear()}
      </p>
      <p className="text-xs mt-1" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
        Built with Next.js · Tailwind CSS v4 · Framer Motion
      </p>
    </footer>
  );
}
