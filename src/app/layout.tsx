import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageProvider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const SITE_URL = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Jamaludin | Full Stack Web Developer",
    template: "%s | Jamaludin",
  },

  description:
    "Portfolio resmi Jamaludin - Full Stack Web Developer.",

  openGraph: {
    title: "Jamaludin | Full Stack Web Developer",
    description: "Portfolio resmi Jamaludin.",
    url: SITE_URL,
    siteName: "Jamaludin Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jamaludin",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jamaludin | Full Stack Web Developer",
    description: "Portfolio resmi Jamaludin.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jamaludin",
  url: SITE_URL,
  jobTitle: "Full Stack Web Developer",
  knowsAbout: [
    "Next.js",
    "Laravel",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />

        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}