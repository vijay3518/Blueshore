"use client";

import { hash01 } from "@/lib/hash01";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const DESTINATIONS = [
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "United Arab Emirates",
  "Singapore",
  "Ireland",
  "New Zealand",
  "Other",
];

export function ContactBannerSection() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("success");
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-bs-navy px-4 py-24 text-white sm:px-8 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1440 120%27%3E%3Cpath fill=%27%23F4A800%27 fill-opacity=%270.35%27 d=%27M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z%27/%3E%3C/svg%3E')] bg-cover bg-top"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-bs-gold">
          Contact BlueShore
        </p>
        <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Your Global Journey Starts Today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 sm:text-base">
          Share your aspirations—we&apos;ll respond with a counselling roadmap within one business day.
        </p>

        <motion.form
          layout
          onSubmit={onSubmit}
          className="mx-auto mt-12 rounded-3xl border border-white/15 bg-white/5 p-5 text-left shadow-2xl backdrop-blur-md sm:p-6"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative flex flex-col items-center gap-4 py-10 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-bs-gold text-bs-navy shadow-lg">
                <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden>
                  <path
                    d="M6 12 L10 16 L18 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-display text-xl font-semibold sm:text-2xl">
                Thank you—your counsellor will reach out shortly.
              </p>
              <ConfettiMini />
            </motion.div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr_auto] lg:items-end">
              <label className="flex flex-col gap-2 text-sm font-medium text-white/85">
                Full Name
                <input
                  required
                  name="name"
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white outline-none ring-bs-gold/40 placeholder:text-white/40 focus:ring-2"
                  placeholder="Aisha Kapoor"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-white/85">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white outline-none ring-bs-gold/40 placeholder:text-white/40 focus:ring-2"
                  placeholder="you@email.com"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-white/85">
                Phone
                <input
                  required
                  type="tel"
                  name="phone"
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white outline-none ring-bs-gold/40 placeholder:text-white/40 focus:ring-2"
                  placeholder="+91 ..."
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-white/85">
                Destination Country
                <select
                  required
                  name="destination"
                  className="rounded-xl border border-white/20 bg-[#0d236d] px-4 py-3 text-base text-white outline-none ring-bs-gold/40 focus:ring-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select country
                  </option>
                  {DESTINATIONS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </label>
              <div className="md:col-span-2 lg:col-span-1">
                <button
                  type="submit"
                  className="w-full rounded-full bg-bs-gold px-6 py-4 text-base font-semibold text-bs-navy shadow-xl shadow-black/30 transition hover:bg-[#ffc53d] lg:whitespace-nowrap"
                >
                  Get Free Counselling
                </button>
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function ConfettiMini() {
  const bits = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: hash01(i, 1) * 80 - 40,
        y: hash01(i, 2) * -70 - 10,
        d: hash01(i, 3) * 0.6 + 0.4,
        c: hash01(i, 4) > 0.5 ? "#F4A800" : "#2196F3",
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {bits.map((b) => (
        <motion.span
          key={b.id}
          className="absolute left-1/2 top-1/2 h-2 w-2 rounded-[2px]"
          style={{ backgroundColor: b.c }}
          initial={{ opacity: 1, x: 0, y: 0, scale: b.d }}
          animate={{ opacity: 0, x: b.x * 6, y: b.y * 4, rotate: 420 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
