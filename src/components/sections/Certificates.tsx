"use client";

import { useLanguage } from "@/lib/LanguageProvider";

// Grain texture — premium detail matching all sections
const GRAIN_SVG =
  "data:image/svg+xml;base64," +
  btoa(
    `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`
  );

function AwardIcon() {
  return (
    <>
      {/* Medal */}
      <circle
        cx="12"
        cy="9"
        r="5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Star inside medal */}
      <path
        d="M12 6.5l.8 1.65 1.82.26-1.31 1.28.31 1.81L12 10.65l-1.62.85.31-1.81-1.31-1.28 1.82-.26L12 6.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left ribbon */}
      <path
        d="M8.5 13.1 7.25 20l4.75-2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right ribbon */}
      <path
        d="M15.5 13.1 16.75 20 12 17.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

export default function Certificates() {
  const { t } = useLanguage();

  const certificates = t.certificates.items;

  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[#0A0A0F] py-28"
    >
      {/* Mesh gradient backdrop — matching Hero, About, Skills, Experience, Projects & Education */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 15% 20%, rgba(232,196,104,0.10), transparent 60%), radial-gradient(ellipse 700px 500px at 85% 75%, rgba(94,234,212,0.07), transparent 60%)",
        }}
      />
      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: `url(${GRAIN_SVG})` }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8C468]/20 bg-[#E8C468]/4 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E8C468]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#E8C468]/90">
              {t.certificates.badge}
            </span>
          </div>

          <h2 className="font-display text-4xl font-semibold text-white lg:text-5xl">
            {t.certificates.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            {t.certificates.subtitle}
          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-linear-to-r from-transparent via-[#E8C468] to-transparent" />
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <div
              key={`${certificate.title}-${certificate.year}`}
              className="
                group relative overflow-hidden rounded-2xl
                border border-white/10
                bg-white/3
                p-8
                transition-all duration-300
                hover:-translate-y-1.5
                hover:border-[#E8C468]/30
                hover:bg-white/5
                hover:shadow-lg hover:shadow-[rgba(232,196,104,0.1)]
              "
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E8C468]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#E8C468]/10" />

              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E8C468]/20 bg-[#E8C468]/5 text-[#E8C468] transition-all duration-300 group-hover:border-[#E8C468]/40 group-hover:bg-[#E8C468]/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    className="h-5 w-5"
                  >
                    <AwardIcon />
                  </svg>
                </div>

                <span className="shrink-0 rounded-full border border-white/10 bg-white/3 px-3.5 py-1 text-xs font-semibold text-slate-300 transition-all duration-300 group-hover:border-[#E8C468]/20 group-hover:bg-[#E8C468]/5 group-hover:text-slate-200">
                  {certificate.year}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-white lg:text-xl">
                {certificate.title}
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <p className="text-sm font-medium text-[#E8C468]">
                  {certificate.issuer}
                </p>

                {certificate.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#5EEAD4]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#5EEAD4] transition-all duration-300 group-hover:bg-[#5EEAD4]/15">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-2.5 w-2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    {t.certificates.verified}
                  </span>
                )}
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                {certificate.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}