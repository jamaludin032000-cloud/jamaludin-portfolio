"use client";

import { useLanguage } from "@/lib/LanguageProvider";

function AwardIcon() {
  return (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 18.75h-9A2.25 2.25 0 015.25 16.5v-9A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 10.5l2.25-2.25 2.25 2.25"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8.25v7.5"
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
      className="relative py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-1.5 text-sm font-medium text-amber-200">
            {t.certificates.badge}
          </span>

          <h2 className="mt-6 font-display text-4xl font-semibold text-white lg:text-5xl">
            {t.certificates.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            {t.certificates.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <div
              key={`${certificate.title}-${certificate.year}`}
              className="
                group relative overflow-hidden rounded-2xl
                border border-white/10
                bg-white/5
                p-8
                transition-all duration-300
                hover:-translate-y-1.5
                hover:border-amber-300/30
                hover:bg-white/10
              "
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/0 blur-2xl transition-colors duration-500 group-hover:bg-amber-400/10" />

              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/5 text-amber-200 transition-colors duration-300 group-hover:border-amber-300/40">
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

                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-slate-300">
                  {certificate.year}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-white lg:text-xl">
                {certificate.title}
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <p className="text-sm font-medium text-amber-200">
                  {certificate.issuer}
                </p>

                {certificate.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
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