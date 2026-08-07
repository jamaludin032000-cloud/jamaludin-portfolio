"use client";

import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageProvider";

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  description: string;
};

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

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const periodVariants = (isRight: boolean): Variants => ({
  hidden: {
    opacity: 0,
    x: isRight ? -12 : 12,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

// ======================================================
// EDUCATION
// ======================================================

export default function Education() {
  const { t } = useLanguage();

  const items = t.education.items as EducationItem[];

  return (
    <section
      id="education"
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
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 15% 20%, rgba(232,196,104,0.10), transparent 60%), radial-gradient(ellipse 700px 500px at 85% 75%, rgba(94,234,212,0.07), transparent 60%)",
        }}
      />

      {/* Floating Glow */}
      <motion.div
        animate={{
          x: [0, 45, 0],
          y: [0, 25, 0],
          scale: [1, 1.12, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[20%]
          h-72
          w-72
          rounded-full
          bg-[#E8C468]/[0.035]
          blur-[100px]
        "
        aria-hidden="true"
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          pointer-events-none
          absolute
          right-[8%]
          bottom-[15%]
          h-64
          w-64
          rounded-full
          bg-[#5EEAD4]/2.5
          blur-[100px]
        "
        aria-hidden="true"
      />

      {/* Dot Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.15]
        "
        aria-hidden="true"
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
          opacity-[0.035]
          mix-blend-overlay
        "
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 0 0, rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 0.5px, transparent 0.5px, transparent 2px)",
          backgroundSize: "5px 5px",
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
              bg-[#E8C468]/5
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
              aria-hidden="true"
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
              {t.education.badge}
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
            {t.education.title}
          </motion.h2>

          {/* Subtitle */}

          <motion.p
            variants={headerVariants}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              md:text-base
            "
          >
            {t.education.subtitle}
          </motion.p>

          {/* Divider */}

          <motion.div
            variants={headerVariants}
            className="
              mx-auto
              mt-6
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
              bottom-2
              left-3.75
              top-2
              w-px
              bg-linear-to-b
              from-[#E8C468]/60
              via-white/10
              to-transparent
              md:left-1/2
              md:-translate-x-1/2
            "
            aria-hidden="true"
          />

          {/* Timeline Items */}

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
            {items.map((item, index) => {
              const isRight = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.institution}-${item.period}`}
                  variants={timelineItemVariants}
                  className="
                    relative
                    pl-10
                    md:pl-0
                  "
                >
                  {/* ==================================================
                      NODE
                  ================================================== */}

                  <motion.div
                    variants={nodeVariants}
                    className="
                      absolute
                      left-0
                      top-2
                      z-10
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
                    <motion.span
                      animate={{
                        opacity: [0.65, 1, 0.65],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      className="
                        font-display
                        text-[10px]
                        font-semibold
                        text-[#E8C468]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.span>
                  </motion.div>

                  {/* Node Glow */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                    }}
                    whileInView={{
                      opacity: [0.15, 0.35, 0.15],
                      scale: [0.85, 1.15, 0.85],
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4 + index * 0.15,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      -left-1.25
                      -top-0.75
                      h-10.5
                      w-10.5
                      rounded-full
                      bg-[#E8C468]/10
                      blur-md
                      md:left-[calc(50%-21px)]
                    "
                    aria-hidden="true"
                  />

                  {/* ==================================================
                      GRID
                  ================================================== */}

                  <div
                    className="
                      md:grid
                      md:grid-cols-2
                      md:gap-10
                    "
                  >
                    <div
                      className={
                        isRight
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
                          education-card
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/3
                          p-7
                        "
                      >
                        {/* Card Shine */}

                        <motion.div
                          initial={{
                            x: "-120%",
                          }}
                          whileHover={{
                            x: "120%",
                          }}
                          transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-linear-to-r
                            from-transparent
                            via-white/4.5
                            to-transparent
                          "
                          aria-hidden="true"
                        />

                        {/* Corner Glow */}

                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.8,
                          }}
                          whileHover={{
                            opacity: 1,
                            scale: 1.25,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="
                            pointer-events-none
                            absolute
                            -right-12
                            -top-12
                            h-32
                            w-32
                            rounded-full
                            bg-[#E8C468]/10
                            blur-3xl
                          "
                          aria-hidden="true"
                        />

                        {/* Card Content */}

                        <div className="relative z-10">
                          {/* Header */}

                          <div
                            className={`
                              flex
                              flex-col
                              gap-3
                              ${
                                !isRight
                                  ? "md:items-end"
                                  : ""
                              }
                            `}
                          >
                            {/* Period */}

                            <motion.span
                              variants={periodVariants(isRight)}
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

                            {/* Institution */}

                            <motion.div
                              variants={contentVariants}
                            >
                              <h3
                                className="
                                  font-display
                                  text-xl
                                  font-semibold
                                  text-white
                                  lg:text-2xl
                                "
                              >
                                {item.institution}
                              </h3>

                              <p
                                className="
                                  mt-1
                                  text-sm
                                  font-medium
                                  text-[#E8C468]
                                "
                              >
                                {item.degree}
                              </p>
                            </motion.div>
                          </div>

                          {/* Description */}

                          <motion.p
                            variants={contentVariants}
                            className={`
                              relative
                              mt-5
                              text-sm
                              leading-7
                              text-slate-400
                              ${
                                isRight
                                  ? "text-left"
                                  : "md:text-right"
                              }
                            `}
                          >
                            {item.description}
                          </motion.p>
                        </div>
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