/**
 * Every internal link and asset goes through `p()`.
 *
 * The site is served from the domain root in production but from a
 * sub-path (/kp-consulting/) on GitHub Pages previews. Astro exposes the
 * configured base as `import.meta.env.BASE_URL`; prefixing here means the
 * same source builds correctly for both without touching any page.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function p(href: string): string {
  return href.startsWith('/') ? `${BASE}${href}` : href;
}

/** Absolute URL for canonicals, Open Graph and JSON-LD. */
export function abs(href: string, origin: string): string {
  return `${origin}${p(href)}`;
}
