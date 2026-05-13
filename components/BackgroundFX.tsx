"use client";

export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial glow */}
      <div className="absolute left-1/2 top-[-30%] h-[800px] w-[800px] -translate-x-1/2 bg-radial-fade" />

      {/* Bottom soft fade */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />

      {/* Floating blurs */}
      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-32 top-2/3 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      {/* Noise */}
      <div className="absolute inset-0 noise" />
    </div>
  );
}
