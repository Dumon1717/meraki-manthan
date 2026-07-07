import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, HeartHandshake, Check, ShieldCheck, FileText, Download } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { Monogram } from "../components/ui/Monogram";
import { Button } from "../components/ui/Button";
import { PageHero } from "../components/shared/PageHero";
import { DonateBand } from "../components/shared/DonateBand";
import { org, leaders } from "../data/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meraki Manthan is a registered non-profit society founded in 2020 in Buxar, Bihar, working across India for health, education, livelihoods and dignity.",
};

const values = [
  {
    icon: Eye,
    title: "Our Vision",
    text: "An India where every community — rural or urban — lives with health, opportunity, dignity and self-reliance.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "To empower underserved communities through health, education, livelihoods and social justice, working shoulder to shoulder with the people we serve.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    text: "Compassion, transparency, inclusion and grassroots partnership guide every programme we run.",
  },
];

const timeline = [
  { year: "2020", title: "Meraki Manthan is born", text: "Founded in Buxar, Bihar and registered under the Societies Registration Act, 1860." },
  { year: "2021", title: "First programmes on ground", text: "Launched health camps and remedial learning centres in nearby villages." },
  { year: "2023", title: "Reaching more states", text: "Expanded livelihood and women & child initiatives beyond Bihar." },
  { year: "Today", title: "A growing movement", text: "Ten focus areas, thousands of lives touched, and a vision that spans all of India." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="About us"
        title="A churning of ideas, effort and hope"
        subtitle={org.shortAbout}
      />

      {/* Our story */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
                <Image
                  src="/images/kids-monument.jpg"
                  alt="Children in a community supported by Meraki Manthan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                align="left"
                eyebrow="Our story"
                title="Built patiently, beside the community"
              />
              <Reveal delay={0.05}>
                <p className="mt-5 leading-relaxed text-muted">
                  The name says it all. <strong className="text-ink">Meraki</strong> — to
                  do something with soul, creativity and love. <strong className="text-ink">Manthan</strong> —
                  the churning of ideas and effort until something valuable rises to the top.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 leading-relaxed text-muted">
                  Founded in {org.foundedYear} in {org.address.line2.split("–")[0].trim()}, we began with
                  a simple conviction: lasting change is never handed down — it is built
                  together, one family and one village at a time. From that first health camp
                  and learning centre, Meraki Manthan has grown into a pan-India effort across
                  ten focus areas.
                </p>
              </Reveal>
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
                {[
                  ["Registered", "Society, 1860 Act"],
                  ["Founded", String(org.foundedYear)],
                  ["Reach", org.areaOfOperation],
                ].map(([k, v]) => (
                  <Reveal key={k}>
                    <div className="text-2xl font-extrabold text-primary">{v}</div>
                    <div className="text-xs font-medium uppercase tracking-wide text-muted">{k}</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision / Mission / Values */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="What drives us"
            title="Vision, mission & values"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-line bg-white p-8 shadow-soft">
                  <span className="grid size-14 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <v.icon className="size-7" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Our journey" title="From one village to all of India" />
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 h-full w-px bg-line md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <Reveal
                  key={t.year}
                  delay={i * 0.06}
                  className={`relative flex gap-6 md:w-1/2 ${
                    i % 2 === 0 ? "md:ml-0 md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div
                    className={`absolute left-4 top-1.5 z-10 grid size-8 -translate-x-1/2 place-items-center rounded-full bg-primary text-xs font-bold text-white ring-4 ring-white md:left-auto ${
                      i % 2 === 0 ? "md:-right-4 md:left-auto md:translate-x-1/2" : "md:-left-4 md:-translate-x-1/2"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div className="ml-10 md:ml-0">
                    <span className="font-display text-lg font-extrabold text-accent">{t.year}</span>
                    <h3 className="mt-1 font-display text-xl font-bold text-ink">{t.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our people"
            title="Meet the governing body"
            subtitle="A small, committed team stewarding Meraki Manthan with transparency and heart."
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-line bg-white p-7 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                  <Monogram name={l.name} index={i} className="mx-auto size-20 text-2xl" />
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{l.name}</h3>
                  <p className="text-sm font-semibold text-accent">{l.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{l.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Transparency */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal className="flex flex-col items-center gap-8 rounded-3xl border border-line bg-white p-8 shadow-soft sm:p-12 lg:flex-row lg:justify-between">
            <div className="flex items-start gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                <ShieldCheck className="size-7" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">Transparency & trust</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-muted">
                  {org.registration}. We are committed to publishing our financials and
                  impact reports. {/* TODO: add 80G/12A numbers and annual report link */}
                  80G & 12A details and annual reports will be available here.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="#" variant="outline">
                <FileText className="size-4" /> Annual report
              </Button>
              <Button href="#" variant="ghost">
                <Download className="size-4" /> Financials
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <DonateBand />
    </>
  );
}
