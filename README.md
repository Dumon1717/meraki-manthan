# MERAKI MANTHAN — NGO Website

A fully responsive, multi-page website for **Meraki Manthan**, a registered non-profit society working across India. Built with Next.js (App Router), React, TypeScript, Tailwind CSS v4 and Framer Motion.

## ✨ Features

- **7 pages** — Home, About, What We Do, Impact, Get Involved, Donate, Contact
- Fully **responsive** (mobile-first, no horizontal scroll at any width)
- **Accessible** — semantic landmarks, keyboard-navigable menu/drawer/accordion, focus rings, skip link, AA contrast
- Sticky navbar with dropdowns + working **mobile drawer**
- Animated **stat counters**, scroll reveals (respects `prefers-reduced-motion`)
- Interactive **donation widget**, **volunteer** & **contact** forms (client-side validation, demo success states)
- Filterable **impact stories**, **stories carousel**, **FAQ accordion**
- SEO metadata + Open Graph per route
- All imagery is **local** (`/public/images`) — no runtime network dependency

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build & run production:

```bash
npm run build
npm start
```

## 🗂️ Project structure

```
app/
  data/content.ts        ← ALL site content lives here (edit this first)
  components/
    ui/                  ← Button, Container, SectionHeading, StatCounter, Icon, SocialIcon, Reveal, …
    layout/              ← TopBar, Navbar, Footer, Logo
    home/                ← Hero, StatBand, CampaignCards, Programs, Approach, Stories, …
    shared/              ← PageHero, DonateBand
    forms/               ← DonateWidget, VolunteerForm, ContactForm
  <route>/page.tsx       ← one folder per page
public/images/           ← local placeholder photography
```

## 🎨 Design system

Defined as Tailwind v4 theme tokens in `app/globals.css`:

| Token | Value | Use |
|-------|-------|-----|
| `primary` | `#0F766E` | brand teal-green |
| `accent` | `#F97316` | CTAs, highlights (saffron) |
| `ink` / `muted` | `#0B1F2A` / `#5B6B74` | text |
| `cream` | `#F7F8F6` | section backgrounds |

Fonts: **Plus Jakarta Sans** (headings) + **Inter** (body) via `next/font`.

## ✅ What to replace before launch

All placeholders are marked with `// TODO` in the code. The important ones:

- [ ] **Contact details** — phone, email (`app/data/content.ts` → `org`)
- [ ] **Official tagline** — currently a suggestion
- [ ] **Social media links** — currently `#`
- [ ] **UPI ID + QR image** and **80G / 12A** registration numbers
- [ ] **Impact stats** (`stats`, program `glance`, impact `byNumbers`) — currently indicative placeholders
- [ ] **Stories** text & photos (`stories`)
- [ ] **Leadership bios** (`leaders`) — names & roles are real (President Anuradha Maurya, Secretary Shashikesh Raj, Treasurer Sushant); bios are placeholder
- [ ] **Partner logos** (`partners`)
- [ ] **Photography** in `public/images/` — swap for Meraki Manthan's own photos (keep the same filenames for a drop-in replacement)
- [ ] Wire forms & donation to a real backend / payment gateway (Razorpay / UPI) and mailing service
- [ ] Fill in **Privacy Policy** and **Terms** pages (footer links)

## 📸 Image credits

Placeholder photography is from [Unsplash](https://unsplash.com) (free to use). Replace with the organisation's own images before going live.

---

Registered under the Societies Registration Act, 21 of 1860 · Gajadhar Ganj, Buxar, Bihar – 802103
