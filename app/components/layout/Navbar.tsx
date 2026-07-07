"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/app/data/content";
import { Logo } from "./Logo";
import { Container } from "../ui/Container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-soft backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm"
      }`}
      style={{ minHeight: "var(--nav-h)" }}
    >
      <Container className="flex h-[var(--nav-h)] items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const hasChildren = "children" in item && item.children;
            return (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.92rem] font-semibold transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-ink/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                  {hasChildren && (
                    <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {hasChildren && (
                  <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="w-60 overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-lift">
                      {item.children!.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink/80 transition-colors hover:bg-primary-soft/60 hover:text-primary"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/donate"
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-soft transition-all duration-200 hover:bg-accent-dark hover:shadow-lift sm:inline-flex"
          >
            <Heart className="size-4" fill="currentColor" aria-hidden />
            Donate Now
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-xl text-ink transition-colors hover:bg-primary-soft/60 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 top-[var(--nav-h)] z-40 bg-ink/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-[var(--nav-h)] z-50 h-[calc(100dvh-var(--nav-h))] w-[86%] max-w-sm overflow-y-auto bg-white p-5 shadow-lift lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="flex flex-col gap-1">
                {nav.map((item) => {
                  const hasChildren = "children" in item && item.children;
                  const isOpen = expanded === item.label;
                  return (
                    <li key={item.label} className="border-b border-line/70 last:border-0">
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          className={`flex-1 py-3.5 text-base font-semibold ${
                            isActive(item.href) ? "text-primary" : "text-ink"
                          }`}
                        >
                          {item.label}
                        </Link>
                        {hasChildren && (
                          <button
                            type="button"
                            onClick={() => setExpanded(isOpen ? null : item.label)}
                            className="grid size-10 place-items-center rounded-lg text-muted hover:bg-primary-soft/60"
                            aria-label={`Toggle ${item.label} submenu`}
                            aria-expanded={isOpen}
                          >
                            <ChevronDown
                              className={`size-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                        )}
                      </div>
                      <AnimatePresence initial={false}>
                        {hasChildren && isOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden pl-3"
                          >
                            {item.children!.map((c) => (
                              <li key={c.label}>
                                <Link
                                  href={c.href}
                                  className="block py-2.5 text-[0.95rem] font-medium text-muted hover:text-primary"
                                >
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/donate"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-base font-bold text-white shadow-soft"
              >
                <Heart className="size-5" fill="currentColor" aria-hidden />
                Donate Now
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
