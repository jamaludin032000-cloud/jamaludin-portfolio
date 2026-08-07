"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageProvider";

const COLLAPSED_COUNT = 3;

// ======================================================
// GRAIN TEXTURE
// ======================================================

const GRAIN_SVG =
  "data:image/svg+xml;base64," +
  btoa(
    `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`
  );

// ======================================================
// ANIMATION VARIANTS
// ======================================================

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const timelineContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const timelineItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
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

const nodeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.15,
    },
  },
};

// ======================================================
// EXPERIENCE
// ======================================================

export default function Experience() {
  const { t } = useLanguage();

  const experiences = t.experience.items;

  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggle = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[#0A0A0F]
      "
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      {/* Mesh Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 15% 20%, rgba(232,196,104,0.10), transparent 60%), radial-gradient(ellipse 700px 500px at 85% 75%, rgba(94,234,212,0.07), transparent 60%)",
        }}
      />

      {/* Dot Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.15]
        "
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Grain */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          mix-blend-overlay
        "
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
          max-w-5xl
          px-6
          py-28
          lg:px-12
        "
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
          }}
          variants={headerVariants}
          className="mb-16 text-center"
        >
          {/* Badge */}
          <motion.div
            variants={headerVariants}
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
                scale: [1, 1.35, 1],
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
              {t.experience.badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={headerVariants}
            className="
              font-display
              text-4xl
              font-semibold
              text-white
              lg:text-5xl
            "
          >
            {t.experience.heading}
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            variants={headerVariants}
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
            TIMELINE
        ================================================== */}

        <div className="relative mt-16">
          {/* Timeline Line */}
          <motion.div
            initial={{
              opacity: 0,
              scaleY: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "top",
            }}
            className="
              absolute
              left-3.75
              top-2
              bottom-2
              w-px
              bg-linear-to-b
              from-[#E8C468]/60
              via-white/10
              to-transparent
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <motion.div
            variants={timelineContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            className="space-y-10"
          >
            {experiences.map((item, index) => {
              const isOpen = expanded[index] ?? false;

              const visibleItems = isOpen
                ? item.description
                : item.description.slice(0, COLLAPSED_COUNT);

              const hasMore =
                item.description.length > COLLAPSED_COUNT;

              return (
                <motion.div
                  key={item.company}
                  variants={timelineItemVariants}
                  className="
                    relative
                    pl-10
                    md:pl-0
                  "
                >
                  {/* ==================================================
                      TIMELINE NODE
                  ================================================== */}

                  <motion.div
                    variants={nodeVariants}
                    className="
                      absolute
                      left-0
                      top-2
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#E8C468]/40
                      bg-[#0A0A0F]
                      shadow-lg
                      shadow-[#E8C468]/20
                      md:left-1/2
                      md:-translate-x-1/2
                    "
                  >
                    <span
                      className="
                        font-display
                        text-[11px]
                        font-semibold
                        text-[#E8C468]
                      "
                    >
                      {String(experiences.length - index).padStart(2, "0")}
                    </span>
                  </motion.div>

                  {/* ==================================================
                      TIMELINE GRID
                  ================================================== */}

                  <div className="md:grid md:grid-cols-2 md:gap-10">
                    <div
                      className={
                        index % 2 === 0
                          ? "md:col-start-2 md:pl-10"
                          : "md:col-start-1 md:row-start-1 md:pr-10 md:text-right"
                      }
                    >
                      {/* ==================================================
                          CARD
                      ================================================== */}

                      <motion.div
                        whileHover={{
                          y: -6,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/3
                          p-7
                          transition-all
                          duration-300
                          hover:border-[#E8C468]/30
                          hover:bg-white/5
                          hover:shadow-lg
                          hover:shadow-[rgba(232,196,104,0.1)]
                        "
                      >
                        {/* Card Glow */}
                        <div
                          className="
                            pointer-events-none
                            absolute
                            -right-12
                            -top-12
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

                        <div
                          className={`relative flex flex-col gap-3 ${
                            index % 2 === 0
                              ? ""
                              : "md:items-end"
                          }`}
                        >
                          {/* Period */}
                          <motion.span
                            initial={{
                              opacity: 0,
                              x: index % 2 === 0 ? -10 : 10,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{
                              once: true,
                              amount: 0.3,
                            }}
                            transition={{
                              duration: 0.5,
                              delay: 0.15,
                            }}
                            className="
                              w-fit
                              rounded-full
                              border
                              border-[#E8C468]/20
                              bg-[#E8C468]/5
                              px-3.5
                              py-1
                              text-xs
                              font-medium
                              text-[#E8C468]
                              transition-all
                              duration-300
                              group-hover:border-[#E8C468]/40
                              group-hover:bg-[#E8C468]/10
                            "
                          >
                            {item.period}
                          </motion.span>

                          {/* Position & Company */}
                          <div>
                            <h3
                              className="
                                font-display
                                text-xl
                                font-semibold
                                text-white
                              "
                            >
                              {item.position}
                            </h3>

                            <p
                              className="
                                mt-1
                                text-sm
                                font-medium
                                text-slate-400
                              "
                            >
                              {item.company}
                            </p>
                          </div>
                        </div>

                        {/* ==================================================
                            DESCRIPTION
                        ================================================== */}

                        <motion.ul
                          layout
                          variants={descriptionVariants}
                          className={`
                            relative
                            mt-5
                            space-y-2.5
                            text-sm
                            leading-6
                            text-slate-400
                            ${
                              index % 2 === 0
                                ? "text-left"
                                : "md:text-right"
                            }
                          `}
                        >
                          {visibleItems.map((job, jobIndex) => (
                            <motion.li
                              layout
                              key={`${job}-${jobIndex}`}
                              initial={{
                                opacity: 0,
                                y: 8,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.35,
                                delay: jobIndex * 0.04,
                              }}
                              className={
                                index % 2 === 0
                                  ? "flex gap-2.5"
                                  : "flex gap-2.5 md:flex-row-reverse"
                              }
                            >
                              <span
                                className="
                                  mt-2
                                  h-1
                                  w-1
                                  shrink-0
                                  rounded-full
                                  bg-[#E8C468]/60
                                  transition-colors
                                  duration-300
                                  group-hover:bg-[#E8C468]
                                "
                              />

                              <span>{job}</span>
                            </motion.li>
                          ))}
                        </motion.ul>

                        {/* ==================================================
                            SHOW MORE / SHOW LESS
                        ================================================== */}

                        {hasMore && (
                          <motion.button
                            type="button"
                            onClick={() => toggle(index)}
                            whileHover={{
                              x: 3,
                            }}
                            whileTap={{
                              scale: 0.96,
                            }}
                            className="
                              relative
                              mt-4
                              text-xs
                              font-semibold
                              uppercase
                              tracking-wider
                              text-[#E8C468]
                              transition-colors
                              duration-300
                              hover:text-[#E8C468]/80
                            "
                          >
                            {isOpen
                              ? t.experience.showLess
                              : t.experience.showMore(
                                  item.description.length -
                                    COLLAPSED_COUNT
                                )}
                          </motion.button>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}