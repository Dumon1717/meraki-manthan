"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/app/data/content";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display font-bold text-ink">{f.q}</span>
              <ChevronDown
                className={`size-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 leading-relaxed text-muted">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
