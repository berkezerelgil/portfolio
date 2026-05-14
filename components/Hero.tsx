"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { profile, stats } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Decorative spiral */}
      <motion.svg
        aria-hidden
        viewBox="0 0 400 400"
        className="pointer-events-none absolute right-[-10%] top-[10%] hidden h-[520px] w-[520px] text-accent/30 md:block"
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.6, ease }}
      >
        <g className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }}>
          {Array.from({ length: 80 }).map((_, i) => {
            const angle = (i / 80) * Math.PI * 8;
            const r = 10 + i * 2.2;
            const x = 200 + Math.cos(angle) * r;
            const y = 200 + Math.sin(angle) * r;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={1.2}
                fill="currentColor"
                opacity={Math.min(1, i / 60)}
              />
            );
          })}
        </g>
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeDasharray="2 6"
        />
      </motion.svg>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {profile.availability}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.05 }}
          className="max-w-5xl text-display-2xl font-semibold tracking-tight"
        >
          <span className="block text-muted-foreground/70 text-xl md:text-2xl font-normal tracking-tight mb-4">
            Hi, I&apos;m
          </span>
          <span className="text-gradient">{profile.name}.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.12 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground"
        >
          <span className="text-foreground">{profile.role}</span> — {profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.18 }}
          className="mt-4 max-w-2xl text-sm md:text-base text-muted-foreground/80 leading-relaxed"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.24 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn btn-primary group">
            View Projects
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
          <a href="#contact" className="btn btn-ghost">
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card/60 p-5 backdrop-blur-sm"
            >
              <div className="text-2xl font-semibold tracking-tight">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
