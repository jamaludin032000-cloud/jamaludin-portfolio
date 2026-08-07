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

// URL website portfolio
const SITE_URL = "https://jamaludin-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Jamaludin | Full Stack Web Developer",
    template: "%s | Jamaludin",
  },

  description:
    "Portfolio resmi Jamaludin - Full Stack Web Developer yang membangun website dan aplikasi web modern, responsif, dan scalable.",

  keywords: [
    "Jamaludin",
    "Full Stack Web Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "Laravel",
    "CodeIgniter",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "PHP",
    "Portfolio",
  ],

  authors: [
    {
      name: "Jamaludin",
      url: SITE_URL,
    },
  ],

  creator: "Jamaludin",
  publisher: "Jamaludin",

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Jamaludin | Full Stack Web Developer",

    description:
      "Portfolio resmi Jamaludin - Full Stack Web Developer.",

    url: SITE_URL,

    siteName: "Jamaludin Portfolio",

    locale: "id_ID",

    type: "website",

    images: [
      {
        url: "/images/Logo.png",
        width: 1200,
        height: 630,
        alt: "Jamaludin | Full Stack Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Jamaludin | Full Stack Web Developer",

    description:
      "Portfolio resmi Jamaludin - Full Stack Web Developer.",

    images: ["/images/Logo.png"],
  },

  icons: {
    icon: "/images/Logo.png",
    shortcut: "/images/Logo.png",
    apple: "/images/Logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Jamaludin",

  url: SITE_URL,

  jobTitle: "Full Stack Web Developer",

  description:
    "Jamaludin adalah Full Stack Web Developer yang membangun website dan aplikasi web modern.",

  knowsAbout: [
    "Next.js",
    "React",
    "Laravel",
    "CodeIgniter",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Python",
    "PHP",
    "PostgreSQL",
    "Node.js",
  ],

  sameAs: [
    "https://github.com/jamaludin032000-cloud",
    "https://www.linkedin.com/in/jamal-udin-6aa5b3335/",
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
      <body className="bg-[#0A0A0F] font-sans text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />

        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}