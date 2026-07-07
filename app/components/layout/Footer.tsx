import Link from "next/link";
import { MapPin, Phone, Mail, Clock, QrCode, Heart } from "lucide-react";
import { org, primaryPrograms, involvement } from "@/app/data/content";
import { Logo } from "./Logo";
import { SocialIcon } from "../ui/SocialIcon";
import { Container } from "../ui/Container";
import { NewsletterForm } from "../ui/NewsletterForm";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white/70">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <Container className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <div className="max-w-md">
            <h3 className="font-display text-xl font-bold text-white">
              Stay close to the change
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Get stories, updates and ways to help — straight to your inbox.
            </p>
          </div>
          <div className="w-full max-w-md">
            <NewsletterForm variant="footer" />
          </div>
        </Container>
      </div>

      <Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-3 lg:grid-cols-5">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {org.shortAbout}
          </p>
          <div className="mt-5 flex items-center gap-2">
            {org.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid size-9 place-items-center rounded-full bg-white/10 transition-colors hover:bg-accent"
              >
                <SocialIcon name={s.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
            Programs
          </h4>
          <ul className="space-y-2.5 text-sm">
            {primaryPrograms.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/what-we-do#${p.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get involved */}
        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
            Get Involved
          </h4>
          <ul className="space-y-2.5 text-sm">
            {involvement.map((i) => (
              <li key={i.id}>
                <Link
                  href={`/get-involved#${i.id}`}
                  className="transition-colors hover:text-accent"
                >
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + UPI */}
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
            Reach Us
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                {org.address.line1}
                <br />
                {org.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 shrink-0 text-accent" />
              <a href={`tel:${org.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                {org.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 shrink-0 text-accent" />
              <a href={`mailto:${org.email}`} className="hover:text-accent">
                {org.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="size-4 shrink-0 text-accent" />
              <span>{org.hours}</span>
            </li>
          </ul>

          {/* UPI / QR donate mini-block (placeholder) */}
          <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
            <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-white/10 text-white/50">
              <QrCode className="size-8" />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-white">Donate via UPI</p>
              <p className="text-white/50">
                {/* TODO: add real UPI ID / QR */}
                merakimanthan@upi
              </p>
              <Link
                href="/donate"
                className="mt-1 inline-flex items-center gap-1 font-semibold text-accent hover:underline"
              >
                <Heart className="size-3" fill="currentColor" /> Give now
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {org.foundedYear === 2020 ? "2026" : org.foundedYear} {org.nameUpper}. {org.registration}.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
