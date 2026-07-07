import type { Metadata } from "next";
import { Heart, IndianRupee, Package } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { Icon } from "../components/ui/Icon";
import { PageHero } from "../components/shared/PageHero";
import { VolunteerForm } from "../components/forms/VolunteerForm";
import { involvement } from "../data/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, donate, partner or fundraise with Meraki Manthan. Every hand and every rupee helps build a stronger India.",
};

const ways = [
  { icon: Heart, title: "Give monthly", text: "A small recurring gift funds steady, predictable programmes." },
  { icon: IndianRupee, title: "One-time donation", text: "Support a specific campaign — education, health or relief." },
  { icon: Package, title: "In-kind support", text: "Books, supplies and equipment are always welcome." },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        crumb="Get Involved"
        eyebrow="Get involved"
        title="Be the churn that creates change"
        subtitle="Whether you have an hour, a skill or a rupee to spare — there is a place for you at Meraki Manthan."
      />

      {/* Involvement cards */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Ways to help" title="Choose how you'd like to make a difference" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {involvement.map((v, i) => (
              <Reveal key={v.id} delay={(i % 3) * 0.08} id={v.id}>
                <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid size-14 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon name={v.icon} className="size-7" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Volunteer form + ways to give */}
      <section id="volunteer" className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Volunteer"
                title="Lend your time and skills"
                subtitle="Fill in the form and we'll match you with an opportunity that fits your interests and availability."
              />
              <div className="mt-8 space-y-5">
                {ways.map((w, i) => (
                  <Reveal key={w.title} delay={i * 0.06} className="flex items-start gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white text-primary shadow-soft">
                      <w.icon className="size-6" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-ink">{w.title}</h4>
                      <p className="text-sm text-muted">{w.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal>
              <VolunteerForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
