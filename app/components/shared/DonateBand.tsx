import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function DonateBand() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-accent-gradient px-8 py-14 shadow-lift sm:px-14">
          {/* decorative circles */}
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 size-64 rounded-full bg-white/10" />

          <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                Your contribution changes lives
              </h2>
              <p className="mt-3 text-lg text-white/90">
                Give once or give monthly — either way, you fund real work on the
                ground: a classroom, a health camp, a fresh start.
              </p>

              {/* One-time / Monthly preview */}
              <div className="mt-6 inline-flex items-center gap-1 rounded-full bg-white/20 p-1 text-sm font-semibold text-white">
                <span className="rounded-full bg-white px-4 py-1.5 text-accent-dark">
                  One-time
                </span>
                <span className="px-4 py-1.5">Monthly</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/donate"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-accent-dark shadow-lift transition-transform hover:-translate-y-0.5"
              >
                <Heart className="size-5" fill="currentColor" />
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                Other ways to help
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
