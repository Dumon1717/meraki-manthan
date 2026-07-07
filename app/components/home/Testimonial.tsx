import { Quote } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Monogram } from "../ui/Monogram";
import { testimonial } from "@/app/data/content";

export function Testimonial() {
  return (
    <section className="py-20 md:py-28">
      <Container size="narrow">
        <Reveal className="relative rounded-3xl bg-primary px-8 py-12 text-center shadow-lift sm:px-14 sm:py-16">
          <Quote className="mx-auto size-12 text-accent" fill="currentColor" />
          <blockquote className="mt-6 font-display text-xl font-semibold leading-relaxed text-white sm:text-2xl">
            “{testimonial.quote}”
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Monogram name={testimonial.name} index={0} className="size-14 text-lg" />
            <div className="text-left">
              <div className="font-display font-bold text-white">{testimonial.name}</div>
              <div className="text-sm text-white/70">{testimonial.role}</div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
