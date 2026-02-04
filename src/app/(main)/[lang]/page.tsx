import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Award, Users } from 'lucide-react';
import { FloatingCapsuleNav, Footer } from '@/components';
import HeroCarousel from '@/components/home/HeroCarousel';
import PortfolioSection from '@/components/home/PortfolioSection';
import { TeamCard } from '@/components/team';
import { TeamMember } from '@/components/team';
import { getWorksData } from '@/lib/works-db';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: '袁天弈',
    nameEn: 'Yuan Tianyi',
    title: '创始人 / 首席摄影师',
    titleEn: 'Founder / Lead Photographer',
    bio: '10年商业摄影经验，专注品牌视觉塑造。曾为多家知名企业提供视觉解决方案。',
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
    bio: '曾任4A广告公司视觉总监，服务过众多国际品牌，擅长商业广告摄影。',
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
    bio: '擅长捕捉人物情感，作品多次入选国际摄影展。专注于人像与旅行摄影。',
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
    bio: '快速抓拍专家，大型活动经验丰富。研学摄影与视频制作领域专家。',
    image: '/images/team/team-4.jpg',
    skills: ['研学摄影', '视频制作', '活动记录'],
    xiaohongshuQR: '/images/team/qr-4.png',
    xiaohongshuName: '@郭晨曦记录',
  },
];

const clientLogos = [
  { name: '理想', nameEn: 'Li Auto', logo: '/images/brands/li-auto.svg' },
  { name: '平安银行', nameEn: 'Ping An Bank', logo: '/images/brands/pingan-bank.svg' },
  { name: '平安保险', nameEn: 'Ping An Insurance', logo: '/images/brands/pingan-insurance.svg' },
  { name: '人寿保险', nameEn: 'China Life', logo: '/images/brands/china-life.svg' },
  { name: '小雨伞旅行社', nameEn: 'Xiaoyusan Travel', logo: '/images/brands/xiaoyusan-travel.svg' },
  { name: '塔吉研学', nameEn: 'Taji Study', logo: '/images/brands/taji-study.svg' },
  { name: '文轩教育', nameEn: 'Winshare Education', logo: '/images/brands/winshare-education.svg' },
  { name: '成都七中', nameEn: 'Chengdu No.7 High School', logo: '/images/brands/chengdu-no7.svg' },
];

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const isZh = lang === 'zh';
  const works = await getWorksData();

  return (
    <main className="min-h-screen bg-white">
      <FloatingCapsuleNav locale={lang} />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images Carousel */}
        <HeroCarousel />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
            {isZh ? '至纯如雪，博弈瞬间' : 'Pure Vision. Strategic Capture.'}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            SnowChess Photography Studio
          </p>
          <Link
            href="#portfolio"
            className="px-8 py-4 bg-gold text-white rounded-full font-semibold hover:bg-gold-light transition-all hover:scale-105"
          >
            {isZh ? '查看作品集' : 'View Portfolio'}
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-snow-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-4xl font-bold text-center mb-4">
            {isZh ? '精选作品' : 'Selected Works'}
          </h2>
          <p className="text-center text-medium-gray">
            {isZh ? '每一帧都是故事' : 'Every frame tells a story'}
          </p>
        </div>

        {/* Horizontal Waterfall */}
        <PortfolioSection isZh={isZh} works={works} />
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {isZh ? '核心团队' : 'Our Team'}
            </h2>
            <p className="text-medium-gray">
              {isZh ? '专业摄影师，用心记录每个瞬间' : 'Professional photographers capturing your moments'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Trust Section */}
      <section className="py-20 bg-snow-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {isZh ? '品牌合作' : 'Trusted By'}
            </h2>
            <p className="text-medium-gray">
              {isZh ? '感谢以下品牌对我们的信任' : 'Thank you to these brands for trusting us'}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">500+</div>
              <div className="text-medium-gray">{isZh ? '满意客户' : 'Happy Clients'}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">10,000+</div>
              <div className="text-medium-gray">{isZh ? '精彩瞬间' : 'Moments Captured'}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">98%</div>
              <div className="text-medium-gray">{isZh ? '满意度' : 'Satisfaction'}</div>
            </div>
          </div>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-md transition-shadow"
              >
                <Image
                  src={client.logo}
                  alt={isZh ? client.name : client.nameEn}
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={lang} />
    </main>
  );
}
