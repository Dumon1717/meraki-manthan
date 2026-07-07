import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";
import { approach } from "@/app/data/content";

export function Approach() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary-light/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-accent/10 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Our approach"
          title="How lasting change takes root"
          subtitle="A simple, repeatable cycle that moves a community from awareness all the way to self-reliance."
        />

        <div className="relative mt-16">
          {/* connector line (desktop) */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/15 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {approach.map((a, i) => (
              <Reveal key={a.step} delay={i * 0.1} className="relative flex gap-5 lg:flex-col lg:gap-0">
                {/* Icon node */}
                <div className="relative z-10 flex shrink-0 flex-col items-center lg:items-start">
                  <div className="grid size-16 place-items-center rounded-2xl bg-accent text-white shadow-lift">
                    <Icon name={a.icon} className="size-8" strokeWidth={1.8} />
                  </div>
                </div>

                <div className="lg:mt-6">
                  <div className="font-display text-sm font-bold text-primary-light">
                    STEP {a.step}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {a.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
