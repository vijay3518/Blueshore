

type LogoProps = {
  className?: string;
  variant?: "full" | "emblem";
  /** Kept for existing call sites; switches text for dark footer/menu usage. */
  inverted?: boolean;
  /** Larger mark for footer / hero */
  size?: "nav" | "hero" | "footer";
};

export function Logo({
  className = "",
  variant = "full",
  inverted = false,
  size = "nav",
}: LogoProps) {
  if (variant === "emblem") {
    return (
      <div
        className={`relative shrink-0 overflow-hidden rounded-xl bg-white/95 p-1.5 shadow-md shadow-black/15 ring-1 ring-white/25 ${className}`}
        style={{
          width: size === "hero" ? 56 : 44,
          height: size === "hero" ? 56 : 44,
        }}
      >
        <img
          src="images/blueshore-logo-full.png"
          alt=""
    
          sizes="64px"
          className="object-contain"
        
        />
      </div>
    );
  }

  const markDims =
    size === "footer"
      ? "relative h-24 w-28"
      : size === "hero"
        ? "relative h-24 w-28"
        : "relative h-12 w-14 sm:h-14 sm:w-16";

  const wordmarkSize =
    size === "footer"
      ? "text-4xl"
      : size === "hero"
        ? "text-4xl"
        : "text-2xl sm:text-3xl";

  const overseasSize =
    size === "footer"
      ? "text-sm tracking-[0.44em]"
      : size === "hero"
        ? "text-sm tracking-[0.44em]"
        : "text-[10px] tracking-[0.36em] sm:text-xs";

  return (
    <div
      data-inverted={inverted || undefined}
      className={`flex shrink-0 items-center gap-2.5 ${className}`}
    >
      <div className={markDims}>
        <img
          src="images/blueshore-logo-full.png"
          alt=""
          
          sizes="(max-width: 640px) 64px, 112px"
          className="object-contain"
          
        />
      </div>
      <div className="leading-none" aria-label="BlueShore Overseas">
        <div className={`${wordmarkSize} font-display font-semibold tracking-normal`}>
          <span className={inverted ? "text-white" : "text-[#15265f]"}>Blue</span>
          <span className="text-[#1687d9]">Shore</span>
        </div>
        <div className={`mt-1 font-black uppercase text-[#c68b20] ${overseasSize}`}>
          Overseas
        </div>
      </div>
    </div>
  );
} 