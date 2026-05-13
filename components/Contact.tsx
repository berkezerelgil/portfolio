"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { profile } from "@/lib/data";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter, MapPin, Check } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card-shell relative overflow-hidden p-8 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
          />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <span className="eyebrow">08 — Contact</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 text-display-lg font-semibold tracking-tight">
                  Let&apos;s build something honest.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                  I&apos;m always up for conversations about AI, mathematics,
                  product, or the next thing you want to ship. The best way to
                  reach me is by email — I read every message.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 space-y-3">
                  <button
                    onClick={copyEmail}
                    className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-muted/40 p-4 text-left transition hover:border-accent/40"
                  >
                    <span className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-accent" />
                      <span className="text-sm">{profile.email}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5" /> Copied
                        </>
                      ) : (
                        "Copy"
                      )}
                    </span>
                  </button>

                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-muted/40 p-4">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-sm">{profile.location}</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-2">
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                  <a
                    href={profile.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <Twitter className="h-4 w-4" /> X / Twitter
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const subject = encodeURIComponent(
                    `Hello from ${data.get("name") || "your portfolio"}`
                  );
                  const body = encodeURIComponent(
                    `${data.get("message")}\n\n— ${data.get("name")}\n${data.get(
                      "email"
                    )}`
                  );
                  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
                }}
                className="relative space-y-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-md"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                      Name
                    </span>
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-border bg-muted/40 px-3 py-2.5 text-sm outline-none transition focus:border-accent"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                      Email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-border bg-muted/40 px-3 py-2.5 text-sm outline-none transition focus:border-accent"
                    />
                  </label>
                </div>
                <label className="block text-sm">
                  <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me what you're working on…"
                    className="w-full rounded-xl border border-border bg-muted/40 px-3 py-2.5 text-sm outline-none transition focus:border-accent"
                  />
                </label>
                <button type="submit" className="btn btn-primary w-full justify-center">
                  Send message
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Opens your mail client — no servers involved.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
