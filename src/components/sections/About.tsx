"use client";

import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageProvider";

// ======================================================
// ICONS
// ======================================================

const iconByKey = {
  name: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
    />
  ),

  location: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"
      />
      <circle cx="12" cy="9" r="2.25" />
    </>
  ),

  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7l9 6 9-6"
      />
    </>
  ),

  education: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10l9-5 9 5-9 5-9-5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 12.5V16c2.8 2 7.2 2 10 0v-3.5"
      />
    </>
  ),

  experience: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 12h18"
      />
    </>
  ),

  status: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 12l2.3 2.3 4.7-5"
      />
    </>
  ),
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
      <rect width="100%" height="100%" filter="url(#n)"/>
    </svg>`
  );

// ======================================================
// ANIMATION
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

const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const paragraphContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const cardContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const tagContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const tagVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
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
// ABOUT
// ======================================================

export default function About() {
  const { t } = useLanguage();

  const infoItems = [
    {
      key: "name",
      ...t.about.info.name,
    },
    {
      key: "location",
      ...t.about.info.location,
    },
    {
      key: "email",
      ...t.about.info.email,
      truncate: true,
    },
    {
      key: "education",
      ...t.about.info.education,
    },
    {
      key: "experience",
      ...t.about.info.experience,
    },
    {
      key: "status",
      ...t.about.info.status,
      accent: true,
    },
  ] as const;

  return (
    <section
      id="about"
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
          variants={staggerContainer}
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
              {t.about.badge}
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
            {t.about.heading}
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
            MAIN CONTENT
        ================================================== */}

        <div className="grid gap-16 lg:grid-cols-2">

          {/* ==================================================
              LEFT COLUMN
          ================================================== */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {/* Subheading */}

            <motion.h3
              variants={fadeUpSlow}
              className="
                font-display
                text-2xl
                font-semibold
                text-white
                lg:text-3xl
              "
            >
              {t.about.subheading}
            </motion.h3>

            {/* Paragraphs */}

            <motion.div
              variants={paragraphContainer}
              className="mt-6 space-y-5"
            >
              {t.about.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp}
                  className="
                    leading-8
                    text-slate-400
                  "
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Focus Areas */}

            <motion.div
              variants={tagContainer}
              className="
                mt-8
                flex
                flex-wrap
                gap-2
              "
            >
              {t.about.focusAreas.map((tag) => (
                <motion.span
                  key={tag}
                  variants={tagVariants}
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
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
                    transition-colors
                    duration-300
                    hover:border-[#E8C468]/30
                    hover:bg-[#E8C468]/5
                    hover:text-[#E8C468]
                  "
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* ==================================================
              RIGHT COLUMN
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
              gap-4
              sm:grid-cols-2
            "
          >
            {infoItems.map((item) => (
              <motion.div
                key={item.key}
                variants={cardVariants}
                whileHover={{
                  y: -6,
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
                  p-6
                  transition-all
                  duration-300
                  hover:border-[#E8C468]/30
                  hover:bg-white/5
                  hover:shadow-lg
                  hover:shadow-[rgba(232,196,104,0.1)]
                "
              >
                {/* Hover Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-24
                    w-24
                    rounded-full
                    bg-[#E8C468]/0
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-[#E8C468]/10
                  "
                />

                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate: -4,
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className={`
                    relative
                    mb-4
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    transition-all
                    duration-300
                    ${
                      "accent" in item && item.accent
                        ? "border-[#5EEAD4]/30 bg-[#5EEAD4]/10 text-[#5EEAD4] group-hover:border-[#5EEAD4]/50 group-hover:bg-[#5EEAD4]/15"
                        : "border-[#E8C468]/20 bg-[#E8C468]/5 text-[#E8C468] group-hover:border-[#E8C468]/40 group-hover:bg-[#E8C468]/10"
                    }
                  `}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    className="h-5 w-5"
                  >
                    {iconByKey[item.key]}
                  </svg>
                </motion.div>

                {/* Label */}

                <h4
                  className="
                    mb-1.5
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-slate-500
                  "
                >
                  {item.label}
                </h4>

                {/* Value */}

                <p
                  className={`
                    text-sm
                    font-medium
                    ${
                      "accent" in item && item.accent
                        ? "text-[#5EEAD4]"
                        : "text-slate-200"
                    }
                    ${
                      "truncate" in item && item.truncate
                        ? "break-all"
                        : ""
                    }
                  `}
                >
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}