import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "../ui/Container";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-primary-light/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-1/3 size-80 rounded-full bg-accent/10 blur-3xl" />

      <Container className="relative">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-white/60">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="size-4" />
          <span className="font-medium text-white">{crumb}</span>
        </nav>

        {eyebrow && (
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-6 bg-accent/60" />
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
