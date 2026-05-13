"use client";

import { Reveal } from "./Reveal";
import { certifications } from "@/lib/data";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">06 — Certifications &amp; achievements</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-display-lg font-semibold tracking-tight">
              Signals along the way.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I don&apos;t collect credentials for their own sake — but each of these
              represents a chapter I cared enough to finish.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.04}>
              <div className="card-shell flex h-full items-start gap-4 p-5">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/60 text-accent">
                  <Award className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium leading-snug tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
