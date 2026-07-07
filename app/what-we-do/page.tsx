import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { Icon } from "../components/ui/Icon";
import { Button } from "../components/ui/Button";
import { PageHero } from "../components/shared/PageHero";
import { DonateBand } from "../components/shared/DonateBand";
import { primaryPrograms, secondaryPrograms } from "../data/content";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Meraki Manthan works across ten focus areas — health, education, livelihood, women & child, disaster relief, environment and more — for communities across India.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        crumb="What We Do"
        eyebrow="Our programmes"
        title="Ten focus areas, woven into one mission"
        subtitle="From a child's first classroom to a village's climate resilience, our work spans the whole arc of community life."
      />

      {/* Primary programs — alternating blocks */}
      <div className="divide-y divide-line">
        {primaryPrograms.map((p, i) => (
          <section key={p.id} id={p.slug} className="py-16 md:py-24">
            <Container>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Image */}
                <Reveal className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
                    <Image
                      src={p.image!}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {/* glance stats */}
                  {p.glance && (
                    <div className="absolute -bottom-6 left-6 right-6 flex justify-around gap-3 rounded-2xl bg-white p-4 shadow-lift ring-1 ring-line sm:left-8 sm:right-auto sm:gap-8 sm:pr-10">
                      {p.glance.map((g) => (
                        <div key={g.label} className="text-center">
                          <div className="font-display text-2xl font-extrabold text-primary">{g.value}</div>
                          <div className="text-xs text-muted">{g.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </Reveal>

                {/* Text */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <Icon name={p.icon} className="size-7" />
                  </span>
                  <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-accent">
                    {p.tag}
                  </span>
                  <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">{p.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted">{p.summary}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {p.activities.map((a) => (
                      <li key={a} className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-ink/80">{a}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href="/donate" variant="primary" withArrow>
                      Support this work
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      {/* Secondary focus areas */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="And more"
            title="Four more ways we serve"
            subtitle="Beyond our core programmes, Meraki Manthan invests in culture, research, justice and grassroots development."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {secondaryPrograms.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.08} id={p.slug}>
                <div className="flex h-full gap-5 rounded-3xl border border-line bg-white p-7 shadow-soft">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent-dark">
                    <Icon name={p.icon} className="size-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <DonateBand />
    </>
  );
}
