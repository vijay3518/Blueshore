import { Logo } from "@/components/brand/Logo";
import { FancyFadingFooter } from "@/components/sections/AnimationKit";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

const SERVICES = [
  "Strategic Profile Evaluation",
  "University Blueprinting",
  "Application Intelligence",
  "Visa Command Centre",
] as const;

const CONTACT = {
  phoneDisplay: "+91 8309629331 , 
    9381326651",
  phoneHref: "tel:+91 8309629331",
  email: "info@blueshoreoverseas.com",
  emailHref: "mailto:info@blueshoreoverseas.com",
  locations: "Bengaluru / Mumbai / London / Dubai",
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <FancyFadingFooter>
      <footer className="relative overflow-hidden bg-white px-4 pb-12 pt-24 text-[#07111f] sm:px-8 lg:px-12 border-t border-slate-100">
      {/* Subtle Luminous Background Accents */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#f4a800]/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#0c6b6a]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.2fr_0.6fr_0.6fr_1fr]">
        <div className="space-y-8">
          <Logo size="footer" />
          <p className="max-w-sm text-lg font-bold leading-relaxed text-[#07111f]/90">
            Strategy over Counselling. <br />
            <span className="text-[#f4a800]">Arrival before Departure.</span>
          </p>
          <p className="max-w-sm text-sm leading-7 text-[#07111f]/60">
            The BlueShore method treats every student file like a strategic route map, 
            ensuring your international education is a decision system, not just a package.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f4a800]">
            Command
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  className="text-[#07111f]/70 transition-colors hover:text-[#f4a800]"
                  href={link.href}
                  scroll={false}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f4a800]">
            The Method
          </p>
          <ul className="mt-8 space-y-4 text-sm text-[#07111f]/70">
            {SERVICES.map((service) => (
              <li key={service} className="hover:text-[#07111f] transition-colors">{service}</li>
            ))}
          </ul>
        </div>

        {/* HIGHLIGHT: India HQ Section */}
        <div className="space-y-10">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f4a800]">
              Strategic HQ
            </p>
            <div className="mt-8 flex items-center gap-6 group">
              <div className="relative h-14 w-20 flex-none overflow-hidden rounded-lg border border-[#07111f]/10 shadow-lg">
                <img 
                  src="https://flagcdn.com/w160/in.png" 
                  alt="India Flag" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-green-500/10" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold tracking-tight text-[#07111f]">India Operations</p>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f4a800]" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#07111f]/60">Active & Online</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#07111f]/40">
              Connect
            </p>
            <div className="mt-6 space-y-4 text-sm text-[#07111f]/70">
              <a className="block transition-colors hover:text-[#f4a800]" href={CONTACT.phoneHref}>
                {CONTACT.phoneDisplay}
              </a>
              <a className="block transition-colors hover:text-[#f4a800]" href={CONTACT.emailHref}>
                {CONTACT.email}
              </a>
              <p className="text-[#07111f]/50">{CONTACT.locations}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mx-auto mt-24 flex max-w-7xl flex-col gap-8 border-t border-[#07111f]/10 pt-12 text-[10px] font-black uppercase tracking-[0.2em] text-[#07111f]/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} BlueShore Overseas Intelligence. Built for Strategy.</p>
        <div className="flex flex-wrap gap-8">
          <Link className="transition-colors hover:text-[#f4a800]" href="/contact" scroll={false}>
            Request Audit
          </Link>
          <span className="text-[#07111f]/40">
            Privacy Protocol
          </span>
          <span className="text-[#07111f]/40">
            Legal
          </span>
        </div>
      </div>
      </footer>
    </FancyFadingFooter>
  );
}
