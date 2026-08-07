"use client";

import { useLanguage } from "@/lib/LanguageProvider";
import { useState } from "react";

type Status = "idle" | "sending" | "sent";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-colors duration-300 focus:border-amber-300/50";

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
          {/* Email */}
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
        <>
          {/* Phone */}
          <path
            d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1.5 1.5 0 0 1 1.54-.36c.96.32 1.99.49 3.05.49a1.5 1.5 0 0 1 1.5 1.5v3.5a1.5 1.5 0 0 1-1.5 1.5C11.72 21.81 2.19 12.28 2.19 4a1.5 1.5 0 0 1 1.5-1.5h3.5a1.5 1.5 0 0 1 1.5 1.5c0 1.06.17 2.09.49 3.05a1.5 1.5 0 0 1-.36 1.54l-2.2 2.2Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ),
    },

    {
      label: t.contact.info.location,
      value: "Bekasi, Jawa Barat, Indonesia",
      icon: (
        <>
          {/* Location */}
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
      href: "https://github.com/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.93 10.93 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      ),
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.28ZM5.32 7.42a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.56V8.98H3.54v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
        </svg>
      ),
    },

    {
      name: "Instagram",
      href: "https://www.instagram.com/ja.un21",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
          />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },

    {
      name: "WhatsApp",
      href: "https://wa.me/6285848891447",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.84 11.84 0 0 0 12.06 0C5.52 0 .2 5.32.2 11.86c0 2.09.55 4.13 1.6 5.93L.1 24l6.36-1.67a11.85 11.85 0 0 0 5.6 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.41-8.41ZM12.07 21.76h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.26C2.18 6.43 6.61 2 12.06 2c2.64 0 5.12 1.03 6.99 2.91a9.84 9.84 0 0 1 2.9 7c0 5.44-4.43 9.85-9.88 9.85Zm5.41-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      ),
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
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-300/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-300/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-amber-300/20 bg-amber-300/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-amber-200">
            {t.contact.badge}
          </span>

          <h2 className="mt-6 font-display text-4xl font-semibold text-white lg:text-5xl">
            {t.contact.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            {t.contact.description}
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* CONTACT INFO */}
          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={`group flex items-center gap-4 rounded-xl p-4 transition-colors duration-300 hover:bg-white/5 ${
                    index !== contactInfo.length - 1
                      ? "border-b border-white/5"
                      : ""
                  }`}
                >
                  {/* ICON */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-300/20 text-amber-200">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      className="h-5 w-5"
                    >
                      {item.icon}
                    </svg>
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block truncate text-sm text-slate-200 transition-colors hover:text-amber-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-slate-200">
                        {item.value}
                      </p>
                    )}
                  </div>

                  {/* COPY */}
                  {item.copyable && (
                    <button
                      type="button"
                      onClick={() => handleCopy(item.value)}
                      className="shrink-0 text-xs text-slate-400 transition-colors hover:text-amber-300"
                    >
                      {copied
                        ? t.contact.form.copied
                        : t.contact.form.copy}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* SOCIALS */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="mb-4 text-xs uppercase tracking-wider text-slate-500">
                {t.contact.socials}
              </p>

              <div className="flex gap-3">
                {socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sm font-medium text-slate-400 transition-all duration-300 hover:border-amber-300/40 hover:bg-amber-300/5 hover:text-amber-300"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:col-span-3"
          >
            {/* NAME */}
            <div>
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
            </div>

            {/* EMAIL */}
            <div>
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
            </div>

            {/* SUBJECT */}
            <div>
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
            </div>

            {/* MESSAGE */}
            <div>
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
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full rounded-xl bg-amber-300 py-3 font-semibold text-slate-950 transition-all duration-300 hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "idle" && t.contact.form.send}
              {status === "sending" && t.contact.form.sending}
              {status === "sent" && t.contact.form.success}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
