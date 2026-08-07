"use client";

import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageProvider";
import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent";

// ======================================================
// GRAIN TEXTURE
// ======================================================

const GRAIN_SVG =
  "data:image/svg+xml;base64," +
  btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120">
      <filter id="n">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="2"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#n)" />
    </svg>
  `);

// ======================================================
// INPUT STYLE
// ======================================================

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-[#E8C468]/50 focus:bg-white/[0.05] focus:shadow-[0_0_25px_rgba(232,196,104,0.05)]";

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

const contentContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

const contactItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const socialContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const socialVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const formItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ======================================================
// ICONS
// ======================================================

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.93 10.93 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.28ZM5.32 7.42a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.56V8.98H3.54v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.84 11.84 0 0 0 12.06 0C5.52 0 .2 5.32.2 11.86c0 2.09.55 4.13 1.6 5.93L.1 24l6.36-1.67a11.85 11.85 0 0 0 5.6 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.41-8.41ZM12.07 21.76h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.26C2.18 6.43 6.61 2 12.06 2c2.64 0 5.12 1.03 6.99 2.91a9.84 9.84 0 0 1 2.9 7c0 5.44-4.43 9.85-9.88 9.85Zm5.41-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

// ======================================================
// CONTACT
// ======================================================

export default function Contact() {
  const { t } = useLanguage();

  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const email = "jamaludin032000@gmail.com";

  const contactInfo = [
    {
      label: t.contact.info.email,
      value: email,
      href: `mailto:${email}`,
      copyable: true,
      icon: (
        <>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 7L10.94 12.56a1.85 1.85 0 0 0 2.12 0L21 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ),
    },
    {
      label: t.contact.info.phone,
      value: "+62 858-4889-1447",
      href: "tel:+6285848891447",
      icon: (
        <path
          d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1.5 1.5 0 0 1 1.54-.36c.96.32 1.99.49 3.05.49a1.5 1.5 0 0 1 1.5 1.5v3.5a1.5 1.5 0 0 1-1.5 1.5C11.72 21.81 2.19 12.28 2.19 4a1.5 1.5 0 0 1 1.5-1.5h3.5a1.5 1.5 0 0 1 1.5 1.5c0 1.06.17 2.09.49 3.05a1.5 1.5 0 0 1-.36 1.54l-2.2 2.2Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      label: t.contact.info.location,
      value: "Bekasi, Jawa Barat, Indonesia",
      icon: (
        <>
          <path
            d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="2.5" />
        </>
      ),
    },
  ];

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/jamaludin032000-cloud",
      icon: <GithubIcon />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: <LinkedinIcon />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ja.un21",
      icon: <InstagramIcon />,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/6285848891447",
      icon: <WhatsappIcon />,
    },
  ];

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      form.reset();

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0A0A0F]"
    >
      {/* Background */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 15% 20%, rgba(232,196,104,0.10), transparent 60%), radial-gradient(ellipse 700px 500px at 85% 75%, rgba(94,234,212,0.07), transparent 60%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${GRAIN_SVG})`,
        }}
      />

      {/* Floating Glow */}

      <motion.div
        className="pointer-events-none absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-[#E8C468]/[0.035] blur-[100px]"
        aria-hidden="true"
        animate={{
          x: [0, 60, 0],
          y: [0, 30, 0],
          scale: [1, 1.18, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[15%] right-[8%] h-64 w-64 rounded-full bg-[#5EEAD4]/[0.025] blur-[100px]"
        aria-hidden="true"
        animate={{
          x: [0, -40, 0],
          y: [0, -25, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 lg:px-12">

        {/* Header */}

        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8C468]/20 bg-[#E8C468]/5 px-4 py-1.5"
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
              className="h-1.5 w-1.5 rounded-full bg-[#E8C468]"
            />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#E8C468]/90">
              {t.contact.badge}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpSlow}
            className="font-display text-4xl font-semibold text-white lg:text-5xl"
          >
            {t.contact.heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400"
          >
            {t.contact.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#E8C468] to-transparent"
          />
        </motion.div>

        {/* Content Grid */}

        <motion.div
          variants={contentContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="grid gap-10 lg:grid-cols-5"
        >
          {/* Left Column */}

          <div className="space-y-4 lg:col-span-2">

            {/* Contact Info */}

            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 transition-all duration-300 hover:border-[#E8C468]/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-[rgba(232,196,104,0.1)]"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#E8C468]/0 blur-3xl transition-all duration-500 group-hover:bg-[#E8C468]/10"
                aria-hidden="true"
              />

              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={contactItemVariants}
                  className={`group/item relative flex items-center gap-4 rounded-xl p-4 transition-colors duration-300 hover:bg-white/5 ${
                    index !== contactInfo.length - 1
                      ? "border-b border-white/5"
                      : ""
                  }`}
                >
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
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E8C468]/20 bg-[#E8C468]/5 text-[#E8C468] transition-all duration-300 group-hover/item:border-[#E8C468]/40 group-hover/item:bg-[#E8C468]/10"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </svg>
                  </motion.div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block truncate text-sm text-slate-200 transition-colors hover:text-[#E8C468]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-slate-200">
                        {item.value}
                      </p>
                    )}
                  </div>

                  {item.copyable && (
                    <motion.button
                      type="button"
                      onClick={() => handleCopy(item.value)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="shrink-0 text-xs text-slate-400 transition-colors hover:text-[#E8C468]"
                    >
                      {copied
                        ? t.contact.form.copied
                        : t.contact.form.copy}
                    </motion.button>
                  )}
                </motion.div>
              ))}

              <div
                className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-gradient-to-r from-[#E8C468] via-[#5EEAD4] to-transparent transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </motion.div>

            {/* Socials */}

            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                },
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#E8C468]/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-[rgba(232,196,104,0.1)]"
            >
              <p className="mb-4 text-xs uppercase tracking-wider text-slate-500">
                {t.contact.socials}
              </p>

              <motion.div
                variants={socialContainer}
                className="flex gap-3"
              >
                {socials.map((item) => (
                  <motion.a
                    key={item.name}
                    variants={socialVariants}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    whileHover={{
                      scale: 1.1,
                      y: -4,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-[#E8C468]/40 hover:bg-[#E8C468]/5 hover:text-[#E8C468] hover:shadow-lg hover:shadow-[rgba(232,196,104,0.1)]"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>

              <div
                className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-[#E8C468] via-[#5EEAD4] to-transparent transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </motion.div>
          </div>

          {/* Form */}

          <motion.form
            variants={cardVariants}
            onSubmit={handleSubmit}
            className="group relative overflow-hidden space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#E8C468]/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-[rgba(232,196,104,0.1)] sm:p-8 lg:col-span-3"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#E8C468]/0 blur-3xl transition-all duration-500 group-hover:bg-[#E8C468]/10"
              aria-hidden="true"
            />

            <div
              className="contact-form-shine pointer-events-none absolute inset-0"
              aria-hidden="true"
            />

            <div className="relative z-10">

              {/* Name */}

              <motion.div variants={formItemVariants}>
                <label className="mb-2 block text-xs uppercase tracking-wider text-slate-500">
                  {t.contact.form.placeholders.name}
                </label>

                <input
                  name="name"
                  type="text"
                  placeholder={t.contact.form.placeholders.name}
                  className={inputClass}
                  required
                />
              </motion.div>

              {/* Email */}

              <motion.div
                variants={formItemVariants}
                className="mt-5"
              >
                <label className="mb-2 block text-xs uppercase tracking-wider text-slate-500">
                  {t.contact.form.placeholders.email}
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder={t.contact.form.placeholders.email}
                  className={inputClass}
                  required
                />
              </motion.div>

              {/* Subject */}

              <motion.div
                variants={formItemVariants}
                className="mt-5"
              >
                <label className="mb-2 block text-xs uppercase tracking-wider text-slate-500">
                  {t.contact.form.placeholders.subject}
                </label>

                <input
                  name="subject"
                  type="text"
                  placeholder={t.contact.form.placeholders.subject}
                  className={inputClass}
                  required
                />
              </motion.div>

              {/* Message */}

              <motion.div
                variants={formItemVariants}
                className="mt-5"
              >
                <label className="mb-2 block text-xs uppercase tracking-wider text-slate-500">
                  {t.contact.form.placeholders.message}
                </label>

                <textarea
                  name="message"
                  rows={6}
                  placeholder={t.contact.form.placeholders.message}
                  className={`${inputClass} resize-none`}
                  required
                />
              </motion.div>

              {/* Submit */}

              <motion.button
                variants={formItemVariants}
                type="submit"
                disabled={status !== "idle"}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#E8C468] py-3 font-semibold text-[#0A0A0F] transition-all duration-300 hover:bg-[#E8C468]/90 hover:shadow-lg hover:shadow-[rgba(232,196,104,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" && (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="h-4 w-4 rounded-full border-2 border-[#0A0A0F]/30 border-t-[#0A0A0F]"
                  />
                )}

                {status === "idle" && t.contact.form.send}
                {status === "sending" && t.contact.form.sending}
                {status === "sent" && t.contact.form.success}
              </motion.button>
            </div>

            <div
              className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-gradient-to-r from-[#E8C468] via-[#5EEAD4] to-transparent transition-transform duration-500 group-hover:scale-x-100"
              aria-hidden="true"
            />
          </motion.form>
        </motion.div>
      </div>

      {/* Shine Animation */}

      <style jsx>{`
        .contact-form-shine {
          opacity: 0;
          transform: translateX(-120%);

          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255, 255, 255, 0.045) 45%,
            transparent 70%
          );

          transition:
            opacity 600ms ease,
            transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .group:hover .contact-form-shine {
          opacity: 1;
          transform: translateX(120%);
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-form-shine {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}