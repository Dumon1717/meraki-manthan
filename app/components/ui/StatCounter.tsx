"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function formatValue(n: number, raw?: boolean) {
  if (raw) return String(n);
  return n.toLocaleString("en-IN");
}

export function StatCounter({
  value,
  suffix = "",
  label,
  raw = false,
  light = false,
}: {
  value: number;
  suffix?: string;
  label: string;
  raw?: boolean;
  light?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduce]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={`font-display text-4xl font-extrabold tracking-tight sm:text-5xl ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {formatValue(display, raw)}
        <span className={light ? "text-accent" : "text-accent"}>{suffix}</span>
      </div>
      <div
        className={`mt-2 text-sm font-medium ${light ? "text-white/75" : "text-muted"}`}
      >
        {label}
      </div>
    </div>
  );
}
