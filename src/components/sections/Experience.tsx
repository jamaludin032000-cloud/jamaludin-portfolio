"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageProvider";

const COLLAPSED_COUNT = 3;

export default function Experience() {
  const { t } = useLanguage();
  const experiences = t.experience.items;

  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggle = (index: number) =>
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));

  return (
    <section className="relative bg-slate-900/60 py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-amber-200/90">
              {t.experience.badge}
            </span>
          </div>

          <h2 className="font-display text-4xl font-semibold text-white lg:text-5xl">
            {t.experience.heading}
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-transparent via-amber-300 to-transparent" />
        </div>

        {/* Timeline — order here is real: career progression, most recent first */}
        <div className="relative mt-16">
          <div className="absolute left-3.75 top-2 bottom-2 w-px bg-linear-to-b from-amber-300/60 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((item, index) => {
              const isOpen = expanded[index] ?? false;
              const visibleItems = isOpen
                ? item.description
                : item.description.slice(0, COLLAPSED_COUNT);
              const hasMore = item.description.length > COLLAPSED_COUNT;

              return (
                <div key={item.company} className="relative pl-10 md:pl-0">
                  {/* timeline node */}
                  <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-amber-300/40 bg-slate-950 md:left-1/2 md:-translate-x-1/2">
                    <span className="font-display text-[11px] font-semibold text-amber-200">
                      {String(experiences.length - index).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="md:grid md:grid-cols-2 md:gap-10">
                    <div
                      className={
                        index % 2 === 0
                          ? "md:col-start-2 md:pl-10"
                          : "md:col-start-1 md:row-start-1 md:pr-10 md:text-right"
                      }
                    >
                      <div
                        className="
                          group rounded-2xl border border-white/10 bg-white/3 p-7
                          transition-all duration-300
                          hover:border-amber-300/30 hover:bg-white/5
                        "
                      >
                        <div
                          className={`flex flex-col gap-3 ${
                            index % 2 === 0 ? "" : "md:items-end"
                          }`}
                        >
                          <span className="w-fit rounded-full border border-amber-300/20 bg-amber-300/5 px-3.5 py-1 text-xs font-medium text-amber-200">
                            {item.period}
                          </span>

                          <div>
                            <h3 className="font-display text-xl font-semibold text-white">
                              {item.position}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-slate-400">
                              {item.company}
                            </p>
                          </div>
                        </div>

                        <ul
                          className={`mt-5 space-y-2.5 text-sm leading-6 text-slate-400 ${
                            index % 2 === 0 ? "text-left" : "md:text-right"
                          }`}
                        >
                          {visibleItems.map((job) => (
                            <li
                              key={job}
                              className={
                                index % 2 === 0
                                  ? "flex gap-2.5"
                                  : "flex gap-2.5 md:flex-row-reverse"
                              }
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-300/60" />
                              <span>{job}</span>
                            </li>
                          ))}
                        </ul>

                        {hasMore && (
                          <button
                            onClick={() => toggle(index)}
                            className="
                              mt-4 text-xs font-semibold uppercase tracking-wider text-amber-200
                              transition-colors duration-300 hover:text-amber-100
                            "
                          >
                            {isOpen
                              ? t.experience.showLess
                              : t.experience.showMore(
                                  item.description.length - COLLAPSED_COUNT
                                )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}