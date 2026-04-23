interface TechBadgeProps {
  label: string;
  size?: "sm" | "md";
}

export default function TechBadge({ label, size = "sm" }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium border ${
        size === "sm"
          ? "px-2.5 py-0.5 text-xs"
          : "px-3 py-1 text-sm"
      }`}
      style={{
        background: "rgba(124, 58, 237, 0.12)",
        borderColor: "rgba(124, 58, 237, 0.3)",
        color: "var(--accent-light)",
        fontFamily: "var(--font-jetbrains)",
      }}
    >
      {label}
    </span>
  );
}
