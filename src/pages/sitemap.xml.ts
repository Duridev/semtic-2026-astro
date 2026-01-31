import type { APIRoute } from 'astro';

const pages = [
    {
        url: '/',
        lastmod: new Date().toISOString().split('T')[0],
        priority: 1.0,
        changefreq: 'weekly'
    },
    {
        url: '/servicios',
        lastmod: new Date().toISOString().split('T')[0],
        priority: 0.9,
        changefreq: 'weekly'
    },
    {
        url: '/nosotros',
        lastmod: new Date().toISOString().split('T')[0],
        priority: 0.8,
        changefreq: 'monthly'
    },
    {
        url: '/faq',
        lastmod: new Date().toISOString().split('T')[0],
        priority: 0.7,
        changefreq: 'monthly'
    },
    {
        url: '/contacto',
        lastmod: new Date().toISOString().split('T')[0],
        priority: 0.9,
        changefreq: 'weekly'
    }
];

export const GET: APIRoute = ({ site }) => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400'
        }
    });
};

