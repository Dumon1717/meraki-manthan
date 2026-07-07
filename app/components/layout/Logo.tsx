import Link from "next/link";
import { Sprout } from "lucide-react";

export function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Meraki Manthan — home"
    >
      <span className="grid size-10 place-items-center rounded-xl bg-brand-gradient text-white shadow-soft transition-transform duration-200 group-hover:-rotate-6">
        <Sprout className="size-5" strokeWidth={2} aria-hidden />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          Meraki<span className="text-accent">Manthan</span>
        </span>
        <span
          className={`text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${
            light ? "text-white/60" : "text-muted"
          }`}
        >
          NGO · Since 2020
        </span>
      </span>
    </Link>
  );
}
