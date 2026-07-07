"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

const tags = {
  div: motion.div,
  li: motion.li,
  span: motion.span,
} as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 22,
  as = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "span";
  id?: string;
}) {
  const reduce = useReducedMotion();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = tags[as] as any;

  return (
    <MotionTag
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
