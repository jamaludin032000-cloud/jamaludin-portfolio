"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageProvider";

const navigation = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Education", href: "#education" },
  { title: "Certificates", href: "#certificates" },
  { title: "Contact", href: "#contact" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/jamaludin032000-cloud",
    icon: (
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.93 10.93 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    ),
  },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jamal-udin-6aa5b3335/",
    icon: (
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.28ZM5.32 7.42a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.56V8.98H3.54v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
    ),
  },

  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },

  {
    name: "WhatsApp",
    href: "https://wa.me/6285848891447",
    icon: (
      <path d="M20.52 3.48A11.84 11.84 0 0 0 12.06 0C5.52 0 .2 5.32.2 11.86c0 2.09.55 4.13 1.6 5.93L.1 24l6.36-1.67a11.85 11.85 0 0 0 5.6 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.41-8.41ZM12.07 21.76h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.26C2.18 6.43 6.61 2 12.06 2c2.64 0 5.12 1.03 6.99 2.91a9.84 9.84 0 0 1 2.9 7c0 5.44-4.43 9.85-9.88 9.85Zm5.41-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    ),
  },

  {
    name: "Email",
    href: "mailto:jamaludin032000@gmail.com",
    icon: (
      <>
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="m3 7 7.94 5.56a1.85 1.85 0 0 0 2.12 0L21 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
];

// Grain texture — premium detail matching all sections
const GRAIN_SVG =
  "data:image/svg+xml;base64," +
  btoa(
    `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`
  );

export default function Footer() {
  const { t } = useLanguage();

  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0F]">
      {/* Mesh gradient backdrop — matching all sections */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 15% 20%, rgba(232,196,104,0.08), transparent 60%), radial-gradient(ellipse 700px 500px at 85% 75%, rgba(94,234,212,0.05), transparent 60%)",
        }}
      />
      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{ backgroundImage: `url(${GRAIN_SVG})` }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* BRAND */}
          <div>
            <Link
              href="#home"
              className="inline-block font-display text-2xl font-bold tracking-tight text-white"
            >
              Jamaludin
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              {t.footer.description}
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto:")
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#E8C468]/40 hover:bg-[#E8C468]/5 hover:text-[#E8C468] hover:shadow-lg hover:shadow-[rgba(232,196,104,0.1)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.navigation}
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-[#E8C468]"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-600 transition-colors group-hover:bg-[#E8C468]" />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.contact}
            </h3>

            <a
              href="mailto:jamaludin032000@gmail.com"
              className="mt-5 block text-sm text-slate-400 transition-colors hover:text-[#E8C468]"
            >
              jamaludin032000@gmail.com
            </a>

            <p className="mt-3 text-sm text-[#5EEAD4]">
              ● {t.footer.available}
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {year} Jamaludin. {t.footer.rights}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-400 transition-all duration-300 hover:border-[#E8C468]/40 hover:bg-[#E8C468]/5 hover:text-[#E8C468] hover:shadow-lg hover:shadow-[rgba(232,196,104,0.1)]"
          >
            {t.footer.backTop}

            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}