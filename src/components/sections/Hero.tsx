"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  const [mounted, setMounted] = useState(false);

  const stats = [
    {
      value: "5+",
      label: t.hero.stats.experience,
    },
    {
      value: "20+",
      label: t.hero.stats.projects,
    },
    {
      value: "100%",
      label: t.hero.stats.satisfaction,
    },
  ];

  useEffect(() => {
    const animation = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-16 px-6 py-24 lg:flex-row lg:justify-between lg:px-12">
      {/* LEFT */}
      <div
        className={`max-w-2xl text-center transition-all duration-700 ease-out lg:text-left ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          {t.hero.welcome}
        </p>

        <h1 className="font-display text-5xl font-semibold leading-[1.05] text-white lg:text-7xl">
          {t.hero.greeting}
          <span className="mt-2 block bg-linear-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-transparent">
            {t.hero.name}
          </span>
        </h1>

        <h2 className="mt-6 text-xl font-medium text-slate-300 lg:text-2xl">
          {t.hero.role}
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-400 lg:mx-0">
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
          <Link
            href="#projects"
            className="
              group inline-flex items-center gap-2 rounded-full
              bg-linear-to-r from-amber-300 to-amber-400
              px-8 py-4 font-semibold text-slate-950
              shadow-[0_8px_30px_-8px_rgba(251,191,36,0.5)]
              transition-all duration-300
              hover:shadow-[0_12px_36px_-6px_rgba(251,191,36,0.65)]
              hover:brightness-105
            "
          >
            {t.button.projects}

            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          <Link
            href="#contact"
            className="
              rounded-full border border-white/15
              bg-white/3 px-8 py-4
              font-semibold text-slate-200
              backdrop-blur-sm
              transition-all duration-300
              hover:border-amber-300/40
              hover:text-amber-200
            "
          >
            {t.button.contact}
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-3 divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 first:pl-0">
              <h3 className="font-display text-3xl font-semibold text-amber-200 lg:text-4xl">
                {stat.value}
              </h3>

              <p className="mt-2 text-xs uppercase tracking-wider text-slate-500 lg:text-sm lg:normal-case lg:tracking-normal lg:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div
        className={`relative shrink-0 transition-all duration-700 ease-out ${
          mounted ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        }`}
      >
        <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-3xl" />

        <div
          className="absolute -inset-4 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-amber-300/25"
          aria-hidden="true"
        />

        <div className="relative rounded-full border border-amber-300/20 bg-white/3 p-2 backdrop-blur-sm">
          <Image
            src="/images/Profile.png"
            alt={t.hero.name}
            width={380}
            height={380}
            priority
            className="rounded-full border border-white/10 object-cover shadow-2xl"
          />
        </div>

        <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-slate-900/90 px-4 py-2 shadow-xl backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />

          <span className="text-xs font-medium text-slate-300">
            {t.hero.available}
          </span>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-60 sm:bottom-10 lg:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
          {t.hero.scroll}
        </span>

        <svg
          className="h-4 w-4 animate-bounce text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}