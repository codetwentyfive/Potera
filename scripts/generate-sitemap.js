const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.poterareinigung.de';

// Define your static routes and dynamic routes
const routes = [
  '',  // home page
  '/about',
  '/services',
  '/contact',
  '/services/kulmbach',
  '/services/bayreuth',
  '/services/neuenmarkt',
  '/services/burgkunstadt',
  '/services/lichtenfels',
  '/services/kronach'
];

// Create sitemap content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

// Write sitemap to public directory
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!'); 