"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  animate,
  type Variants,
} from "framer-motion";
import { useLanguage } from "@/lib/LanguageProvider";
import {
  SiLaravel,
  SiCodeigniter,
  SiHtml5,
  SiCss,
  SiPython,
  SiJavascript,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";

/* =========================================================
   TECH STACK
========================================================= */

const STACK = [
  { name: "Laravel", Icon: SiLaravel },
  { name: "CodeIgniter", Icon: SiCodeigniter },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "Python", Icon: SiPython },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "PHP", Icon: SiPhp },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "PostgreSQL", Icon: SiPostgresql },
];

/* =========================================================
   GRAIN TEXTURE
========================================================= */

const GRAIN_SVG =
  "data:image/svg+xml;base64," +
  btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120">
      <filter id="n">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="2"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#n)" />
    </svg>`
  );

/* =========================================================
   ENTRANCE ANIMATION
========================================================= */

const heroContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.11,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const heroTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.045,
    },
  },
};

const iconItemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    y: 12,
    filter: "blur(4px)",
  },

  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   TYPEWRITER
========================================================= */

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = STACK[index].name;
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setIndex((i) => (i + 1) % STACK.length);
        }
      }
    }, text.length === current.length && !deleting ? 1200 : speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="font-mono text-sm text-[#5EEAD4]">
      {text}

      <motion.span
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          times: [0, 0.5, 0.5, 1],
        }}
        className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-[#5EEAD4]"
      />
    </span>
  );
}

/* =========================================================
   STAT COUNTER
========================================================= */

function StatCounter({ value }: { value: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  const numericPart =
    parseInt(value.replace(/\D/g, ""), 10) || 0;

  const suffix = value.replace(/[0-9]/g, "");

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, numericPart, {
      duration: 1.4,
      ease: "easeOut",

      onUpdate: (v) => {
        setDisplay(Math.floor(v));
      },
    });

    return () => controls.stop();
  }, [isInView, numericPart]);

  return (
    <h3
      ref={ref}
      className="font-mono text-3xl font-semibold text-[#E8C468] lg:text-4xl"
    >
      {display}
      {suffix}
    </h3>
  );
}

/* =========================================================
   MAGNETIC BUTTON
========================================================= */

function Magnetic({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 15,
  });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect =
          ref.current?.getBoundingClientRect();

        if (!rect) return;

        x.set(
          (e.clientX -
            rect.left -
            rect.width / 2) *
            0.25
        );

        y.set(
          (e.clientY -
            rect.top -
            rect.height / 2) *
            0.25
        );
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        x: springX,
        y: springY,
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   PHOTO CORNERS
========================================================= */

const CORNERS = [
  "top-0 left-0 border-t border-l",
  "top-0 right-0 border-t border-r",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
];

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const { t } = useLanguage();

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

  /* =======================================================
     MOUSE GLOW
  ======================================================= */

  const glowX = useMotionValue(0.5);
  const glowY = useMotionValue(0.5);

  const glowSpringX = useSpring(glowX, {
    stiffness: 100,
    damping: 20,
  });

  const glowSpringY = useSpring(glowY, {
    stiffness: 100,
    damping: 20,
  });

  const translateX = useTransform(
    glowSpringX,
    [0, 1],
    [-24, 24]
  );

  const translateY = useTransform(
    glowSpringY,
    [0, 1],
    [-24, 24]
  );

  const photoRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0A0A0F]"
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 15% 20%, rgba(232,196,104,0.10), transparent 60%), radial-gradient(ellipse 700px 500px at 85% 75%, rgba(94,234,212,0.07), transparent 60%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url(${GRAIN_SVG})`,
        }}
      />

      {/* ===================================================
          MAIN CONTAINER
      =================================================== */}

      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center gap-16 px-6 py-24 lg:flex-row lg:justify-between lg:px-12">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl text-center lg:text-left"
        >
          {/* BADGE */}

          <motion.div
            variants={heroItemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8C468]/20 bg-[#E8C468]/4 px-4 py-1.5 font-mono"
          >
            <span className="text-[#E8C468]">
              ›
            </span>

            <span className="text-xs uppercase tracking-[0.25em] text-[#E8C468]/90">
              {t.hero.welcome}
            </span>
          </motion.div>

          {/* =================================================
              TITLE
          ================================================= */}

          <motion.h1
            variants={heroTitleVariants}
            className="font-display text-5xl font-semibold leading-[1.05] text-white lg:text-7xl"
          >
            {t.hero.greeting}

            <span
              className="relative mt-2 block bg-size-[200%_auto] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, #C9A24B 20%, #F3DFA0 40%, #E8C468 60%, #C9A24B 80%)",
              }}
            >
              <motion.span
                animate={{
                  backgroundPosition: [
                    "0% center",
                    "200% center",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundImage: "inherit",
                  backgroundSize: "inherit",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                }}
              >
                {t.hero.name}
              </motion.span>
            </span>
          </motion.h1>

          {/* ROLE */}

          <motion.h2
            variants={heroItemVariants}
            className="mt-6 font-mono text-lg font-medium tracking-tight text-slate-300 lg:text-xl"
          >
            {t.hero.role}
          </motion.h2>

          {/* TYPEWRITER */}

          <motion.div
            variants={heroItemVariants}
            className="mt-4 flex justify-center lg:justify-start"
          >
            <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/2 px-3 py-1.5">
              <span className="font-mono text-xs text-slate-500">
                stack:
              </span>

              <Typewriter />
            </div>
          </motion.div>

          {/* =================================================
              STACK ICONS
          ================================================= */}

          <motion.div
            variants={heroItemVariants}
            className="mt-5"
          >
            <motion.div
              variants={iconContainerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center gap-2.5 lg:justify-start"
            >
              {STACK.map(({ name, Icon }) => (
                <motion.div
                  key={name}
                  variants={iconItemVariants}
                  whileHover={{
                    y: -4,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 16,
                  }}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/2 text-slate-500 transition-colors duration-300 hover:border-[#E8C468]/30 hover:text-[#E8C468]"
                >
                  <Icon
                    className="h-5 w-5"
                    aria-label={name}
                  />

                  <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#0A0A0F] px-2 py-1 font-mono text-[10px] text-slate-300 opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                    {name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* DESCRIPTION */}

          <motion.p
            variants={heroItemVariants}
            className="mx-auto mt-6 max-w-xl leading-8 text-slate-400 lg:mx-0"
          >
            {t.hero.description}
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            variants={heroItemVariants}
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <Magnetic>
              <Link
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#E8C468] px-8 py-4 font-semibold text-[#0A0A0F] shadow-[0_8px_30px_-8px_rgba(232,196,104,0.55)] transition-shadow duration-300 hover:shadow-[0_12px_36px_-6px_rgba(232,196,104,0.7)]"
              >
                <span
                  className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  aria-hidden="true"
                />

                <span className="relative">
                  {t.button.projects}
                </span>

                <svg
                  className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </Magnetic>

            <Magnetic>
              <Link
                href="#contact"
                className="inline-flex rounded-full border border-white/15 bg-white/2 px-8 py-4 font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-[#5EEAD4]/30 hover:text-[#5EEAD4]"
              >
                {t.button.contact}
              </Link>
            </Magnetic>
          </motion.div>

          {/* =================================================
              STATS
          ================================================= */}

          <motion.div
            variants={heroItemVariants}
            className="mt-14 grid grid-cols-3 divide-x divide-white/10"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-4 first:pl-0"
              >
                <StatCounter value={stat.value} />

                <p className="mt-2 text-xs uppercase tracking-wider text-slate-500 lg:text-sm lg:normal-case lg:tracking-normal">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* =================================================
            RIGHT / PROFILE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 70,
            scale: 0.88,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative shrink-0"
          ref={photoRef}
          onMouseMove={(e) => {
            const rect =
              photoRef.current?.getBoundingClientRect();

            if (!rect) return;

            glowX.set(
              (e.clientX - rect.left) / rect.width
            );

            glowY.set(
              (e.clientY - rect.top) / rect.height
            );
          }}
        >
          {/* GLOW */}

          <motion.div
            className="absolute inset-0 rounded-full opacity-70 blur-3xl"
            style={{
              x: translateX,
              y: translateY,
              background:
                "radial-gradient(circle, rgba(232,196,104,0.35), rgba(94,234,212,0.15) 60%, transparent 75%)",
            }}
          />

          {/* ROTATING RING */}

          <motion.div
            className="absolute -inset-5 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0%, #E8C468 8%, transparent 20%, transparent 50%, #5EEAD4 58%, transparent 70%, transparent 100%)",

              maskImage:
                "radial-gradient(circle, transparent 62%, black 63%, black 66%, transparent 67%)",

              WebkitMaskImage:
                "radial-gradient(circle, transparent 62%, black 63%, black 66%, transparent 67%)",
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* PROFILE IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative rounded-full border border-white/10 bg-white/2 p-2 backdrop-blur-sm"
          >
            <Image
              src="/images/Profile.png"
              alt={t.hero.name}
              width={380}
              height={380}
              priority
              className="rounded-full border border-white/10 object-cover shadow-2xl"
            />

            {CORNERS.map((pos) => (
              <span
                key={pos}
                className={`absolute h-5 w-5 border-[#E8C468]/70 ${pos}`}
              />
            ))}
          </motion.div>

          {/* AVAILABLE BADGE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 1.15,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-[#0A0A0F]/90 px-4 py-2 shadow-xl backdrop-blur-md"
          >
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5EEAD4]"
              aria-hidden="true"
            />

            <span className="font-mono text-xs font-medium text-slate-300">
              {t.hero.available}
            </span>
          </motion.div>
        </motion.div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 0.6,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 0.6,
          }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:bottom-10 lg:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
            {t.hero.scroll}
          </span>

          <motion.svg
            animate={{
              y: [0, 6, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-4 w-4 text-slate-500"
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
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}