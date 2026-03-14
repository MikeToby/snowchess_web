import React from 'react';
import { WorksClient } from '@/components/works';
import { buildMetadata } from '@/lib/seo';
import { getWorksData } from '@/lib/works-db';
import type { Locale } from '@/lib/site';

interface WorksPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;

  return buildMetadata({
    locale,
    path: '/works/',
    title: locale === 'zh' ? '成都摄影作品集_活动_研学_婚礼_旅行' : 'SnowChess Portfolio',
    description:
      locale === 'zh'
        ? '查看雪弈摄影工作室在成都活动摄影、研学摄影、婚礼跟拍、旅行跟拍与开业活动中的真实作品案例。'
        : 'Portfolio of Chengdu event, study tour, wedding, travel, and opening photography by SnowChess.',
  });
}

export default async function WorksPage({ params }: WorksPageProps) {
  const { lang } = await params;
  const works = await getWorksData();

  return <WorksClient works={works} lang={lang} />;
}
