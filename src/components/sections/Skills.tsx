"use client";

import { useLanguage } from "@/lib/LanguageProvider";

// Icons and raw skill-tag lists stay keyed here — tech names (React.js, Laravel...)
// and icon paths aren't translated content, only category title/description are.
const categoryMeta = {
  frontend: {
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    ),
  },
  backend: {
    skills: ["PHP", "Laravel", "Python", "Flask", "REST API", "MySQL"],
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-1.5a1.5 1.5 0 011.5-1.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5h16.5a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V15a1.5 1.5 0 011.5-1.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 9.75h.008v.008H6V9.75zM6 16.5h.008v.008H6V16.5z"
        />
      </>
    ),
  },
  tools: {
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel", "Linux"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
      />
    ),
  },
} as const;

export default function Skills() {
  const { t } = useLanguage();

  const categories = (
    Object.keys(categoryMeta) as (keyof typeof categoryMeta)[]
  ).map((key) => ({
    key,
    ...t.skills.categories[key],
    ...categoryMeta[key],
  }));

  return (
    <section className="relative bg-slate-950 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-amber-200/90">
              {t.skills.badge}
            </span>
          </div>

          <h2 className="font-display text-4xl font-semibold text-white lg:text-5xl">
            {t.skills.heading}
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-transparent via-amber-300 to-transparent" />
        </div>

        {/* Categories */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.key}
              className="
                group rounded-2xl border border-white/10 bg-white/3 p-8
                transition-all duration-300
                hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/5
              "
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/5 text-amber-200 transition-colors duration-300 group-hover:border-amber-300/40">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    className="h-5 w-5"
                  >
                    {category.icon}
                  </svg>
                </div>

                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                  {category.skills.length} {t.skills.countSuffix}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-white">
                {category.title}
              </h3>

              <p className="mt-1.5 text-sm text-slate-500">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5
                      text-xs font-medium text-slate-300
                      transition-all duration-300
                      hover:border-amber-300/40 hover:text-amber-200
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}