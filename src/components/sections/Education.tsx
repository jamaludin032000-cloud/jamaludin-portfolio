"use client";

import { useLanguage } from "@/lib/LanguageProvider";

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  description: string;
};

export default function Education() {
  const { t } = useLanguage();

  const items = t.education.items as EducationItem[];

  return (
    <section
      id="education"
      className="relative py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-1 text-sm font-medium text-amber-200">
            {t.education.badge}
          </span>

          <h2 className="mt-6 font-display text-4xl font-semibold text-white lg:text-5xl">
            {t.education.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            {t.education.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          <div className="absolute bottom-2 left-4 top-2 w-px bg-linear-to-b from-amber-300/60 via-white/10 to-transparent" />

          <div className="space-y-8">
            {items.map((item, index) => (
              <div
                key={`${item.institution}-${item.period}`}
                className="relative pl-12"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-amber-300/40 bg-slate-950">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    className="h-4 w-4 text-amber-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.44 60.44 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347M4.26 10.147L12 13.5l7.74-3.353M19.74 10.147L12 3 4.26 10.147"
                    />
                  </svg>
                </div>

                <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-amber-300/30 hover:bg-white/10">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white lg:text-2xl">
                        {item.institution}
                      </h3>

                      <p className="mt-1.5 text-sm font-medium text-amber-200">
                        {item.degree}
                      </p>
                    </div>

                    <span className="w-fit shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>

                {index === 0 && (
                  <span className="absolute -left-1 top-1 h-10 w-10 animate-ping rounded-full bg-amber-300/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}