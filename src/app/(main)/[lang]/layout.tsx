import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;

  return buildMetadata({
    locale,
    title:
      locale === 'zh'
        ? '成都活动摄影_成都研学摄影_雪弈摄影工作室'
        : 'SnowChess Photography Studio | Chengdu Event and Study Tour Photography',
    description:
      locale === 'zh'
        ? '雪弈摄影工作室专注成都活动摄影、研学摄影、开业摄影、婚礼跟拍与旅行跟拍，提供本地拍摄策划、现场记录与高效交付服务。'
        : 'SnowChess provides Chengdu event photography, study tour coverage, opening photography, wedding, and travel documentary shooting.',
  });
}

export async function generateStaticParams() {
  return [{ lang: 'zh' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
