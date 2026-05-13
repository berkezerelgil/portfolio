"use client";

import { Reveal } from "./Reveal";
import { timeline } from "@/lib/data";

export function Timeline() {
  return (
    <section id="timeline" className="section">
      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">05 — Career journey</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-display-lg font-semibold tracking-tight">
              How I got here, year by year.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A short version of a longer story. Each step taught me something
              I&apos;m still using — and the curve is steeper than ever.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2"
          />

          <ol className="space-y-10">
            {timeline.map((t, i) => {
              const align = i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";
              return (
                <li key={t.year + t.title} className="relative">
                  <div className={`flex flex-col gap-6 md:items-center ${align}`}>
                    {/* Dot */}
                    <div
                      aria-hidden
                      className="absolute left-5 top-2 z-10 -translate-x-1/2 md:left-1/2"
                    >
                      <div className="h-3 w-3 rounded-full bg-accent shadow-glow ring-4 ring-background" />
                    </div>

                    {/* Year (alternating side) */}
                    <div className="hidden flex-1 md:block">
                      <Reveal y={12}>
                        <div
                          className={`flex ${
                            i % 2 === 0 ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12"
                          }`}
                        >
                          <div className="text-5xl font-semibold tracking-tight text-muted-foreground/30">
                            {t.year}
                          </div>
                        </div>
                      </Reveal>
                    </div>

                    {/* Card */}
                    <div className="flex-1 pl-12 md:pl-0">
                      <Reveal y={12} delay={0.05}>
                        <div
                          className={`card-shell p-5 md:p-6 ${
                            i % 2 === 0 ? "md:ml-12" : "md:mr-12"
                          }`}
                        >
                          <div className="flex items-baseline justify-between gap-3">
                            <h3 className="text-base font-medium tracking-tight">
                              {t.title}
                            </h3>
                            <span className="text-xs text-muted-foreground md:hidden">
                              {t.year}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-accent">{t.place}</p>
                          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                            {t.detail}
                          </p>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
