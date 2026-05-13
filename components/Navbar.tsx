"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#leadership", label: "Leadership" },
  { href: "#timeline", label: "Journey" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full border border-border px-4 py-2.5 transition-all",
            scrolled
              ? "glass shadow-soft"
              : "bg-transparent border-transparent"
          )}
        >
          <a
            href="#top"
            className="group inline-flex items-center gap-2.5"
            aria-label="Home"
          >
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-background text-[11px] font-bold tracking-tight">
              BZ
              <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/10 transition group-hover:ring-accent/40" />
            </span>
            <span className="hidden text-sm font-medium tracking-tight sm:inline">
              Berke Zerelgil
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden btn btn-primary md:inline-flex"
            >
              Let&apos;s talk
            </a>
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur-md"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden md:hidden"
        >
          <div className="mt-2 glass rounded-2xl p-2">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="px-2 py-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full justify-center"
                >
                  Let&apos;s talk
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
