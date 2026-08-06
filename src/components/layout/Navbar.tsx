"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageProvider";

function LanguageButton({
  language,
  onToggle,
}: {
  language: string;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="
        flex items-center gap-2
        rounded-full
        border border-white/10
        bg-white/5
        px-4 py-2
        text-xs
        font-semibold
        text-slate-300
        transition
        hover:border-amber-300/40
        hover:text-amber-200
      "
      aria-label="Change language"
    >
      🌐 {language.toUpperCase()}
    </button>
  );
}

export default function Navbar() {
  const { language, setLanguage, t, mounted } = useLanguage();

  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");

  const ratiosRef = useRef<Map<string, number>>(new Map());

  const menus = useMemo(
    () => [
      { name: t.nav.home, href: "#home" },
      { name: t.nav.about, href: "#about" },
      { name: t.nav.skills, href: "#skills" },
      { name: t.nav.experience, href: "#experience" },
      { name: t.nav.projects, href: "#projects" },
      { name: t.nav.education, href: "#education" },
      { name: t.nav.certificates, href: "#certificates" },
      { name: t.nav.contact, href: "#contact" },
    ],
    [t]
  );

  // Scroll shadow + progress bar
  useEffect(() => {
    let frame: number;

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setShadow(scrollY > 20);

        const doc = document.documentElement;
        const height = doc.scrollHeight - doc.clientHeight;
        setProgress(height > 0 ? (scrollY / height) * 100 : 0);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Active section tracking — picks the most visible section instead of
  // just the first entry that toggled intersection, which was unreliable.
  useEffect(() => {
    const sections = menus
      .map((menu) => document.querySelector(menu.href))
      .filter((section): section is Element => section !== null);

    if (!sections.length) return;

    ratiosRef.current = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratiosRef.current.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        });

        let bestId = active;
        let bestRatio = 0;

        ratiosRef.current.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestRatio > 0) {
          setActive(bestId);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menus]);

  const handleNavClick = useCallback(() => {
    setOpen(false);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "id" ? "en" : "id");
  }, [language, setLanguage]);

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`
        fixed left-0 right-0 top-0 z-50
        transition-all duration-500
        ${shadow ? "bg-slate-950/70 backdrop-blur-xl shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-bold text-amber-200">
            J
          </div>

          <div>
            <h1 className="text-lg font-semibold tracking-[0.2em] text-white">
              JAMALUDIN
            </h1>
            <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-slate-500">
              Portfolio
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur">
          {menus.map((menu) => {
            const activeMenu = active === menu.href.slice(1);

            return (
              <a
                key={menu.href}
                href={menu.href}
                aria-current={activeMenu ? "true" : undefined}
                className={`
                  relative rounded-full px-4 py-2
                  text-xs font-medium uppercase tracking-wider
                  transition
                  ${activeMenu ? "text-slate-950" : "text-slate-300 hover:text-white"}
                `}
              >
                {activeMenu && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-linear-to-r from-amber-200 via-amber-300 to-amber-200" />
                )}
                {menu.name}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageButton language={language} onToggle={toggleLanguage} />

          <a
            href="#contact"
            className="hidden lg:inline-flex rounded-full border border-amber-300/30 bg-amber-300/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-amber-200 hover:bg-amber-300/10"
          >
            {t.button.contact}
          </a>

          <button
            type="button"
            onClick={toggleOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE */}
      <div
        id="mobile-nav"
        className={`
          overflow-hidden bg-slate-950/95 backdrop-blur transition-all lg:hidden
          ${open ? "max-h-150" : "max-h-0"}
        `}
      >
        <nav className="flex flex-col px-6 py-5">
          <div className="mb-5">
            <LanguageButton language={language} onToggle={toggleLanguage} />
          </div>

          {menus.map((menu) => (
            <a
              key={menu.href}
              href={menu.href}
              onClick={handleNavClick}
              className="border-b border-white/5 py-4 text-sm uppercase tracking-wider text-slate-300 hover:text-amber-300"
            >
              {menu.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-5 rounded-full border border-amber-300/30 bg-amber-300/5 py-3 text-center font-semibold text-amber-200"
          >
            {t.button.contact}
          </a>
        </nav>
      </div>

      {/* SCROLL BAR */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full">
        <div
          className="h-full bg-linear-to-r from-amber-300 via-amber-200 to-amber-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}