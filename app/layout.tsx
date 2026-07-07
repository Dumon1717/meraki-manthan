import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { org } from "./data/content";
import { TopBar } from "./components/layout/TopBar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

// Base path for static assets referenced outside next/image (e.g. OG image).
// Matches basePath in next.config.ts for the GitHub Pages build.
const BASE_PATH = process.env.GITHUB_PAGES === "true" ? "/meraki-manthan" : "";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://merakimanthan.org"),
  title: {
    default: `${org.nameUpper} — ${org.tagline}`,
    template: `%s · ${org.nameUpper}`,
  },
  description: org.shortAbout,
  keywords: [
    "Meraki Manthan",
    "NGO India",
    "non-profit",
    "education",
    "health",
    "livelihood",
    "women and child welfare",
    "disaster relief",
    "Buxar Bihar",
  ],
  openGraph: {
    title: `${org.nameUpper} — ${org.tagline}`,
    description: org.shortAbout,
    type: "website",
    locale: "en_IN",
    siteName: org.nameUpper,
    images: [{ url: `${BASE_PATH}/images/hero-children.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${org.nameUpper} — ${org.tagline}`,
    description: org.shortAbout,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <TopBar />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
