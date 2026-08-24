# KP Consulting — kpconsulting.co

Marketing site for Kent Partida's food & protein industry consultancy.
Astro 5, static output, no runtime dependencies.

## Run it

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # -> dist/
bun run preview
```

## Where things live

| What | Where |
| --- | --- |
| **All content, copy and numbers** | `src/data/site.ts` |
| Articles | `src/content/insights/*.md` |
| Design tokens (color, type, spacing) | `src/styles/global.css` |
| Page templates | `src/pages/` |
| Shared components | `src/components/` |
| Images | `public/img/` |

Nearly every edit Kent will want — a new number, a reworded service, a different
email — is a change to `src/data/site.ts` and nothing else.

## Before launch — required

1. **`src/data/site.ts`**
   - `email` — currently the placeholder `kent@kpconsulting.co`.
   - `phone` / `phoneDisplay` — empty; the phone row is hidden until filled in.
   - `domain` / `url` — set to the real domain.
   - `legalName` — confirm the entity name.
   - `formEndpoint` — see below.
2. **`astro.config.mjs`** — set `site` to the live domain. It drives canonical
   URLs, Open Graph tags and `sitemap.xml`.
3. **`public/robots.txt`** — update the sitemap URL to the live domain.

### Contact form

`site.formEndpoint` is empty, so the form falls back to composing a `mailto:`
in the visitor's mail client — it never silently drops a message. To take real
submissions, create a form on [Formspree](https://formspree.io) or
[Basin](https://usebasin.com) and paste the endpoint URL into `formEndpoint`.
The POST handling is already written.

## Deploying

Static output; anything that serves files works. Cloudflare Pages:

```bash
bun run build
bunx wrangler pages deploy dist --project-name kp-consulting
```

## Notes on accuracy

- Every figure on the site comes from Kent's résumé. Do not round them up.
- The company names on the home page strip are **former employers and former
  retail accounts**, not clients, and the page says so directly beneath them.
  Do not relabel that strip "Trusted by" or add company logos — that would
  imply an endorsement none of them have given.
- The footer carries the same disclaimer.

## SEO

Per page: unique title + meta description, canonical, Open Graph and Twitter
card, JSON-LD. Structured data covers `ProfessionalService`, `Person`,
`Service`, `FAQPage`, `BlogPosting` and `BreadcrumbList`. `sitemap-index.xml`
is generated at build.
