import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { partners } from "@/app/data/content";

export function Partners() {
  return (
    <section className="border-y border-line bg-cream py-14">
      <Container>
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Working hand in hand with
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map((p, i) => (
            <Reveal
              key={p}
              delay={i * 0.05}
              className="font-display text-lg font-bold text-ink/35 grayscale transition-all duration-300 hover:text-primary hover:grayscale-0 sm:text-xl"
            >
              {p}
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted/70">
          {/* TODO: replace with real partner logos */}
          Placeholder partners — logos to be added
        </p>
      </Container>
    </section>
  );
}
