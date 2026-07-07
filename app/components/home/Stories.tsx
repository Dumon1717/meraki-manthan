"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { stories } from "@/app/data/content";

export function Stories() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 380);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              <span className="h-px w-6 bg-accent/60" />
              Stories of change
            </span>
            <h2 className="h-section mt-3 font-extrabold text-ink">
              Real people, real progress
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous stories"
              className="grid size-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-primary hover:text-white"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next stories"
              className="grid size-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-primary hover:text-white"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        >
          {stories.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 0.06}
              className="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 46vw, 31vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur">
                    {s.program}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {s.excerpt}
                  </p>
                  <Link
                    href="/impact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5"
                  >
                    Read full story
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
