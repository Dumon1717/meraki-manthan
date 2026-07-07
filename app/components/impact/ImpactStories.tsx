"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { stories } from "@/app/data/content";

const filters = ["All", ...Array.from(new Set(stories.map((s) => s.program)))];

export function ImpactStories() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? stories : stories.filter((s) => s.program === active)),
    [active],
  );

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === f
                ? "bg-primary text-white shadow-soft"
                : "border border-line bg-white text-ink/70 hover:border-primary/30 hover:text-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((s) => (
            <motion.article
              key={s.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-line"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur">
                  {s.program}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
