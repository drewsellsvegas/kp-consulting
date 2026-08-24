import type { APIRoute } from 'astro';
import { p } from '../lib/paths';
import { site } from '../data/site';

// Served as a route rather than a static file so the icon paths pick up the
// base path on sub-path deploys.
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: site.name,
      short_name: 'KP',
      description: site.description,
      icons: [
        { src: p('/icon-192.png'), sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: p('/icon-512.png'), sizes: '512x512', type: 'image/png', purpose: 'any' },
      ],
      theme_color: '#0d1215',
      background_color: '#0d1215',
      display: 'browser',
      start_url: p('/'),
    }),
    { headers: { 'Content-Type': 'application/manifest+json' } }
  );
