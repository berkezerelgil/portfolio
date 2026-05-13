export const profile = {
  name: "Berke Zerelgil",
  shortName: "BZ",
  role: "Mathematics & Computer Science Student",
  tagline: "Building at the intersection of AI, software, and human-centered design.",
  intro:
    "I design and engineer intelligent products — from research-driven AI prototypes to polished mobile apps and mathematical models. I care about clarity of thought, beauty of execution, and the small details that turn good software into something people actually love.",
  location: "Istanbul, Türkiye",
  email: "berkezerelgil@gmail.com",
  availability: "Open to internships, research collaborations & founding-team roles.",
  socials: {
    github: "https://github.com/berkezerelgil",
    linkedin: "https://www.linkedin.com/in/berkezerelgil",
    twitter: "https://x.com/berkezerelgil",
    email: "mailto:berkezerelgil@gmail.com",
  },
};

export const stats = [
  { label: "Years coding", value: "6+" },
  { label: "Shipped projects", value: "20+" },
  { label: "Hackathons", value: "12" },
  { label: "Mentorship hours", value: "300+" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Dart", "C++", "Java", "SQL"],
  },
  {
    title: "AI / ML",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "LangChain", "OpenAI API"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "React", "Flutter", "Node.js", "FastAPI", "Express"],
  },
  {
    title: "Design & UI",
    items: ["TailwindCSS", "Framer Motion", "Figma", "shadcn/ui", "Three.js"],
  },
  {
    title: "Mathematics",
    items: ["MATLAB", "Maple", "NumPy", "SymPy", "LaTeX", "Wolfram"],
  },
  {
    title: "Tools & Cloud",
    items: ["Git", "Docker", "Vercel", "Firebase", "Supabase", "Linux"],
  },
];

export type Project = {
  title: string;
  category: "AI" | "Mobile" | "Mathematics" | "UI/UX" | "Startup";
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  year: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    title: "Lumen — AI Study Companion",
    category: "AI",
    description:
      "A LLM-powered study assistant that turns lecture notes into adaptive quizzes, spaced-repetition decks, and visual concept maps. Built with retrieval-augmented generation and a custom evaluation loop.",
    tech: ["Next.js", "Python", "LangChain", "OpenAI", "pgvector"],
    github: "https://github.com/berkezerelgil/lumen",
    demo: "https://lumen.demo",
    year: "2026",
    highlight: true,
  },
  {
    title: "Atlas — Personal Finance for Students",
    category: "Mobile",
    description:
      "A Flutter app that aggregates spending across cards and bank accounts, forecasts monthly cash flow, and gamifies saving goals. Used by 1,200+ students across three universities.",
    tech: ["Flutter", "Dart", "Firebase", "Riverpod"],
    github: "https://github.com/berkezerelgil/atlas",
    demo: "https://atlas.app",
    year: "2025",
    highlight: true,
  },
  {
    title: "Spiral — Dynamical Systems Visualizer",
    category: "Mathematics",
    description:
      "Interactive WebGL playground for exploring attractors, bifurcations, and chaotic maps. Built as a teaching tool for a non-linear dynamics seminar.",
    tech: ["Three.js", "TypeScript", "GLSL", "MATLAB"],
    github: "https://github.com/berkezerelgil/spiral",
    year: "2025",
  },
  {
    title: "Nimbus — Cloud Cost Intelligence",
    category: "AI",
    description:
      "ML model that predicts AWS spend anomalies before they hit your invoice. Deployed as a SaaS prototype with Slack alerting. Won 2nd place at TechFlow Hackathon.",
    tech: ["Python", "FastAPI", "XGBoost", "Postgres"],
    github: "https://github.com/berkezerelgil/nimbus",
    year: "2025",
  },
  {
    title: "Halo — Interface Design System",
    category: "UI/UX",
    description:
      "A 60-component design system focused on dark-mode-first SaaS dashboards. Includes Figma tokens, a Storybook, and ready-to-ship React primitives.",
    tech: ["Figma", "React", "TailwindCSS", "Storybook"],
    demo: "https://halo.design",
    year: "2024",
  },
  {
    title: "Orbit — Student Founder Platform",
    category: "Startup",
    description:
      "A platform that connects student founders with mentors, capital, and co-builders. Currently in private beta with 200+ founders and 40+ mentors onboarded.",
    tech: ["Next.js", "Supabase", "Stripe", "Resend"],
    demo: "https://orbit.community",
    year: "2026",
    highlight: true,
  },
];

export const leadership = [
  {
    role: "President",
    org: "Computer Science Society",
    period: "2024 — Present",
    detail:
      "Lead a 30-person team running weekly technical workshops, an annual hackathon (400+ attendees), and a mentorship pipeline that has placed 18 students in summer internships.",
  },
  {
    role: "Founder & Lead Organizer",
    org: "AI x Math Reading Group",
    period: "2024 — Present",
    detail:
      "Curate a weekly seminar exploring papers at the boundary of mathematics and modern AI — from optimal transport to mechanistic interpretability.",
  },
  {
    role: "Mentor",
    org: "Code the Future — High School Outreach",
    period: "2023 — Present",
    detail:
      "Coach high-school students on first-time programming projects, university applications, and competitive math. 12 students mentored, 4 placed at top universities.",
  },
  {
    role: "Community Lead",
    org: "Istanbul Hack Collective",
    period: "2023 — 2024",
    detail:
      "Helped grow a student-run engineering community to 1,500+ members and co-organized 6 city-wide hackathons.",
  },
];

export const timeline = [
  {
    year: "2026",
    title: "Founding Engineer Intern",
    place: "Early-stage AI startup",
    detail:
      "Shipping production AI features end-to-end — from research notebooks to user-facing dashboards.",
  },
  {
    year: "2025",
    title: "Research Assistant — Applied Mathematics",
    place: "University Lab",
    detail:
      "Investigating numerical methods for partial differential equations with applications in physics-informed neural networks.",
  },
  {
    year: "2024",
    title: "Software Engineering Intern",
    place: "Fintech scale-up",
    detail:
      "Built a real-time notification pipeline serving 200k+ users; cut alert latency by 60%.",
  },
  {
    year: "2023",
    title: "Started B.Sc. in Mathematics & Computer Science",
    place: "University",
    detail:
      "Double major program with a focus on AI, dynamical systems, and theoretical CS.",
  },
  {
    year: "2022",
    title: "First production product shipped",
    place: "Independent",
    detail:
      "A study-planner web app reached 5,000 users in the first month — my first taste of what shipping really means.",
  },
];

export const certifications = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    year: "2025",
  },
  {
    title: "Machine Learning Engineering for Production (MLOps)",
    issuer: "DeepLearning.AI",
    year: "2025",
  },
  {
    title: "Google Cloud Associate Engineer",
    issuer: "Google Cloud",
    year: "2024",
  },
  {
    title: "Mathematical Thinking in Computer Science",
    issuer: "UC San Diego / Coursera",
    year: "2024",
  },
  {
    title: "Flutter & Dart — The Complete Guide",
    issuer: "Academind",
    year: "2023",
  },
  {
    title: "International Mathematical Olympiad — National Finalist",
    issuer: "TÜBİTAK",
    year: "2022",
  },
];

export const posts = [
  {
    title: "The Geometry of Learning Rates",
    excerpt:
      "Why a single scalar is the most important — and most underestimated — hyperparameter in modern deep learning, told through three small experiments.",
    readTime: "8 min",
    date: "Mar 2026",
    tag: "AI",
  },
  {
    title: "Designing for Stillness",
    excerpt:
      "Notes on building interfaces that earn attention slowly, on what we lose to dopamine-driven UX, and on the calm tools I want to build instead.",
    readTime: "6 min",
    date: "Jan 2026",
    tag: "Design",
  },
  {
    title: "A Student's Guide to Shipping",
    excerpt:
      "The unglamorous habits that took me from 'project ideas' to actually launched products people use — written to my younger self.",
    readTime: "10 min",
    date: "Nov 2025",
    tag: "Craft",
  },
];
