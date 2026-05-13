"use client";

import { profile } from "@/lib/data";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm">
              <span className="font-medium">{profile.name}</span>
              <span className="text-muted-foreground">
                {" "}
                · {profile.role}
              </span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              © {year} — Designed &amp; built with care. Hand-coded in
              Next.js, Tailwind, and Framer Motion.
            </p>
          </div>

          <div className="flex items-center gap-1">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={profile.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition hover:text-foreground"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={profile.socials.email}
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
