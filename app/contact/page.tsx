import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { SocialIcon } from "../components/ui/SocialIcon";
import { PageHero } from "../components/shared/PageHero";
import { ContactForm } from "../components/forms/ContactForm";
import { FaqAccordion } from "../components/ui/FaqAccordion";
import { org } from "../data/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Meraki Manthan — our registered office is in Buxar, Bihar. Reach out to volunteer, partner or ask a question.",
};

const details = [
  { icon: MapPin, label: "Registered office", value: `${org.address.line1}, ${org.address.line2}` },
  { icon: Phone, label: "Phone", value: org.phone, href: `tel:${org.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: org.email, href: `mailto:${org.email}` },
  { icon: Clock, label: "Office hours", value: org.hours },
];

// Link out to Google Maps (self-contained, no embed dependency)
const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Buxar%2CBihar%2C802103";

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact us"
        title="We'd love to hear from you"
        subtitle="Questions, ideas, partnerships or just a hello — reach out and our team will respond."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <Reveal>
              <ContactForm />
            </Reveal>

            {/* Details */}
            <div>
              <SectionHeading align="left" eyebrow="Reach us" title="Contact details" />
              <div className="mt-8 space-y-5">
                {details.map((d, i) => (
                  <Reveal key={d.label} delay={i * 0.06} className="flex items-start gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                      <d.icon className="size-6" strokeWidth={1.8} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-muted">{d.label}</div>
                      {d.href ? (
                        <a href={d.href} className="font-medium text-ink hover:text-primary">
                          {d.value}
                        </a>
                      ) : (
                        <div className="font-medium text-ink">{d.value}</div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Socials */}
              <div className="mt-8">
                <div className="mb-3 text-sm font-semibold text-muted">Follow us</div>
                <div className="flex items-center gap-2">
                  {org.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="grid size-11 place-items-center rounded-full bg-primary-soft text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      <SocialIcon name={s.icon} className="size-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map card */}
              <a
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className="group relative mt-8 block h-64 overflow-hidden rounded-3xl border border-line shadow-soft"
              >
                <div className="absolute inset-0 bg-grid bg-primary-soft/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent" />
                {/* pin */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="relative flex size-14 items-center justify-center">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/40" />
                    <span className="relative grid size-14 place-items-center rounded-full bg-accent text-white shadow-lift">
                      <MapPin className="size-7" />
                    </span>
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/95 px-4 py-3 shadow-soft backdrop-blur">
                  <div>
                    <div className="text-sm font-bold text-ink">{org.nameUpper}</div>
                    <div className="text-xs text-muted">{org.address.line2}</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5">
                    Directions <ExternalLink className="size-4" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-12">
            <FaqAccordion />
          </div>
        </Container>
      </section>
    </>
  );
}
