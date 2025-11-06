## Guntur Wicaksono — Portfolio

A small, fast portfolio built with Next.js 16 and Tailwind CSS. It focuses on the essentials: who I am, what I’ve built, and how to get in touch.

### What’s inside

- Sticky sidebar with quick social links on large screens.
- Clean sections for About, Experience, Projects, and Contact.
- Responsive layout that moves naturally from desktop to mobile.
- Typed data sources for experience and projects.

### Tech stack

- Framework: Next.js (App Router, TypeScript)
- Styling: Tailwind CSS, CSS variables, Space Grotesk & Inter
- Tooling: pnpm, ESLint, TypeScript

### Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. Edits in `src/app/page.tsx`, `src/data/experience.ts`, and `src/data/projects.ts` hot‑reload instantly.

### Update content

- Hero text and social links: `src/app/page.tsx`
- Experience: `src/data/experience.ts`
- Projects: `src/data/projects.ts`

### Environment (optional)

You don’t need env vars to run this site. If you want canonical URLs to match each environment (dev, preview, production), set one of these:

- `SITE_URL` (server-only) — canonical origin
- `NEXT_PUBLIC_SITE_URL` (client-visible) — used as a fallback

The app also auto-detects `VERCEL_URL` on Vercel previews. See `src/lib/site-url.ts`.

### Production build

```bash
pnpm build
pnpm start
```

### Deployment (Vercel)

The project is optimized for Vercel.

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, “Import Project” → select the repo.
3. Framework preset: Next.js. No extra config is required.
4. (Optional) Add `SITE_URL` in Project Settings → Environment Variables.

Vercel will build and deploy preview URLs on each PR and a production URL on the main branch.

—

Thanks for taking a look. If you spot something off or have ideas to improve the site, feel free to open an issue or reach out.
