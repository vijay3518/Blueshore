
type LogoProps = {
  className?: string;
  variant?: "full" | "emblem";
  /** Kept for existing call sites; switches wordmark text colour for dark backgrounds. */
  inverted?: boolean;
  /** Larger mark for footer / hero */
  size?: "nav" | "hero" | "footer";
};

/** Transparent-background version of the mark (generated from blueshore-logo-full.png). */
const LOGO_SRC = "/images/blueshore-logo-transparent.png";

export function Logo({
  className = "",
  variant = "full",
  inverted = false,
  size = "nav",
}: LogoProps) {
  /* ── Size tokens ────────────────────────────────────────────────── */
  const isHeroOrFooter = size === "footer" || size === "hero";
  
  const emblemSize = isHeroOrFooter ? "h-20 w-20" : "h-12 w-12 sm:h-14 sm:w-14";
  
  const wordmarkSize = isHeroOrFooter ? "text-4xl" : "text-2xl sm:text-3xl";
  
  const overseasSize = isHeroOrFooter 
    ? "text-base tracking-[0.5em]" 
    : "text-[11px] tracking-[0.4em] sm:text-xs";

  const content = (
    <>
      {/* Actual logo mark (the "B" emblem) */}
      <div className={`relative shrink-0 transition-transform duration-500 hover:scale-110 ${emblemSize}`}>
        <img
          src={LOGO_SRC}
          alt="BlueShore Emblem"
          className="h-full w-full object-contain filter drop-shadow-lg"
        />
      </div>

      {variant === "full" && (
        <div className="leading-none select-none" aria-label="BlueShore Overseas">
          <div className={`${wordmarkSize} font-display font-bold tracking-tight`}>
            <span className={inverted ? "text-white" : "text-[#0a1f5c]"}>Blue</span>
            <span className="text-[#1565c0]">Shore</span>
          </div>
          <div className={`mt-1.5 font-black uppercase text-[#c68b20] ${overseasSize}`}>
            Overseas
          </div>
        </div>
      )}
    </>
  );

  return (
    <div
      data-inverted={inverted || undefined}
      className={`flex shrink-0 items-center gap-3 ${className}`}
    >
      {content}
    </div>
  );
}