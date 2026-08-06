"use client";

import { useLanguage } from "@/lib/LanguageProvider";

// Icons stay keyed here (not in the dictionary) since SVG paths aren't
// translatable content — only the label/value text moves through `t`.
const iconByKey = {
  name: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
    />
  ),
  location: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </>
  ),
  email: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75l9 6.5 9-6.5M4.5 19.5h15a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 6v12a1.5 1.5 0 001.5 1.5z"
    />
  ),
  education: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.26 10.147a60.44 60.44 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347M4.26 10.147a48.47 48.47 0 011.184-.513M4.26 10.147L12 13.5l7.74-3.353M4.26 10.147l7.74 3.353M19.74 10.147L12 3 4.26 10.147"
    />
  ),
  experience: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25M9 8.25l3-3m0 0l3 3m-3-3v10.5M3.75 14.15c1.892.578 3.937.89 6.06.909m10.44-.909c-1.892.578-3.937.89-6.06.909"
    />
  ),
  status: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
} as const;

export default function About() {
  const { t } = useLanguage();

  const infoItems = [
    { key: "name", ...t.about.info.name },
    { key: "location", ...t.about.info.location },
    { key: "email", ...t.about.info.email, truncate: true },
    { key: "education", ...t.about.info.education },
    { key: "experience", ...t.about.info.experience },
    { key: "status", ...t.about.info.status, accent: true },
  ] as const;

  return (
    <section className="relative bg-slate-900/60 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-amber-200/90">
              {t.about.badge}
            </span>
          </div>

          <h2 className="font-display text-4xl font-semibold text-white lg:text-5xl">
            {t.about.heading}
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-transparent via-amber-300 to-transparent" />
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* KIRI */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-white lg:text-3xl">
              {t.about.subheading}
            </h3>

            {t.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`leading-8 text-slate-400 ${
                  index === 0 ? "mt-6" : "mt-5"
                }`}
              >
                {paragraph}
              </p>
            ))}

            {/* Focus areas as quiet tags — encodes real scope, not decoration */}
            <div className="mt-8 flex flex-wrap gap-2">
              {t.about.focusAreas.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 text-xs font-medium text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* KANAN */}
          <div className="grid gap-4 sm:grid-cols-2">
            {infoItems.map((item) => (
              <div
                key={item.key}
                className="
                  group rounded-2xl border border-white/10 bg-white/3 p-6
                  transition-all duration-300
                  hover:border-amber-300/30 hover:bg-white/5
                "
              >
                <div
                  className={`
                    mb-4 flex h-10 w-10 items-center justify-center rounded-xl border
                    transition-colors duration-300
                    ${
                      "accent" in item && item.accent
                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                        : "border-amber-300/20 bg-amber-300/5 text-amber-200 group-hover:border-amber-300/40"
                    }
                  `}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    className="h-5 w-5"
                  >
                    {iconByKey[item.key]}
                  </svg>
                </div>

                <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {item.label}
                </h4>

                <p
                  className={`text-sm font-medium ${
                    "accent" in item && item.accent
                      ? "text-emerald-300"
                      : "text-slate-200"
                  } ${"truncate" in item && item.truncate ? "break-all" : ""}`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}