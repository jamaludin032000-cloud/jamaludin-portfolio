"use client";

import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageProvider";

// ======================================================
// CATEGORY META
// ======================================================

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
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 5.5A2.5 2.5 0 016.5 3h11A2.5 2.5 0 0120 5.5v13a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 18.5v-13z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 8l-2.5 4L8 16M16 8l2.5 4-2.5 4M13.5 7l-3 10"
        />
      </>
    ),
  },

  backend: {
    skills: [
      "PHP",
      "Laravel",
      "Python",
      "Flask",
      "REST API",
      "MySQL",
    ],

    icon: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7"
        />
      </>
    ),
  },

  tools: {
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Vercel",
      "Linux",
    ],

    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v4"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 17v4"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12h4"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 12h4"
        />
        <circle cx="12" cy="12" r="4" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.64 5.64l2.83 2.83M15.53 15.53l2.83 2.83M18.36 5.64l-2.83 2.83M8.47 15.53l-2.83 2.83"
        />
      </>
    ),
  },
} as const;

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

const skillContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.12,
    },
  },
};

const skillVariants: Variants = {
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
// SKILLS
// ======================================================

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
    <section
      id="skills"
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
              {t.skills.badge}
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
            {t.skills.heading}
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
            CATEGORIES
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
          {categories.map((category) => (
            <motion.div
              key={category.key}
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
                  HOVER GLOW
              ================================================== */}

              <div
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

              <div className="relative mb-6 flex items-start justify-between">
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
                    {category.icon}
                  </svg>
                </motion.div>

                {/* Skill Count */}

                <span
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/2
                    px-2.5
                    py-1
                    text-[11px]
                    font-medium
                    text-slate-500
                    transition-all
                    duration-300
                    group-hover:border-[#E8C468]/20
                    group-hover:bg-[#E8C468]/5
                    group-hover:text-slate-400
                  "
                >
                  {category.skills.length} {t.skills.countSuffix}
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
                {category.title}
              </h3>

              {/* Description */}

              <p
                className="
                  relative
                  mt-1.5
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                {category.description}
              </p>

              {/* ==================================================
                  SKILLS
              ================================================== */}

              <motion.div
                variants={skillContainer}
                className="
                  relative
                  mt-6
                  flex
                  flex-wrap
                  gap-2.5
                "
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    whileHover={{
                      y: -2,
                      scale: 1.04,
                    }}
                    className="
                      cursor-default
                      rounded-full
                      border
                      border-white/10
                      bg-white/3
                      px-3.5
                      py-1.5
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
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* ==================================================
                  BOTTOM ACCENT
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-0
                  left-8
                  right-8
                  h-px
                  origin-left
                  scale-x-0
                  bg-linear-to-r
                  from-[#E8C468]
                  via-[#5EEAD4]
                  to-transparent
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}