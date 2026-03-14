import type { MetadataRoute } from 'next';
import { locales, localizePath, siteConfig } from '@/lib/site';

export const dynamic = 'force-static';

const staticPaths = [
  '/',
  '/works/',
  '/team/',
  '/about/',
  '/contact/',
  '/blog/',
  '/event-photography/',
  '/study-tour-photography/',
  '/opening-photography/',
  '/wedding-photography/',
  '/travel-photography/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${siteConfig.siteUrl}${localizePath(locale, path)}`,
      lastModified: now,
      changeFrequency: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1 : 0.7,
    }))
  );
}
