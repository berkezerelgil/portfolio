# Berke Zerelgil — Personal Portfolio

A cinematic, minimal, premium portfolio for a Mathematics & Computer Science student working at the intersection of AI, software engineering, and human-centered design.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **next-themes**. Dark-mode first, fully responsive, ready to deploy to Vercel.

## Highlights

- Cinematic hero with animated spiral motif, grid background, and CTA buttons (View Projects, Download CV, Contact Me)
- Sections: About, Skills (categorized), Projects (filterable, dashboard-style cards), Leadership & Community, Career Timeline, Certifications, Writing/Insights, Contact
- Glassmorphism navigation with smooth-scroll anchors and animated dark/light theme toggle
- Subtle motion: scroll-triggered reveals, hover micro-interactions, gradient blur backgrounds, noise texture
- All content lives in a single source of truth: [`lib/data.ts`](./lib/data.ts) — edit there to customize

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → open http://localhost:3000

# 3. Production build
npm run build
npm run start
```

Node 18.18+ recommended.

## Editing your content

Open `lib/data.ts` and customize:

- `profile` — name, tagline, intro, email, socials
- `stats` — the four hero stat tiles
- `skillGroups` — categorized tech stack chips
- `projects` — project cards (category drives the filter pill)
- `leadership` — community / leadership roles
- `timeline` — career journey entries
- `certifications` — credential cards
- `posts` — writing/insights cards (currently linked to `#`)

The rest of the design (colors, typography, motion) lives in:

- `app/globals.css` — CSS variables for both themes
- `tailwind.config.ts` — Tailwind theme extensions
- `components/*` — section components

## Customizing the look

- **Colors:** edit the CSS variables in `app/globals.css` (`:root` for light, `.dark` for dark mode). The accent color drives the glow.
- **Typography:** Inter is loaded via `next/font` in `app/layout.tsx`. Swap it for Geist, Satoshi, or any Google Font.
- **Sections:** add or remove a component in `app/page.tsx` and update the nav links in `components/Navbar.tsx`.

## CV file

The "Download CV" button in the hero points to `/cv.pdf`. Drop your CV at `public/cv.pdf` and it will be served automatically.

## Deploy

The project is ready for [Vercel](https://vercel.com):

```bash
npx vercel
```

Or push to GitHub and import the repo in the Vercel dashboard — zero configuration needed.

## File structure

```
.
├── app/
│   ├── layout.tsx       # metadata, fonts, theme provider
│   ├── page.tsx         # composes all sections
│   ├── providers.tsx    # next-themes wrapper
│   └── globals.css      # CSS variables + utilities
├── components/
│   ├── Navbar.tsx
│   ├── ThemeToggle.tsx
│   ├── BackgroundFX.tsx
│   ├── Reveal.tsx       # scroll-reveal helper
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Leadership.tsx
│   ├── Timeline.tsx
│   ├── Certifications.tsx
│   ├── Writing.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   ├── data.ts          # 🎯 all portfolio content
│   └── utils.ts
├── public/
│   ├── favicon.svg
│   └── cv.txt           # replace with cv.pdf
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

## License

MIT — feel free to fork the template; please don't ship a one-to-one copy of the content.
