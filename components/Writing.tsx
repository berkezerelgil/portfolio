"use client";

import { Reveal } from "./Reveal";
import { posts } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function Writing() {
  return (
    <section id="writing" className="section">
      <div className="container">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">07 — Writing &amp; insights</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-display-lg font-semibold tracking-tight">
                Thinking out loud.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Short essays on the things I&apos;m working through — AI, design,
                math, and the quiet craft of shipping software.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a href="#" className="btn btn-ghost">
              All posts
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <a
                href="#"
                className="card-shell group block h-full p-6"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="chip">{p.tag}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.readTime} read</span>
                </div>
                <h3 className="mt-4 text-lg font-medium leading-snug tracking-tight transition group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition group-hover:text-foreground">
                  Read essay
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
