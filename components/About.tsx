"use client";

import { Reveal } from "./Reveal";
import { Sigma, LineChart, Users, Compass } from "lucide-react";

const pillars = [
  {
    icon: Sigma,
    title: "Math as a decision tool",
    text:
      "Statistics, probability, and a stubborn habit of asking 'what does the data actually say?' — the foundation I want to bring to every product decision I make.",
  },
  {
    icon: LineChart,
    title: "Data-first product thinking",
    text:
      "I'm starting in data analytics on purpose. Before owning a roadmap, I want to be the person in the room who can read the dashboard and ask the right next question.",
  },
  {
    icon: Users,
    title: "Operator at heart",
    text:
      "Whether it's digitizing a family business or running a 100-member club, I've spent the last two years learning how teams actually ship — requirements, cadence, follow-through.",
  },
  {
    icon: Compass,
    title: "The long game",
    text:
      "Data analyst → product owner → product manager. I'm not in a rush for the title — I'm in a rush to be useful, and I'm building the foundation that compounds.",
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
                A math student on the road to product.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                I&apos;m a fourth-year Mathematics &amp; Computer Science student
                at Osmangazi University. Outside of class, I lead MACS Club
                (100+ members) and run digital transformation projects for a
                traditional Turkish company — turning paper-based workflows into
                tools people actually open every day.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                My plan is the long game: start in data analytics to ground
                every decision in numbers, grow into product ownership, and
                become the kind of PM who can both read the spreadsheet and
                ship the roadmap.
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
