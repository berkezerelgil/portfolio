export const profile = {
  name: "Berke Zerelgil",
  shortName: "BZ",
  role: "Mathematics & CS Student · Aspiring Product Manager",
  tagline:
    "Math, data, and team leadership — on the road from data analyst to product manager.",
  intro:
    "I'm a final-year Mathematics & Computer Science student at Osmangazi University. Over the last two years I've led a 100-member technology club, digitized the operations of a traditional Turkish company, and mentored students through an AI club. My plan is the long game: start in data analysis to sharpen my number sense, grow into product ownership, and become the kind of product manager who can both read the spreadsheet and ship the roadmap.",
  location: "Eskişehir, Türkiye",
  email: "berkezerelgil@gmail.com",
  phone: "+90 538 329 6386",
  availability:
    "Available now — open to data analyst & product internships.",
  socials: {
    github: "https://github.com/berkezerelgil",
    linkedin: "https://www.linkedin.com/in/berkezerelgil",
    email: "mailto:berkezerelgil@gmail.com",
  },
};

export const stats = [
  { label: "Members led", value: "100+" },
  { label: "Leadership roles", value: "2" },
  { label: "Years in Math & CS", value: "4" },
  { label: "Languages spoken", value: "3" },
];

export const skillGroups = [
  {
    title: "Data & Analytics",
    items: [
      "Python",
      "Excel (Advanced)",
      "Google Sheets",
      "Pivot tables",
      "Power Query",
      "SQL (learning)",
      "Data visualization",
    ],
  },
  {
    title: "Product & Strategy",
    items: [
      "Requirements gathering",
      "User research",
      "Roadmapping",
      "Stakeholder mapping",
      "Agile / Scrum",
      "Process design",
    ],
  },
  {
    title: "Design & UX",
    items: ["Figma", "Canva", "Wireframing", "UI/UX collaboration"],
  },
  {
    title: "No-code & Automation",
    items: [
      "AppSheet",
      "Google Apps Script",
      "Google Workspace",
      "Notion",
      "Trello",
    ],
  },
  {
    title: "Math Foundations",
    items: [
      "Statistics",
      "Linear algebra",
      "Probability",
      "Discrete math",
      "Optimization",
    ],
  },
  {
    title: "Spoken Languages",
    items: ["Turkish (Native)", "English (C2)", "German (A2)"],
  },
];

export type Project = {
  title: string;
  category: "Product" | "Data" | "Leadership" | "Design";
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  year: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    title: "Mobile Inventory Tracking System",
    category: "Product",
    description:
      "Designed and shipped a mobile-first inventory tracking system for a traditional forestry-products company. Replaced manual stock counts with a real-time tool the warehouse team actually uses — built on AppSheet + Google Sheets, owned end-to-end from requirements to rollout.",
    tech: ["AppSheet", "Google Sheets", "Apps Script", "Requirements gathering"],
    year: "2024 – 2025",
    highlight: true,
  },
  {
    title: "Digital Accounting & Cost Tracking Pipeline",
    category: "Data",
    description:
      "Modernized invoicing and cost tracking workflows at Denizim Orman Ürünleri. Connected procurement, accounting, and sales into a single reporting view — turning a folder of paper invoices into a queryable, daily-refreshed dashboard for management.",
    tech: ["Excel", "Google Sheets", "Pivot tables", "Power Query"],
    year: "2024 – 2025",
    highlight: true,
  },
  {
    title: "MACS Club — Operating System",
    category: "Leadership",
    description:
      "Built the operating system for a 100+ member technology club: task delegation pipelines, weekly reporting cadence, event execution playbooks, and a structured mentorship pathway. Running a student organization the way I'd want to run a product team.",
    tech: ["Notion", "Discord", "Scrum", "Stakeholder management"],
    year: "2025 – 2026",
    highlight: true,
  },
  {
    title: "Cross-Department Workflow Automation",
    category: "Product",
    description:
      "Mapped operations across inventory, accounting, and marketing teams, then closed information gaps with automated reports. Established a daily reporting cadence that gave managers same-day visibility instead of weekly summaries.",
    tech: ["AppSheet", "Google Sheets", "Process design", "Automation"],
    year: "2024 – 2025",
  },
  {
    title: "English Mentorship Program — AI Club",
    category: "Leadership",
    description:
      "Founded and ran an English mentorship program inside the Osmangazi AI Club — supporting students preparing for IELTS and building conversational fluency. Designed lesson tracks, paired mentors with mentees, and tracked progress over the year.",
    tech: ["Program design", "Curriculum", "Mentorship", "Operations"],
    year: "2024 – 2025",
  },
  {
    title: "MACS Tech Events & Workshop Series",
    category: "Design",
    description:
      "Co-designed and ran large-scale workshops and summits — from speaker logistics to UI/UX for event collateral. Treated events as a product: defined the attendee journey, iterated on feedback after each cohort.",
    tech: ["Figma", "Canva", "Event ops", "Stakeholder management"],
    year: "2025 – 2026",
  },
];

export const leadership = [
  {
    role: "President & Project Lead",
    org: "MACS Club, Osmangazi University",
    period: "May 2025 — Feb 2026",
    detail:
      "Led a 100+ member technology-focused student organization. Planned and ran large-scale technical events, workshops, and summits; oversaw logistics, communication, and execution. Led internal software projects, supported UI/UX work, and mentored junior members in programming and project development.",
  },
  {
    role: "Digital Transformation & Project Coordinator Intern",
    org: "Denizim Orman Ürünleri, Adana",
    period: "Sep 2024 — Mar 2025",
    detail:
      "Coordinated digital transformation initiatives across inventory, accounting, and marketing workflows. Designed and deployed a mobile inventory tracking system, modernized invoicing and cost tracking, and improved cross-department efficiency through workflow automation and structured reporting.",
  },
  {
    role: "Supervisor & English Class Mentor",
    org: "Artificial Intelligence Club, Osmangazi University",
    period: "Feb 2024 — Apr 2025",
    detail:
      "Coordinated university-wide AI seminars, workshops, and technical events. Supervised student teams during project and event execution. Founded and led an English Mentorship Program covering IELTS preparation and conversational English.",
  },
  {
    role: "Licensed Athlete",
    org: "Ministry of Youth and Sports — Athletics",
    period: "2022",
    detail:
      "Competitive athlete with an official Ministry-issued license. A reminder that consistency, training, and showing up matter as much in product work as they do on the track.",
  },
];

export const timeline = [
  {
    year: "2026",
    title: "Wrapped MACS presidency · pivoting to data & product",
    place: "Eskişehir, Türkiye",
    detail:
      "Closed out my MACS Club presidency in February and shifted focus to the next chapter: finishing the B.Sc. and lining up a data analyst internship — the first concrete step toward product management.",
  },
  {
    year: "2025",
    title: "Elected President & Project Lead — MACS Club",
    place: "Osmangazi University",
    detail:
      "Took ownership of a 100-member technology club. Rebuilt internal processes around clearer task delegation, weekly reporting, and a real mentorship pipeline — and finished the term in Feb 2026.",
  },
  {
    year: "2024",
    title: "Joined Denizim as Digital Transformation Intern",
    place: "Adana, Türkiye",
    detail:
      "Spent six months turning a paper-based SME into a digital one — first a mobile inventory app, then accounting and reporting systems. My first taste of what 'product' really means in the real world.",
  },
  {
    year: "2024",
    title: "Supervisor & English Mentor — AI Club",
    place: "Osmangazi University",
    detail:
      "Helped run university-wide AI events and founded an English mentorship program inside the club. Learned how much of a tech community is operations.",
  },
  {
    year: "2022",
    title: "Started B.Sc. in Mathematics & Computer Science",
    place: "Osmangazi University, Eskişehir",
    detail:
      "Chose the double-major program for its mix of rigor and applicability — strong foundations for the data side of product work.",
  },
  {
    year: "2022",
    title: "Graduated high school + earned Athletics License",
    place: "Arif Nihat Asya Anatolian HS, Adana",
    detail:
      "Finished high school and got a Ministry-issued Athletics License the same year. A discipline I still rely on.",
  },
];

export const certifications = [
  {
    title: "American Culture — C2 English Certificate",
    issuer: "American Culture",
    year: "—",
  },
  {
    title: "Athletics License",
    issuer: "Ministry of Youth and Sports, Türkiye",
    year: "2022",
  },
  {
    title: "Driver's License — B Class",
    issuer: "Republic of Türkiye",
    year: "—",
  },
];

export const posts = [
  {
    title: "From a Math Major to a Product Mindset",
    excerpt:
      "Why a Mathematics & Computer Science background is one of the best preparations for product work — and the specific habits I'm building to make the transition.",
    readTime: "7 min",
    date: "Coming soon",
    tag: "Career",
  },
  {
    title: "Notes from Digitizing a Family Business",
    excerpt:
      "What I learned shipping AppSheet + Google Sheets tools inside a traditional SME — about requirements, change management, and the gap between 'feature' and 'adoption'.",
    readTime: "9 min",
    date: "Coming soon",
    tag: "Product",
  },
  {
    title: "Running a 100-Member Student Club Like a Startup",
    excerpt:
      "The operating system I built for MACS Club — task delegation, weekly cadence, mentorship pipelines — and what translates directly to running a product team.",
    readTime: "8 min",
    date: "Coming soon",
    tag: "Leadership",
  },
];
