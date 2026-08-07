"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageProvider";

// ======================================================
// PROJECT METADATA
// ======================================================

const projectMeta = [
  {
    key: "portfolio",
    title: "Personal Portfolio Website",
    category: "Web Development",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    github:
      "https://github.com/jamaludin032000-cloud/jamaludin-portfolio",
    demo: "https://jamaludin-portfolio.vercel.app",
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
    github:
      "https://github.com/jamaludin032000-cloud",
  },
  {
    key: "ppe",
    title: "PPE Detection System",
    category: "Computer Vision",
    technologies: ["Python", "OpenCV", "YOLO", "Flask"],
  },
] as const;

// ======================================================
// CATEGORY ICONS
// ======================================================

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

// ======================================================
// GRAIN TEXTURE
// ======================================================

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

// ======================================================
// ANIMATION VARIANTS
// ======================================================

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpSlow: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const techContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.12,
    },
  },
};

const techVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.94,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ======================================================
// GITHUB ICON
// ======================================================

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// ======================================================
// EXTERNAL LINK ICON
// ======================================================

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H18m0 0v4.5M18 6l-8.25 8.25M6 10.5V18h7.5"
      />
    </svg>
  );
}

// ======================================================
// PROJECTS
// ======================================================

export default function Projects() {
  const { t } = useLanguage();

  const projects = projectMeta.map((meta) => ({
    ...meta,
    description: t.projects.items[meta.key].description,
  }));

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0A0A0F]"
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      {/* Mesh Gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 15% 20%, rgba(232,196,104,0.10), transparent 60%), radial-gradient(ellipse 700px 500px at 85% 75%, rgba(94,234,212,0.07), transparent 60%)",
        }}
      />

      {/* Dot Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url(${GRAIN_SVG})`,
        }}
      />

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-28
          lg:px-12
        "
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mb-16 text-center"
        >
          {/* Badge */}

          <motion.div
            variants={fadeUp}
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#E8C468]/20
              bg-[#E8C468]/4
              px-4
              py-1.5
            "
          >
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#E8C468]
              "
            />

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#E8C468]/90
              "
            >
              {t.projects.badge}
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h2
            variants={fadeUpSlow}
            className="
              font-display
              text-4xl
              font-semibold
              text-white
              lg:text-5xl
            "
          >
            {t.projects.heading}
          </motion.h2>

          {/* Divider */}

          <motion.div
            variants={fadeUp}
            className="
              mx-auto
              mt-5
              h-px
              w-24
              bg-linear-to-r
              from-transparent
              via-[#E8C468]
              to-transparent
            "
          />
        </motion.div>

        {/* ==================================================
            PROJECT GRID
        ================================================== */}

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            gap-6
            lg:grid-cols-3
          "
        >
          {projects.map((project) => (
            <motion.article
              key={project.key}
              variants={cardVariants}
              whileHover={{
                y: -7,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/3
                p-8
                transition-all
                duration-300
                hover:border-[#E8C468]/30
                hover:bg-white/5
                hover:shadow-lg
                hover:shadow-[rgba(232,196,104,0.1)]
              "
            >
              {/* ==================================================
                  CORNER GLOW
              ================================================== */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-[#E8C468]/0
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-[#E8C468]/10
                "
              />

              {/* ==================================================
                  CARD HEADER
              ================================================== */}

              <div className="relative mb-5 flex items-center justify-between">
                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate: -5,
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#E8C468]/20
                    bg-[#E8C468]/5
                    text-[#E8C468]
                    transition-all
                    duration-300
                    group-hover:border-[#E8C468]/40
                    group-hover:bg-[#E8C468]/10
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    className="h-5 w-5"
                  >
                    {categoryIcons[project.category]}
                  </svg>
                </motion.div>

                {/* Category */}

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    text-slate-500
                  "
                >
                  {project.category}
                </span>
              </div>

              {/* ==================================================
                  TITLE
              ================================================== */}

              <h3
                className="
                  relative
                  font-display
                  text-xl
                  font-semibold
                  text-white
                "
              >
                {project.title}
              </h3>

              {/* ==================================================
                  DESCRIPTION
              ================================================== */}

              <p
                className="
                  relative
                  mt-4
                  grow
                  text-sm
                  leading-7
                  text-slate-400
                "
              >
                {project.description}
              </p>

              {/* ==================================================
                  TECHNOLOGIES
              ================================================== */}

              <motion.div
                variants={techContainer}
                className="
                  relative
                  mt-6
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={techVariants}
                    whileHover={{
                      y: -2,
                      scale: 1.04,
                    }}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/3
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-slate-300
                      transition-all
                      duration-300
                      hover:border-[#E8C468]/40
                      hover:bg-[#E8C468]/5
                      hover:text-[#E8C468]
                    "
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* ==================================================
                  ACTION BUTTONS
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative mt-8 flex gap-3"
              >
                {/* GitHub */}

                {("github" in project && project.github) && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/15
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-slate-200
                      transition-all
                      duration-300
                      hover:border-[#E8C468]/40
                      hover:bg-[#E8C468]/5
                      hover:text-[#E8C468]
                    "
                  >
                    <GithubIcon />
                    {t.projects.githubLabel}
                  </motion.a>
                )}

                {/* Demo */}

                {("demo" in project && project.demo) && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#E8C468]
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#0A0A0F]
                      transition-all
                      duration-300
                      hover:bg-[#E8C468]/90
                      hover:shadow-lg
                      hover:shadow-[rgba(232,196,104,0.3)]
                    "
                  >
                    {t.projects.demoLabel}
                    <ExternalIcon />
                  </motion.a>
                )}

                {/* Private */}

                {!("github" in project && project.github) &&
                  !("demo" in project && project.demo) && (
                    <span className="text-xs italic text-slate-600">
                      {t.projects.privateLabel}
                    </span>
                  )}
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}