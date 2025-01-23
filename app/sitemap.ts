import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.poterareinigung.de';
  
  // Core pages
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service area pages
  const serviceAreas = [
    'kulmbach',
    'bayreuth',
    'bamberg',
    'kronach',
    'hof',
  ].map((area) => ({
    url: `${baseUrl}/services/${area}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...serviceAreas];
} 