"use client";

import { Reveal } from "./Reveal";
import { leadership } from "@/lib/data";
import { Users } from "lucide-react";

export function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">04 — Leadership &amp; community</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-display-lg font-semibold tracking-tight">
              Building people, not just products.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The best work I&apos;ve done has happened around tables — with
              students, mentors, and friends willing to disagree well. Here&apos;s
              where I show up beyond the keyboard.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {leadership.map((l, i) => (
            <Reveal key={l.role + l.org} delay={i * 0.05}>
              <div className="card-shell h-full p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/60 text-accent">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="text-base font-medium tracking-tight">
                        {l.role}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {l.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-accent">{l.org}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {l.detail}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
