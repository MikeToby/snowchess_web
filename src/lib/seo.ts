import type { Metadata } from 'next';
import { defaultLocale, locales, type Locale, localizePath, siteConfig } from './site';

type MetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function getMetadataBase() {
  return new URL(siteConfig.siteUrl);
}

export function buildMetadata({
  locale,
  title,
  description,
  path = '/',
  image = siteConfig.defaultOgImage,
}: MetadataInput): Metadata {
  const canonical = localizePath(locale, path);

  return {
    title,
    description,
    metadataBase: getMetadataBase(),
    alternates: {
      canonical,
      languages: {
        zh: localizePath('zh', path),
        en: localizePath('en', path),
        'x-default': localizePath(defaultLocale, path),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      siteName: siteConfig.brandNameEn,
      type: 'website',
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export function buildPageUrl(locale: Locale, path = '/') {
  return new URL(localizePath(locale, path), getMetadataBase()).toString();
}

export function getAlternateLinks(path = '/') {
  return locales.map((locale) => ({
    locale,
    url: buildPageUrl(locale, path),
  }));
}

