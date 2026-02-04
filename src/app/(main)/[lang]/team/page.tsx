import React from 'react';
import { FloatingCapsuleNav, Footer, TeamCard } from '@/components';
import { TeamMember } from '@/components/team';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: '袁天弈',
    nameEn: 'Yuan Tianyi',
    title: '创始人 / 首席摄影师',
    titleEn: 'Founder / Lead Photographer',
    bio: '10年商业摄影经验，专注品牌视觉塑造。曾为多家知名企业提供视觉解决方案，作品风格大气优雅。',
    bioEn: '10 years of commercial photography experience, focused on brand visual shaping.',
    image: '/images/team/team-1.jpg',
    skills: ['商业摄影', '婚礼跟拍', '品牌视觉'],
    xiaohongshuQR: '/images/team/qr-1.png',
    xiaohongshuName: '@袁天弈摄影',
  },
  {
    id: '2',
    name: '赵本志',
    nameEn: 'Zhao Benzhi',
    title: '商业摄影总监',
    titleEn: 'Commercial Director',
    bio: '曾任4A广告公司视觉总监，服务过众多国际品牌。擅长商业广告摄影，对光影有独到见解。',
    bioEn: 'Former visual director at 4A advertising agency, served many international brands.',
    image: '/images/team/team-2.jpg',
    skills: ['活动摄影', '航拍', '广告摄影'],
    xiaohongshuQR: '/images/team/qr-2.png',
    xiaohongshuName: '@赵本志视觉',
  },
  {
    id: '3',
    name: '陆金川',
    nameEn: 'Lu Jinchuan',
    title: '人像摄影专家',
    titleEn: 'Portrait Specialist',
    bio: '擅长捕捉人物情感，作品多次入选国际摄影展。专注于人像与旅行摄影，镜头下的人物自然生动。',
    bioEn: 'Good at capturing human emotions, works selected for international exhibitions.',
    image: '/images/team/team-3.jpg',
    skills: ['旅行摄影', '人像', '情感捕捉'],
    xiaohongshuQR: '/images/team/qr-3.png',
    xiaohongshuName: '@陆金川镜头',
  },
  {
    id: '4',
    name: '郭晨曦',
    nameEn: 'Guo Chenxi',
    title: '活动摄影主管',
    titleEn: 'Event Lead',
    bio: '快速抓拍专家，大型活动经验丰富。研学摄影与视频制作领域专家，善于记录精彩瞬间。',
    bioEn: 'Expert in quick capture, experienced in large events and study tour photography.',
    image: '/images/team/team-4.jpg',
    skills: ['研学摄影', '视频制作', '活动记录'],
    xiaohongshuQR: '/images/team/qr-4.png',
    xiaohongshuName: '@郭晨曦记录',
  },
];

interface TeamPageProps {
  params: Promise<{ lang: string }>;
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
              <TeamCard key={member.id} member={member} index={index} />
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
          <a
            href="/schedule/"
            className="inline-block px-8 py-4 bg-gold text-white rounded-full font-semibold hover:bg-gold-light transition-all"
          >
            {isZh ? '联系我们' : 'Contact Us'}
          </a>
        </div>
      </section>

      <Footer locale={lang} />
    </main>
  );
}
