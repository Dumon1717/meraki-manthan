import type { Metadata } from "next";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { StatCounter } from "../components/ui/StatCounter";
import { Reveal } from "../components/ui/Reveal";
import { PageHero } from "../components/shared/PageHero";
import { DonateBand } from "../components/shared/DonateBand";
import { ImpactStories } from "../components/impact/ImpactStories";
import { stats } from "../data/content";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "See the difference Meraki Manthan is making — lives touched, villages reached, and stories of real change across India.",
};

// TODO: replace with verified figures
const byNumbers = [
  { label: "Children in learning programmes", value: 78 },
  { label: "Families reached by health camps", value: 65 },
  { label: "Women completing skill training", value: 82 },
  { label: "Relief kits delivered on time", value: 91 },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        crumb="Impact"
        eyebrow="Our impact"
        title="Change you can measure — and feel"
        subtitle="Behind every number is a person: a child back in school, a family that got care in time, a woman earning with pride."
      />

      {/* Counters */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} raw={s.raw} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Stories with filter */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Stories of change"
            title="Filter by the work that moves you"
          />
          <div className="mt-12">
            <ImpactStories />
          </div>
        </Container>
      </section>

      {/* By the numbers — progress bars */}
      <section className="py-20 md:py-28">
        <Container size="narrow">
          <SectionHeading
            eyebrow="By the numbers"
            title="Outcomes that hold us accountable"
            subtitle="Indicative programme results. Figures are placeholders pending our next impact audit."
          />
          <div className="mt-12 space-y-7">
            {byNumbers.map((b, i) => (
              <Reveal key={b.label} delay={i * 0.06}>
                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="font-medium text-ink">{b.label}</span>
                    <span className="font-display font-bold text-primary">{b.value}%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full rounded-full bg-brand-gradient transition-all"
                      style={{ width: `${b.value}%` }}
                    />
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
