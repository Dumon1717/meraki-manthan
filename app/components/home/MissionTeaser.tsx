import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { org } from "@/app/data/content";

const pillars = [
  "Dignity and self-reliance at the centre of everything",
  "Programmes designed with — not just for — communities",
  "Transparent, accountable and rooted in Bihar, reaching all India",
];

export function MissionTeaser() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image collage */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lift sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/classroom-community.jpg"
                alt="Meraki Manthan volunteers meeting a family during a community outreach survey"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden w-44 overflow-hidden rounded-2xl shadow-lift ring-4 ring-cream sm:block">
              <Image
                src="/images/kids-peace.jpg"
                alt="A mother and her children in a village Meraki Manthan works with"
                width={320}
                height={240}
                className="h-32 w-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -left-4 top-6 rounded-2xl bg-white p-4 shadow-lift ring-1 ring-line">
              <div className="font-display text-3xl font-extrabold text-primary">
                {new Date().getFullYear() - org.foundedYear}+
              </div>
              <div className="text-xs font-medium text-muted">years of service</div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <SectionEyebrow>Who we are</SectionEyebrow>
            <Reveal>
              <h2 className="h-section mt-3 font-extrabold text-ink">
                A churning of ideas, effort and hope
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {org.shortAbout}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 leading-relaxed text-muted">
                Founded in {org.foundedYear} and registered under the Societies
                Registration Act of 1860, Meraki Manthan grew from a simple
                belief — that real change is built patiently, hand in hand with
                the community.
              </p>
            </Reveal>

            <ul className="mt-7 space-y-3">
              {pillars.map((p, i) => (
                <Reveal as="li" key={p} delay={0.12 + i * 0.06} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-ink/80">{p}</span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.3}>
              <div className="mt-9">
                <Button href="/about" variant="primary" size="lg" withArrow>
                  Read our story
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
      <span className="h-px w-6 bg-accent/60" />
      {children}
    </span>
  );
}
