function SkeletonBlock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`skeleton-shimmer rounded-sm bg-white/[0.12] ring-1 ring-white/10 ${className}`}
      aria-hidden
    />
  );
}

function DarkSkeletonBlock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`skeleton-shimmer rounded-sm bg-[#07111f]/10 ring-1 ring-[#07111f]/10 ${className}`}
      aria-hidden
    />
  );
}

export function SiteSkeletonPreview({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative isolate overflow-hidden border border-white/15 bg-[#07111f]/[0.72] p-6 text-white shadow-[0_32px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(33,150,243,0.16),transparent_38%,rgba(244,168,0,0.14)),radial-gradient(circle_at_72%_18%,rgba(244,168,0,0.2),transparent_28%)]" />
      <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <SkeletonBlock className="h-10 w-10 rounded-full bg-[#f4a800]/[0.45]" />
          <div className="space-y-2">
            <SkeletonBlock className="h-3 w-36" />
            <SkeletonBlock className="h-2 w-24 bg-white/[0.08]" />
          </div>
        </div>
        <SkeletonBlock className="h-8 w-24 bg-[#f4a800]/[0.35]" />
      </div>

      <div className="grid gap-5">
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-4">
          <div className="space-y-3">
            <SkeletonBlock className="h-5 w-4/5 bg-white/[0.18]" />
            <SkeletonBlock className="h-5 w-2/3 bg-white/[0.14]" />
            <SkeletonBlock className="h-3 w-full bg-white/[0.08]" />
            <SkeletonBlock className="h-3 w-5/6 bg-white/[0.08]" />
          </div>
          <SkeletonBlock className="h-32 bg-[#2196f3]/[0.18]" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <SkeletonBlock className="h-20 bg-white/10" />
          <SkeletonBlock className="h-20 bg-white/10" />
          <SkeletonBlock className="h-20 bg-white/10" />
        </div>

        <div className="grid gap-3">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="grid grid-cols-[44px_1fr_72px] items-center gap-3">
              <SkeletonBlock className="h-11 w-11 rounded-full bg-[#f4a800]/[0.22]" />
              <div className="space-y-2">
                <SkeletonBlock className="h-3 w-full bg-white/10" />
                <SkeletonBlock className="h-2 w-2/3 bg-white/[0.08]" />
              </div>
              <SkeletonBlock className="h-7 bg-[#2196f3]/[0.18]" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[1fr_96px] gap-3 pt-2">
          <SkeletonBlock className="h-12 bg-white/10" />
          <SkeletonBlock className="h-12 bg-[#f4a800]/[0.35]" />
        </div>
      </div>
    </div>
  );
}

export function WebsiteLoadingSkeleton() {
  return (
    <main
      className="min-h-screen bg-[#f4f0e8] text-[#07111f]"
      aria-busy="true"
      aria-label="Loading BlueShore page"
    >
      <header className="border-b border-slate-200 bg-white px-4 py-4 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <DarkSkeletonBlock className="h-11 w-11 rounded-full bg-[#1565c0]/15" />
            <div className="space-y-2">
              <DarkSkeletonBlock className="h-3 w-40 bg-[#07111f]/[0.12]" />
              <DarkSkeletonBlock className="h-2 w-28" />
            </div>
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            {[0, 1, 2, 3, 4].map((item) => (
              <DarkSkeletonBlock key={item} className="h-3 w-20" />
            ))}
          </div>
          <DarkSkeletonBlock className="hidden h-10 w-40 bg-[#f4a800]/[0.35] md:block" />
        </div>
      </header>

      <section className="bg-[#07111f] px-4 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid min-h-[72vh] max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <SkeletonBlock className="h-9 w-64 bg-[#f4a800]/30" />
            <div className="space-y-4">
              <SkeletonBlock className="h-14 w-full max-w-3xl bg-white/[0.18]" />
              <SkeletonBlock className="h-14 w-4/5 max-w-2xl bg-white/[0.14]" />
              <SkeletonBlock className="h-14 w-3/5 max-w-xl bg-white/10" />
            </div>
            <div className="space-y-3">
              <SkeletonBlock className="h-4 w-full max-w-2xl bg-white/10" />
              <SkeletonBlock className="h-4 w-5/6 max-w-xl bg-white/[0.08]" />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <SkeletonBlock className="h-14 w-full bg-[#f4a800]/[0.35] sm:w-56" />
              <SkeletonBlock className="h-14 w-full bg-white/10 sm:w-52" />
            </div>
            <div className="grid max-w-2xl grid-cols-3 gap-4 border-y border-white/10 py-6">
              <SkeletonBlock className="h-16 bg-white/10" />
              <SkeletonBlock className="h-16 bg-white/10" />
              <SkeletonBlock className="h-16 bg-white/10" />
            </div>
          </div>

          <SiteSkeletonPreview />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="border border-slate-100 bg-white p-7 shadow-sm">
              <DarkSkeletonBlock className="h-10 w-16 bg-[#f4a800]/25" />
              <DarkSkeletonBlock className="mt-10 h-6 w-3/4 bg-[#07111f]/[0.12]" />
              <DarkSkeletonBlock className="mt-5 h-3 w-full" />
              <DarkSkeletonBlock className="mt-3 h-3 w-5/6" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
