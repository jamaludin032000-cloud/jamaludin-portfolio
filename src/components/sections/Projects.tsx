"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/lib/LanguageProvider";

// Title, category, tech stack, and links aren't translated content (they're
// proper nouns / English tech terms already) — only `description` comes
// from the dictionary, matched by this shared `key`.
const projectMeta = [
  {
    key: "portfolio",
    title: "Personal Portfolio Website",
    category: "Web Development",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/jamaludin032000-cloud",
    demo: "https://portfolio.vercel.app",
  },
  {
    key: "maintenance",
    title: "Predictive Maintenance System",
    category: "Machine Learning",
    technologies: [
      "Laravel",
      "Next.js",
      "Python",
      "Random Forest",
      "XGBoost",
      "MySQL",
    ],
    github: "https://github.com/jamaludin032000-cloud",
  },
  {
    key: "ppe",
    title: "PPE Detection System",
    category: "Computer Vision",
    technologies: ["Python", "OpenCV", "YOLO", "Flask"],
  },
] as const;

const categoryIcons: Record<string, ReactNode> = {
  "Web Development": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    />
  ),
  "Machine Learning": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 20.25a48.25 48.25 0 01-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
    />
  ),
  "Computer Vision": (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </>
  ),
};

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H18m0 0v4.5M18 6l-8.25 8.25M6 10.5V18h7.5"
      />
    </svg>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  const projects = projectMeta.map((meta) => ({
    ...meta,
    description: t.projects.items[meta.key].description,
  }));

  return (
    <section className="relative bg-slate-950 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-amber-200/90">
              {t.projects.badge}
            </span>
          </div>

          <h2 className="font-display text-4xl font-semibold text-white lg:text-5xl">
            {t.projects.heading}
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-transparent via-amber-300 to-transparent" />
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.key}
              className="
                group relative flex flex-col overflow-hidden rounded-2xl
                border border-white/10 bg-white/3 p-8
                transition-all duration-300
                hover:-translate-y-1.5 hover:border-amber-300/30 hover:bg-white/5
              "
            >
              {/* corner glow on hover */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/0 blur-2xl transition-colors duration-500 group-hover:bg-amber-400/10" />

              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/5 text-amber-200 transition-colors duration-300 group-hover:border-amber-300/40">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    className="h-5 w-5"
                  >
                    {categoryIcons[project.category]}
                  </svg>
                </div>

                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {project.category}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 grow text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                {"github" in project && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2 rounded-full border border-white/15
                      px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200
                      transition-all duration-300 hover:border-amber-300/40 hover:text-amber-200
                    "
                  >
                    <GithubIcon />
                    {t.projects.githubLabel}
                  </a>
                )}

                {"demo" in project && project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2 rounded-full
                      bg-linear-to-r from-amber-300 to-amber-400 px-4 py-2
                      text-xs font-semibold uppercase tracking-wider text-slate-950
                      transition-all duration-300 hover:brightness-105
                    "
                  >
                    {t.projects.demoLabel}
                    <ExternalIcon />
                  </a>
                )}

                {!("github" in project && project.github) &&
                  !("demo" in project && project.demo) && (
                    <span className="text-xs italic text-slate-600">
                      {t.projects.privateLabel}
                    </span>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}