import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";
import { primaryPrograms } from "@/app/data/content";

export function Programs() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Six focus areas, one goal — dignity"
          subtitle="We work across the lifecycle of a community, so progress in one area lifts the others."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {primaryPrograms.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <Link
                href={`/what-we-do#${p.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lift"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon name={p.icon} className="size-7" />
                </span>
                <span className="mt-5 text-xs font-bold uppercase tracking-wider text-accent">
                  {p.tag}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {p.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
