"use client";

import { Reveal } from "./Reveal";
import { Sigma, Sparkles, Cpu, Compass } from "lucide-react";

const pillars = [
  {
    icon: Sigma,
    title: "Mathematical foundations",
    text:
      "I believe the best engineers reason from first principles. Mathematics is how I sharpen mine — from linear algebra to dynamical systems.",
  },
  {
    icon: Cpu,
    title: "AI as a craft",
    text:
      "I build with modern AI tools — not as a buzzword, but as a creative medium. I care about evaluation, reliability, and the seams between humans and models.",
  },
  {
    icon: Sparkles,
    title: "Design that breathes",
    text:
      "Clarity, calm, intent. Whether it's a CLI, a Flutter app, or a research demo — interfaces should respect the user's attention.",
  },
  {
    icon: Compass,
    title: "Long-term curiosity",
    text:
      "I read papers, write essays, mentor students, and ship side-projects. Curiosity compounds — and I'm in this for the next thirty years.",
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">01 — About</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-display-lg font-semibold tracking-tight">
                A student of mathematics, a builder by instinct.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                I&apos;m a Mathematics &amp; Computer Science undergraduate who spends
                most days oscillating between proofs, prototypes, and Figma files.
                I&apos;m drawn to problems that sit at the intersection of rigor and
                taste — where the answer has to be both correct and beautiful.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Outside of class I lead a student CS society, run an AI &times; math
                reading group, and ship products under my own name. I&apos;m most
                useful inside small teams that want to build something thoughtful,
                fast.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={0.1 + i * 0.06}>
                    <div className="card-shell h-full p-6">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted/60 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-base font-medium tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {p.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
