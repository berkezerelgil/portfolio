"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories: Array<Project["category"] | "All"> = [
  "All",
  "Product",
  "Data",
  "Leadership",
  "Design",
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="card-shell group relative overflow-hidden p-6"
    >
      {/* Top mini dashboard mockup */}
      <div className="relative mb-6 h-40 overflow-hidden rounded-xl border border-border bg-gradient-to-br from-muted to-card">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute left-4 top-4 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-400/70" />
          <span className="h-2 w-2 rounded-full bg-amber-400/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        </div>
        <div className="absolute inset-x-4 bottom-4 space-y-1.5">
          <div className="h-2 w-2/3 rounded-full bg-foreground/10" />
          <div className="h-2 w-1/2 rounded-full bg-foreground/10" />
          <div className="h-2 w-3/4 rounded-full bg-accent/40" />
        </div>
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl transition group-hover:bg-accent/50" />
      </div>

      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="chip">{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
            {project.highlight && (
              <>
                <span>·</span>
                <span className="inline-flex items-center gap-1 text-accent">
                  <Sparkles className="h-3 w-3" /> Featured
                </span>
              </>
            )}
          </div>
          <h3 className="mt-2 text-lg font-medium tracking-tight">
            {project.title}
          </h3>
        </div>
      </div>

      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="chip text-[11px]">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-foreground"
          >
            <Github className="h-4 w-4" /> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-foreground"
          >
            <ArrowUpRight className="h-4 w-4" /> Live
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">03 — Selected work</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-display-lg font-semibold tracking-tight">
                Projects I&apos;ve put my name on.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A mix of research prototypes, shipped products, and weekend
                experiments. Each one taught me something I couldn&apos;t have
                learned from a book.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-1.5 rounded-full border border-border bg-card/60 p-1 backdrop-blur-md">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs transition",
                    active === c
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div
          layout
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
