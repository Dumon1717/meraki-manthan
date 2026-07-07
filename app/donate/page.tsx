import type { Metadata } from "next";
import { HeartHandshake, GraduationCap, Stethoscope, LifeBuoy, QrCode } from "lucide-react";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/shared/PageHero";
import { DonateWidget } from "../components/forms/DonateWidget";
import { Reveal } from "../components/ui/Reveal";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Meraki Manthan with a one-time or monthly gift. Every rupee funds education, health, livelihoods and relief across India.",
};

const reasons = [
  { icon: GraduationCap, title: "Education", text: "Keep a child in school with books, meals and mentorship." },
  { icon: Stethoscope, title: "Health", text: "Fund doorstep camps that catch illness early." },
  { icon: HeartHandshake, title: "Livelihood", text: "Help a family learn a skill and earn with dignity." },
  { icon: LifeBuoy, title: "Relief", text: "Rush essentials to families in crisis within hours." },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        crumb="Donate"
        eyebrow="Donate"
        title="Turn your generosity into real, lasting change"
        subtitle="Choose an amount, pick one-time or monthly, and see exactly what your gift makes possible."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            {/* Left: why donate */}
            <div>
              <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                Your gift, at work
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Meraki Manthan is a registered society. Contributions go directly into
                programmes on the ground — no gesture is too small to matter.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {reasons.map((r, i) => (
                  <Reveal key={r.title} delay={i * 0.06}>
                    <div className="flex h-full gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                        <r.icon className="size-5" strokeWidth={1.8} />
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-ink">{r.title}</h3>
                        <p className="text-sm text-muted">{r.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* UPI block */}
              <div className="mt-8 flex items-center gap-5 rounded-2xl border border-line bg-cream p-5">
                <div className="grid size-20 shrink-0 place-items-center rounded-xl bg-white text-muted shadow-soft">
                  <QrCode className="size-12" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink">Prefer UPI?</h3>
                  <p className="text-sm text-muted">
                    Scan the QR or pay to{" "}
                    <span className="font-semibold text-primary">merakimanthan@upi</span>
                    {/* TODO: replace with real UPI ID & QR image */}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: donation widget */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <DonateWidget />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
