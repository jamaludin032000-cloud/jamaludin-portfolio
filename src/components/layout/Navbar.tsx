"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
      aria-label="Change language"
      className="
        group
        inline-flex
        items-center
        gap-2
        rounded-full
        border border-white/10
        bg-white/4
        px-3.5
        py-2
        text-xs
        font-semibold
        uppercase
        tracking-wider
        text-slate-300
        shadow-[0_0_20px_rgba(0,0,0,0.15)]
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-[#E8C468]/40
        hover:bg-[#E8C468]/5
        hover:text-[#E8C468]
        hover:shadow-[0_0_20px_rgba(232,196,104,0.08)]
      "
    >
      <span
        className="
          text-sm
          transition-transform
          duration-300
          group-hover:rotate-12
        "
      >
        🌐
      </span>

      <span className="font-mono">
        {language.toUpperCase()}
      </span>
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

  /*
  |--------------------------------------------------------------------------
  | Scroll Shadow + Progress
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        setShadow(scrollY > 20);

        const doc = document.documentElement;
        const height = doc.scrollHeight - doc.clientHeight;

        setProgress(
          height > 0
            ? Math.min((scrollY / height) * 100, 100)
            : 0
        );
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Active Section Tracking
  |--------------------------------------------------------------------------
  */

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
            entry.isIntersecting
              ? entry.intersectionRatio
              : 0
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

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menus]);

  /*
  |--------------------------------------------------------------------------
  | Navigation
  |--------------------------------------------------------------------------
  */

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
        fixed
        left-0
        right-0
        top-0
        z-50
        transition-all
        duration-500
        ${
          shadow
            ? `
              bg-[#0A0A0F]/85
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              backdrop-blur-2xl
            `
            : "bg-transparent"
        }
      `}
    >
      {/* =====================================================
          NAVBAR CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        {/* =====================================================
            LOGO
        ====================================================== */}

        <Link
          href="#home"
          onClick={handleNavClick}
          className="
            group
            flex
            items-center
            gap-3
          "
        >
          {/* Logo */}

          <div
            className="
              relative
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-white/3
              shadow-[0_0_25px_rgba(232,196,104,0.05)]
              transition-all
              duration-500
              group-hover:scale-105
              group-hover:border-[#E8C468]/40
              group-hover:shadow-[0_0_30px_rgba(232,196,104,0.16)]
            "
          >
            {/* Inner glow */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-xl
                bg-[#E8C468]/0
                transition-all
                duration-500
                group-hover:bg-[#E8C468]/5
              "
            />

            <Image
              src="/images/Logo.png"
              alt="Jamaludin Logo"
              width={44}
              height={44}
              priority
              className="
                relative
                z-10
                h-full
                w-full
                object-contain
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          </div>

          {/* Brand */}

          <div className="hidden sm:block">
            <h1
              className="
                font-display
                text-lg
                font-semibold
                tracking-[0.18em]
                text-white
                transition-colors
                duration-300
                group-hover:text-[#E8C468]
              "
            >
              JAMALUDIN
            </h1>

            <p
              className="
                mt-0.5
                font-mono
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-slate-500
                transition-colors
                duration-300
                group-hover:text-slate-400
              "
            >
              Full Stack Developer
            </p>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav
          className="
            hidden
            items-center
            gap-1
            rounded-full
            border
            border-white/10
            bg-white/4
            px-2
            py-2
            shadow-[0_10px_40px_rgba(0,0,0,0.15)]
            backdrop-blur-xl
            lg:flex
          "
          aria-label="Main navigation"
        >
          {menus.map((menu) => {
            const activeMenu =
              active === menu.href.slice(1);

            return (
              <a
                key={menu.href}
                href={menu.href}
                aria-current={
                  activeMenu ? "page" : undefined
                }
                className={`
                  group
                  relative
                  rounded-full
                  px-4
                  py-2
                  text-xs
                  font-medium
                  uppercase
                  tracking-wider
                  transition-all
                  duration-300
                  ${
                    activeMenu
                      ? "text-[#0A0A0F]"
                      : "text-slate-300 hover:text-white"
                  }
                `}
              >
                {/* Active background */}

                {activeMenu && (
                  <span
                    className="
                      absolute
                      inset-0
                      -z-10
                      rounded-full
                      shadow-[0_0_20px_rgba(232,196,104,0.12)]
                    "
                    style={{
                      background:
                        "linear-gradient(90deg, #C9A24B, #F3DFA0, #E8C468)",
                    }}
                  />
                )}

                {/* Hover underline */}

                {!activeMenu && (
                  <span
                    className="
                      absolute
                      bottom-1
                      left-1/2
                      h-px
                      w-0
                      -translate-x-1/2
                      bg-[#E8C468]
                      transition-all
                      duration-300
                      group-hover:w-1/2
                    "
                  />
                )}

                {menu.name}
              </a>
            );
          })}
        </nav>

        {/* =====================================================
            RIGHT ACTIONS
        ====================================================== */}

        <div className="flex items-center gap-3">
          {/* Language */}

          <LanguageButton
            language={language}
            onToggle={toggleLanguage}
          />

          {/* Desktop Contact */}

          <a
            href="#contact"
            className="
              group
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-[#E8C468]/30
              bg-[#E8C468]/5
              px-5
              py-2.5
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-[#E8C468]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#E8C468]/50
              hover:bg-[#E8C468]/10
              hover:shadow-[0_8px_30px_rgba(232,196,104,0.10)]
              lg:inline-flex
            "
          >
            <span>{t.button.contact}</span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={toggleOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/4
              text-slate-300
              transition-all
              duration-300
              hover:border-[#E8C468]/40
              hover:bg-[#E8C468]/5
              hover:text-[#E8C468]
              lg:hidden
            "
            aria-label={
              open
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  rotate-90
                "
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                "
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <div
        id="mobile-nav"
        className={`
          overflow-hidden
          border-t
          border-white/5
          bg-[#0A0A0F]/95
          shadow-[0_20px_50px_rgba(0,0,0,0.35)]
          backdrop-blur-2xl
          transition-all
          duration-500
          ease-out
          lg:hidden
          ${
            open
              ? "max-h-150 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav className="flex flex-col px-6 py-5">
          {menus.map((menu, index) => {
            const activeMenu =
              active === menu.href.slice(1);

            return (
              <a
                key={menu.href}
                href={menu.href}
                onClick={handleNavClick}
                className={`
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/5
                  py-4
                  text-sm
                  uppercase
                  tracking-wider
                  transition-all
                  duration-300
                  ${
                    activeMenu
                      ? "text-[#E8C468]"
                      : "text-slate-300 hover:pl-2 hover:text-[#E8C468]"
                  }
                `}
                style={{
                  transitionDelay: open
                    ? `${index * 30}ms`
                    : "0ms",
                }}
              >
                <span>{menu.name}</span>

                <span
                  className={`
                    text-[#E8C468]
                    transition-all
                    duration-300
                    ${
                      activeMenu
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }
                  `}
                >
                  →
                </span>
              </a>
            );
          })}

          {/* Mobile Contact */}

          <a
            href="#contact"
            onClick={handleNavClick}
            className="
              mt-5
              rounded-full
              border
              border-[#E8C468]/30
              bg-[#E8C468]/5
              py-3
              text-center
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-[#E8C468]
              shadow-[0_0_25px_rgba(232,196,104,0.04)]
              transition-all
              duration-300
              hover:border-[#E8C468]/50
              hover:bg-[#E8C468]/10
              hover:shadow-[0_0_30px_rgba(232,196,104,0.08)]
            "
          >
            {t.button.contact}
          </a>
        </nav>
      </div>

      {/* =====================================================
          SCROLL PROGRESS
      ====================================================== */}

      <div className="absolute bottom-0 left-0 h-px w-full">
        <div
          className="
            h-full
            shadow-[0_0_8px_rgba(232,196,104,0.45)]
            transition-[width]
            duration-100
          "
          style={{
            width: `${progress}%`,
            background:
              "linear-gradient(90deg, #C9A24B, #F3DFA0, #E8C468)",
          }}
        />
      </div>
    </header>
  );
}