import React from 'react';
import { FloatingCapsuleNav, Footer, BlogList } from '@/components';
import { buildMetadata } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';
import type { Locale } from '@/lib/site';

interface BlogPageProps {
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
    path: '/blog/',
    title: locale === 'zh' ? '成都摄影博客_活动摄影_研学摄影内容' : 'SnowChess Blog',
    description:
      locale === 'zh'
        ? '围绕成都活动摄影、研学摄影、开业摄影、婚礼跟拍与旅行跟拍，分享更贴近客户决策的内容。'
        : 'Articles on event, study tour, opening, wedding, and travel photography in Chengdu.',
  });
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { lang } = await params;
  const isZh = lang === 'zh';

  return (
    <main className="min-h-screen bg-white">
      <FloatingCapsuleNav locale={lang} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-snow-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-black mb-4">
            {isZh ? '摄影师Blog' : "Photographer's Blog"}
          </h1>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            {isZh 
              ? '摄影技巧、作品分享、行业见解' 
              : 'Photography tips, work sharing, industry insights'}
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogList posts={blogPosts} locale={lang} />
        </div>
      </section>

      <Footer locale={lang} />
    </main>
  );
}
