"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "../ui/Container";
import { org } from "@/app/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-dark">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-children.jpg"
          alt="Smiling children supported by Meraki Manthan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-primary-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-primary-dark/30" />
      </div>

      <Container className="relative z-10 flex min-h-[calc(100dvh-var(--nav-h))] flex-col justify-center py-20">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-white/20 backdrop-blur"
          >
            <Sparkles className="size-3.5 text-accent" />
            A registered non-profit, working across India since {org.foundedYear}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="h-hero mt-6 font-extrabold text-white"
          >
            Empowering communities for a{" "}
            <span className="relative whitespace-nowrap text-accent">
              stronger
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 9C60 3 240 3 298 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85"
          >
            From health and education to livelihoods and disaster relief — we
            work beside the people we serve, turning hope into lasting,
            self-reliant change.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/donate"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-white shadow-lift transition-all hover:bg-accent-dark"
            >
              <Heart className="size-5" fill="currentColor" />
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-bold text-white backdrop-blur transition-all hover:bg-white hover:text-ink"
            >
              Get Involved
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-2 text-sm text-white/70"
          >
            <ShieldCheck className="size-4 text-primary-light" />
            {org.registration}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block h-2 w-1 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
