"use client";

import { Reveal } from "./Reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">02 — Toolkit</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-display-lg font-semibold tracking-tight">
                The tools I think with.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I&apos;m comfortable across the stack, but I&apos;m a believer in
                depth. These are the tools I keep returning to — and the ones I&apos;d
                pick if I had to ship something tonight.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <div className="card-shell h-full p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground">
                    {group.title}
                  </h3>
                  <span className="text-xs text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="chip transition hover:border-accent/50 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
