# Khafidz Maulana — Portfolio

An editorial, project-first portfolio for Khafidz Maulana, a Mobile Developer
focused on Flutter and reliable real-world workflows.

## Stack

- Next.js 14 App Router
- React 18 and TypeScript
- Tailwind CSS and shadcn/Radix primitives
- Framer Motion for isolated, reduced-motion-aware interactions
- Local MDX content for field notes

## Local development

The installed workspace currently uses pnpm:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
pnpm lint
pnpm exec tsc --noEmit --incremental false
pnpm build
```

There is no automated test runner or formatter configured in the repository.

## Content and deployment

Portfolio facts, work history, skills, project links, and contact destinations
live in `src/data/resume.tsx`. Blog posts live in `content/*.mdx`.

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin so metadata,
Open Graph URLs, `robots.txt`, and `sitemap.xml` point to the deployed site:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Project screenshots that include operational or account data are intentionally
softened in the live interface. Replace them with approved, sanitized assets
before presenting detailed product screens at full clarity.
