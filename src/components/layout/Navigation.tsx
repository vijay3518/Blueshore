"use client";

import { Logo } from "@/components/brand/Logo";
import { ButtonCelebration } from "@/components/ButtonCelebration";
import { MagneticButton } from "@/components/sections/AnimationKit";
import { getSectionIdFromPathname, NAV_LINKS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const SECTION_IDS = NAV_LINKS.map((l) => l.sectionId);

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const hasMounted = useRef(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);

      if (!el) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        {
          rootMargin: "-45% 0px -45% 0px",
          threshold: 0.02,
        },
      );

      io.observe(el);

      observers.push(io);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    const sectionId = getSectionIdFromPathname(pathname);

    if (!sectionId) return;

    const behavior: ScrollBehavior = hasMounted.current ? "smooth" : "auto";
    const frames: number[] = [];

    hasMounted.current = true;

    frames[0] = window.requestAnimationFrame(() => {
      frames[1] = window.requestAnimationFrame(() => {
        const target = document.getElementById(sectionId);

        if (!target) return;

        setActive(sectionId);

        if (sectionId === "home") {
          window.scrollTo({ top: 0, behavior });
          return;
        }

        target.scrollIntoView({ block: "center", behavior });
      });
    });

    return () => frames.forEach((frame) => window.cancelAnimationFrame(frame));
  }, [pathname]);

  const underlineLayoutId = useMemo(() => "nav-underline", []);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 border-b bg-white transition-colors duration-300 ${
          scrolled ? "border-slate-200 shadow-sm" : "border-transparent shadow-none"
        }`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8"
          aria-label="Primary"
        >
          <Link
            href="/"
            scroll={false}
            className="shrink-0"
            aria-label="BlueShore Overseas home"
          >
            <Logo inverted={false} />
          </Link>

          <ul className="relative hidden items-center gap-3 lg:flex">
            {NAV_LINKS.map((link) => {
              const id = link.sectionId;

              const isActive = active === id;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll={false}
                    className={`relative px-1 py-2 text-xs font-black uppercase tracking-[0.16em] transition-colors ${
                      isActive
                        ? "text-[#c68b20]"
                        : "text-[#07111f] hover:text-[#c68b20]"
                    }`}
                  >
                    {link.label}

                    {isActive ? (
                      <motion.span
                        layoutId={underlineLayoutId}
                        className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#c68b20]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <MagneticButton>
              <Link
                href="/contact"
                scroll={false}
                className="btn-fx hidden bg-[#f4a800] px-5 py-2.5 text-sm font-black text-[#07111f] shadow-xl transition hover:bg-[#ffc53d] md:inline-flex"
              >
                <span className="btn-fx-content">Get Free Counselling</span>
                <ButtonCelebration variant="confetti" />
              </Link>
            </MagneticButton>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center border border-slate-200 bg-slate-50 text-[#07111f] transition lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Open menu</span>

              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                {open ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-[#07111f]/40 backdrop-blur-sm"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />

            <motion.nav
              className="absolute right-0 top-0 flex h-full w-[min(100%,390px)] flex-col bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 34,
              }}
            >
              <div className="relative flex flex-1 flex-col gap-8 p-8 pt-24">
                <Logo />

                <ul className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        scroll={false}
                        className="block border-b border-slate-200 px-1 py-4 text-lg font-semibold text-[#07111f] hover:text-[#c68b20]"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  scroll={false}
                  className="btn-fx mt-auto bg-[#f4a800] px-5 py-3 text-center text-base font-black text-[#07111f]"
                  onClick={() => setOpen(false)}
                >
                  <span className="btn-fx-content">Get Free Counselling</span>
                  <ButtonCelebration variant="confetti" />
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
