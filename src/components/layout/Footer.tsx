import { Logo } from "@/components/brand/Logo";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

const SERVICES = [
  "Profile evaluation",
  "University shortlisting",
  "Application documents",
  "Visa readiness",
] as const;

const CONTACT = {
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "hello@blueshoreoverseas.com",
  emailHref: "mailto:hello@blueshoreoverseas.com",
  locations: "Bengaluru / Mumbai / Dubai / London",
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#07111f] px-4 py-14 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.7fr_0.8fr_1fr]">
        <div>
          <Logo size="footer" inverted />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/[0.66]">
            Your Dream. Our Guidance. Global Future.
          </p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/[0.54]">
            BlueShore Overseas helps students turn international education goals into a
            clear route from profile review to visa-ready departure.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f4a800]">
            Navigate
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link className="text-white/[0.68] transition hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f4a800]">
            Services
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/[0.68]">
            {SERVICES.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f4a800]">
            Contact
          </p>
          <div className="mt-5 space-y-3 text-sm text-white/[0.68]">
            <a className="block transition hover:text-white" href={CONTACT.phoneHref}>
              {CONTACT.phoneDisplay}
            </a>
            <a className="block transition hover:text-white" href={CONTACT.emailHref}>
              {CONTACT.email}
            </a>
            <p>{CONTACT.locations}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/[0.12] pt-7 text-xs text-white/[0.46] sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {year} BlueShore Overseas. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          <Link className="transition hover:text-white" href="/#contact">
            Talk to an advisor
          </Link>
          <a className="transition hover:text-white" href="#">
            Privacy
          </a>
          <a className="transition hover:text-white" href="#">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
