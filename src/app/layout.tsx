import { CursorGlow, ScrollProgress } from "@/components/motion-primitives";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { DATA } from "@/data/resume";
import { absoluteUrl, SITE_PROFILE, SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f5ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0d12" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${DATA.name} — Mobile Developer`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Khafidz Maulana",
    "Mobile Developer",
    "Flutter Developer",
    "Dart",
    "Indonesia",
    "Offline-first mobile apps",
  ],
  authors: [{ name: DATA.name, url: absoluteUrl("/") }],
  creator: DATA.name,
  category: "technology",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: `${DATA.name} — ${DATA.role}`,
    description: DATA.description,
    url: absoluteUrl("/"),
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: absoluteUrl("/og-image.png"),
        width: 1200,
        height: 630,
        alt: `${DATA.name}, ${DATA.role} specializing in ${DATA.specialty}`,
      },
    ],
  },
  twitter: {
    title: `${DATA.name} — ${DATA.role}`,
    description: DATA.description,
    card: "summary_large_image",
    images: [absoluteUrl("/og-image.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const socials = Object.values(DATA.contact.social).map((social) => ({
    name: social.name,
    url: social.url,
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${absoluteUrl("/")}#person`,
        name: DATA.name,
        url: absoluteUrl("/"),
        image: absoluteUrl(DATA.avatarUrl),
        jobTitle: SITE_PROFILE.role,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tangerang",
          addressRegion: "Banten",
          addressCountry: "ID",
        },
        sameAs: [
          DATA.contact.social.GitHub.url,
          DATA.contact.social.LinkedIn.url,
        ],
        knowsAbout: [
          "Flutter",
          "Dart",
          "Mobile application development",
          "Offline-first applications",
          "Riverpod",
          "BLoC",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        url: absoluteUrl("/"),
        name: `${DATA.name} — ${DATA.role}`,
        description: DATA.description,
        author: { "@id": `${absoluteUrl("/")}#person` },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground",
          fontSans.variable,
          fontDisplay.variable,
        )}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
            }}
          />
          <ScrollProgress className="bg-signal" />
          <CursorGlow color="hsl(var(--signal) / 0.14)" />
          <Navbar name={DATA.name} items={DATA.navbar} socials={socials} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
