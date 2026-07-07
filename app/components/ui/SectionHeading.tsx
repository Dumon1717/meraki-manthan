import { type ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <Reveal
      className={`flex flex-col ${alignCls} ${align === "center" ? "max-w-2xl" : "max-w-xl"} ${className}`}
    >
      {eyebrow && (
        <span
          className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${
            light ? "text-primary-light" : "text-accent"
          }`}
        >
          <span className={`h-px w-6 ${light ? "bg-primary-light/60" : "bg-accent/60"}`} />
          {eyebrow}
        </span>
      )}
      <h2 className={`h-section font-extrabold ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${light ? "text-white/80" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
