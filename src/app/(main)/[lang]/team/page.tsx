import React from 'react';
import Link from 'next/link';
import { FloatingCapsuleNav, Footer, TeamCard } from '@/components';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/site';
import { teamMembers } from '@/lib/team';

interface TeamPageProps {
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
    path: '/team/',
    title: locale === 'zh' ? '雪弈摄影团队_成都本地摄影服务团队' : 'SnowChess Team',
    description:
      locale === 'zh'
        ? '了解雪弈摄影工作室的核心团队，覆盖活动摄影、研学摄影、商业拍摄、婚礼和旅行等多种场景。'
        : 'Meet the SnowChess team serving Chengdu events, study tours, weddings, and travel photography.',
  });
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { lang } = await params;
  const isZh = lang === 'zh';

  return (
    <main className="min-h-screen bg-white">
      <FloatingCapsuleNav locale={lang} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-snow-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-black mb-4">
            {isZh ? '核心团队' : 'Our Team'}
          </h1>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            {isZh 
              ? '专业摄影师，用心记录每个瞬间' 
              : 'Professional photographers capturing your moments with heart'}
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} locale={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-deep-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isZh ? '加入我们' : 'Join Us'}
          </h2>
          <p className="text-gray-400 mb-8">
            {isZh 
              ? '如果你热爱摄影，想要与专业团队一起成长，欢迎联系我们' 
              : 'If you love photography and want to grow with a professional team, contact us'}
          </p>
          <Link
            href={`/${lang}/schedule/`}
            className="inline-block px-8 py-4 bg-gold text-white rounded-full font-semibold hover:bg-gold-light transition-all"
          >
            {isZh ? '联系我们' : 'Contact Us'}
          </Link>
        </div>
      </section>

      <Footer locale={lang} />
    </main>
  );
}
